import React, { Component } from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default class Dashboard extends Component {
  static navigationOptions = {
    title: 'Dashboard',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>You are on Dashboard</Text>
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