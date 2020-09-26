import React from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../assets/logo.png'
import styles from './styles'

export default function Dashboard() {
    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;
    const message = 'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "' + incident.title + '" com o valor de "' + Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value) + '"'

    function navigateBack() {
        navigation.goBack();
    }
    function sendEmail() {
        MailComposer.composeAsync({
            subject: 'Héroi do caso: "' + incident.title + '" ',
            recipients: [incident.email],
            body: message
        })
    }
    function sendWhatsapp() {
        Linking.openURL('whatsapp://send?phone=' + incident.whatsapp + '&text=' + message);
    }
    return (
        <View style={styles.headerContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name='arrow-left' size={28} color='#fff' />
                </TouchableOpacity>
                <Text style={styles.headerText}>Dashboard</Text>
            </View>

        </View>
    );
}