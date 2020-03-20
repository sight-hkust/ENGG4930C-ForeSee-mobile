import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';

export default class LoginScreen extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={LoginStyles.mainView}>
          <Image
            style={LoginStyles.logo}
            source={require('ForSee/assets/images/ApplicationLogo.png')}
          />
          <Text>Email</Text>
          <TextInput style={LoginStyles.loginFieldsTextInput} />
          <Text>Password</Text>
          <TextInput style={LoginStyles.loginFieldsTextInput} />

          <View style={LoginStyles.loginAndRegisterButtonContainer}>
            <TouchableOpacity
              style={LoginStyles.registerButton}
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text>Sign Up!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={LoginStyles.registerButton}>
              <Text>Login!</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Text>Doctor Login</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    );
  }
}

const LoginStyles = StyleSheet.create({
  loginFieldsTextInput: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
  },
  logo: {
    width: 200,
    height: 200,
  },
  mainView: {
    alignItems: 'center',
  },
  loginAndRegisterButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
  },
  registerButton: {
    height: 50,
    width: 150,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
