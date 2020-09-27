import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { View, Image, ImageBackground } from 'react-native';

import api from '../../services/api'
import logoProjeto from '../assets/logoProjeto.png'
import logoPrefeitura from '../assets/logoPrefeitura.png'
import background from '../assets/background_small.png'
import styles from './styles'

export default function Incidents() {
    const [CPF, setCPF] = useState(2);
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    function login() {
        if(CPF==1){
            navigation.navigate('AdminScreen', { 'incident':1 });
        }else{
            navigation.navigate('UserScreen', { 'incident':1 });
        }
        
    }

    return (
        <View style={styles.AppScreen}>
            <ImageBackground source={background} style={styles.image}>
                <View style={styles.loginContainer}>
                    <Image source={logoProjeto} />

                    <Input
                        placeholder='CPF: '
                        leftIcon={
                            <Icon
                                style={{ marginEnd: 10 }}
                                name='user'
                                size={24}
                                color='#495057'
                            />
                        }
                        onChangeText={(value)=>{setCPF(value)}}
                    />

                    <Input
                        placeholder='Senha: '
                        leftIcon={
                            <Icon
                                style={{ marginEnd: 10 }}
                                name='lock'
                                size={24}
                                color='#495057'
                            />
                        }
                        onChangeText={(value)=>{setPassword(value)}}
                    />

                    <Button
                        title="Entrar"
                        buttonStyle={styles.button}
                        onPress={() => { login() }}
                    />

                    <Image style={{ marginTop: 32 }} source={logoPrefeitura} />

                </View>
            </ImageBackground>
        </View>

    );
}
