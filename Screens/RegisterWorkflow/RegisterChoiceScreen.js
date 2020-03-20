import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';

export default class RegisterChoiceScreen extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={RegisterChoiceStyles.mainView}>
          <Text>What is your role?</Text>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('RegisterName', {
                isProfessional: true,
              })
            }
            style={RegisterChoiceStyles.choiceButton}>
            <Text style={RegisterChoiceStyles.choiceText}>
              Profesional (Doctor)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('RegisterName', {
                isProfessional: false,
              })
            }
            style={RegisterChoiceStyles.choiceButton}>
            <Text style={RegisterChoiceStyles.choiceText}>Patient</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    );
  }
}

const RegisterChoiceStyles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
  },
  choiceButton: {
    width: '80%',
    height: 80,
    borderWidth: 2,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  choiceText: {
    fontSize: 16,
  },
});
