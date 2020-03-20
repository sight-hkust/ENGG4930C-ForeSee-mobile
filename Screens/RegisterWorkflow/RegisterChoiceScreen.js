import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

export default class RegisterChoiceScreen extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={RegisterChoiceStyles.mainView}>
          <Text>What is your role?</Text>
        </SafeAreaView>
      </View>
    );
  }
}

const RegisterChoiceStyles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
  },
});
