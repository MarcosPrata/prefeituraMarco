import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator();

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Relatorios from './pages/Relatorios';

export default function Routes() {

    function DrawerScreen() {
        return (
            <Drawer.Navigator >
                <Drawer.Screen name="Dashboard" component={Dashboard} />
                <Drawer.Screen name="Relatórios" component={Relatorios} />
            </Drawer.Navigator>
        );
    }

    return (
        <NavigationContainer>
            <AppStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="DrawerScreen" component={DrawerScreen} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}