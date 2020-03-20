import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {Component} from 'react';
import AppColors from '../../Styles/colors';

export default class RegisterName extends Component {
  //this.props.route.params.isProfessional
  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={RegisterNameStyles.mainView}>
          <Text style={RegisterNameStyles.title}>What is your name?</Text>
          <TextInput
            style={RegisterNameStyles.textInput}
            placeholder={'John Galt...'}
          />
          <View style={RegisterNameStyles.buttonContainer}>
            <TouchableOpacity style={RegisterNameStyles.button}>
              <Text style={RegisterNameStyles.buttonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                RegisterNameStyles.button,
                RegisterNameStyles.nextButton,
              ]}>
              <Text
                style={[
                  RegisterNameStyles.buttonText,
                  RegisterNameStyles.nextText,
                ]}>
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const RegisterNameStyles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    height: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  button: {
    borderWidth: 2,
    width: '40%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: 'gray',
  },
  buttonText: {
    fontSize: 24,
    color: 'gray',
    fontWeight: 'bold',
  },
  nextButton: {
    borderColor: AppColors.primaryLight,
  },
  nextText: {
    color: AppColors.primaryLight,
  },
  title: {
    fontSize: 32,
    marginTop: 50,
  },
  textInput: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    width: '100%',
  },
});
