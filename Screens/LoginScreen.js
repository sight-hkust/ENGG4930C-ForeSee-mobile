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
import {Styles} from '../Styles/styles';
import AppColors from '../Styles/colors';

export default class LoginScreen extends Component {
  state = {isDoctorLogin: false};

  ChangeLoginState() {
    this.setState({isDoctorLogin: !this.state.isDoctorLogin});
  }

  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={LoginStyles.mainView}>
          <View style={LoginStyles.logoContainer}>
            <Image
              style={LoginStyles.logo}
              source={require('ForSee/assets/images/ApplicationLogo.png')}
            />
          </View>
          <View style={LoginStyles.contentContainer}>
            <Text style={LoginStyles.doctorsLoginTitle}>
              {this.state.isDoctorLogin ? "Doctor's Login" : ''}
            </Text>
            <Text style={LoginStyles.labelText}>Email</Text>
            <TextInput style={LoginStyles.loginFieldsTextInput} />
            <Text style={LoginStyles.labelText}>Password</Text>
            <TextInput style={LoginStyles.loginFieldsTextInput} />

            <View style={LoginStyles.loginAndRegisterButtonContainer}>
              <TouchableOpacity
                style={Styles.smallButton}
                onPress={() => this.props.navigation.navigate('Register')}>
                <Text style={Styles.smallButtonText}>Sign Up</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Styles.smallButton}>
                <Text style={Styles.smallButtonText}>Login</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => this.ChangeLoginState()}
              style={LoginStyles.changeLoginOptionButton}>
              <Text>
                {this.state.isDoctorLogin
                  ? 'Go To Patient Login'
                  : 'Go To Doctor Login'}
              </Text>
            </TouchableOpacity>
          </View>
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
    marginBottom: 30,
  },
  logoContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  contentContainer: {
    flex: 4,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  logo: {
    width: 200,
    height: 200,
  },
  mainView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  loginAndRegisterButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: '100%',
  },
  registerButton: {
    height: 50,
    width: 150,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  changeLoginOptionButton: {
    marginTop: 20,
  },
  labelText: {
    width: '80%',
    textAlign: 'left',
    marginBottom: 10,
    fontSize: 24,
    color: 'gray',
    fontWeight: 'bold',
  },
  doctorsLoginTitle: {
    fontSize: 32,
    textAlign: 'center',
    width: '100%',
    fontWeight: 'bold',
    color: AppColors.primaryDark,
    marginBottom: 20,
  },
});
