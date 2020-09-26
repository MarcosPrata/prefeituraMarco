import React, { useEffect, useState } from 'react';
//import { Icon } from 'react-native-elements'
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
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);

    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Dashboard', { 'incident':1 });
    }

    async function loadIncidents() {
        if (loading) {
            return;
        }
        if (total > 0 && incidents.length == total) {
            return;
        }

        setLoading(true);
        const response = await api.get('/incidents', {
            params: { page }
        });

        setIncidents([...incidents, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadIncidents();
    }, [])

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
                    />

                    <Button
                        title="Entrar"
                        buttonStyle={styles.button}
                        onPress={() => { navigateToDetail() }}
                    />

                    <Image style={{ marginTop: 32 }} source={logoPrefeitura} />

                </View>
            </ImageBackground>
        </View>

    );
}
