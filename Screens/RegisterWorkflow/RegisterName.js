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
import {Styles} from '../../Styles/styles';

export default class RegisterName extends Component {
  componentDidMount() {
    this.setState({
      isProfessional: this.props.route.params.isProfessional,
      userName: '',
    });
  }

  goToNextPage() {
    this.props.navigation.navigate('MainScreen', {
      isProfessional: this.state.isProfessional,
      userName: this.state.userName,
    });
  }

  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={RegisterNameStyles.mainView}>
          <Text style={Styles.registerTitle}>What is your name?</Text>
          <TextInput
            style={RegisterNameStyles.textInput}
            placeholder={'Your Name...'}
            onChangeText={text => this.setState({userName: text})}
          />
          <View style={RegisterNameStyles.buttonContainer}>
            <TouchableOpacity
              style={RegisterNameStyles.button}
              onPress={() => this.props.navigation.goBack()}>
              <Text style={RegisterNameStyles.buttonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[RegisterNameStyles.button, RegisterNameStyles.nextButton]}
              onPress={() => this.goToNextPage()}>
              <Text
                style={[
                  RegisterNameStyles.buttonText,
                  RegisterNameStyles.nextText,
                ]}>
                Next
              </Text>
            </TouchableOpacity>
          </View>
          <Text>By continuing you Agree to our Terms of Use and ....</Text>
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
    borderColor: AppColors.primaryDark,
  },
  nextText: {
    color: AppColors.primaryDark,
  },
  textInput: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    width: '80%',
    marginBottom: 50,
  },
});
