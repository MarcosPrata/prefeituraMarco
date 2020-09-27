import React from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles'

export default function Dashboard() {
    const navigation = useNavigation();
    const route = useRoute();

    //navigation.navigate('Login', { incident:'' });

    function openDrawer() {
        navigation.openDrawer();
    }

    return (
        <View style={styles.screen}>
            <View style={styles.headerContainer}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={openDrawer}>
                        <Feather name='menu' size={28} color='#fff' />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Cadastros</Text>
                </View>
            </View>
        </View>

    );
}