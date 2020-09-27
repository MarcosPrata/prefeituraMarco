import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Cadastros from './pages/Cadastros';
import Acompanhamentos from './pages/Acompanhamentos';
import Relatorios from './pages/Relatorios';
import Usuarios from './pages/Usuarios';

const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>

            <View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 32 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fafafa', borderRadius: 50, padding: 20 }}>
                        <Text style={{ color: '#103d24' }}>MP</Text>
                    </View>
                    <Text style={{ color: '#f9f9f9', marginTop: '3%', fontFamily: 'sans-serif-condensed' }}>Marcos Prata</Text>
                    <Text style={{ color: '#f9f9f9', fontFamily: 'sans-serif-condensed' }}>mhpjunior3@gmail.com</Text>
                </View>
            </View>

            <DrawerItemList {...props} />

            <Button
                title='Sair'
                titleStyle={{ color: '#103d24', fontFamily: 'sans-serif-condensed' }}
                buttonStyle={{ backgroundColor: '#fafafa', margin: 32 }}
                onPress={() => { props.navigation.navigate('Login');}}
            />

        </DrawerContentScrollView>
    );
}

export default function Routes() {

    function AdminScreen() {
        return (
            <Drawer.Navigator
                drawerContent={CustomDrawerContent}
                drawerContentOptions={{
                    activeTintColor: '#fafafa',
                    inactiveTintColor: '#fbfbfb',
                    itemStyle: {},
                }}
                drawerStyle={{
                    backgroundColor: '#103d24',
                    width: 240,
                }}
            >
                <Drawer.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{
                        drawerIcon: () => (
                            <MaterialIcons
                                style={{ marginEnd: 10 }}
                                name='dashboard'
                                size={24}
                                color='#fafafa'
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name="Cadastros"
                    component={Cadastros}
                    options={{
                        drawerIcon: () => (
                            <MaterialIcons
                                style={{ marginEnd: 10 }}
                                name='person'
                                size={24}
                                color='#fafafa'
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name="Acompanhamentos"
                    component={Acompanhamentos}
                    options={{
                        drawerIcon: () => (
                            <MaterialIcons
                                style={{ marginEnd: 10 }}
                                name='content-paste'
                                size={24}
                                color='#fafafa'
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name="Relatórios"
                    component={Relatorios}
                    options={{
                        drawerIcon: () => (
                            <MaterialIcons
                                style={{ marginEnd: 10 }}
                                name='library-books'
                                size={24}
                                color='#fafafa'
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name="Usuários"
                    component={Usuarios}
                    options={{
                        drawerIcon: () => (
                            <MaterialIcons
                                style={{ marginEnd: 10 }}
                                name='bubble-chart'
                                size={24}
                                color='#fafafa'
                            />
                        )
                    }}
                />
            </Drawer.Navigator>

        );
    }

    function UserScreen() {
        return (
            <Drawer.Navigator
                drawerContent={CustomDrawerContent}
                drawerContentOptions={{
                    activeTintColor: '#fafafa',
                    inactiveTintColor: '#fbfbfb',
                    itemStyle: {},
                }}
                drawerStyle={{
                    backgroundColor: '#103d24',
                    width: 240,
                }}
            >
                <Drawer.Screen
                    name="Cadastros"
                    component={Dashboard}
                    options={{
                        drawerIcon: () => (
                            <MaterialIcons
                                style={{ marginEnd: 10 }}
                                name='person'
                                size={24}
                                color='#fafafa'
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name="Acompanhamentos"
                    component={Dashboard}
                    options={{
                        drawerIcon: () => (
                            <MaterialIcons
                                style={{ marginEnd: 10 }}
                                name='content-paste'
                                size={24}
                                color='#fafafa'
                            />
                        )
                    }}
                />
            </Drawer.Navigator>

        );
    }

    return (
        <NavigationContainer>
            <AppStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="AdminScreen" component={AdminScreen} />
                <AppStack.Screen name="UserScreen" component={UserScreen} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}