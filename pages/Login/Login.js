import React, { Component } from 'react';
import { StyleSheet, View, Button} from 'react-native';

export default class Login extends Component {
  static navigationOptions = {
    title: 'Login Page',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button title='Dashboard'
        onPress={() =>navigate('Dashboard')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});