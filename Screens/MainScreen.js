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
import AppColors from '../Styles/colors';
import {Styles} from '../Styles/styles';

export default class MainScreen extends Component {
  componentDidMount() {
    this.setState({
      isProfessional: this.props.route.params.isProfessional,
      userName: this.props.route.params.userName,
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      isProfessional: false,
      userName: '',
    };
  }

  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={MainStyles.mainView}>
          <Text style={Styles.registerTitle}>
            {'Hello, ' + this.state.userName}
          </Text>
          <Text>What can we do for you?</Text>
          <View style={MainStyles.choicesContainer}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('RecordsScreen', {
                  isProfessional: true,
                })
              }
              style={MainStyles.choiceButton}>
              <Text style={MainStyles.choiceText}>View Records</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={MainStyles.choiceButton}>
              <Text style={MainStyles.choiceText}>My Doctors</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={MainStyles.choiceButton}>
              <Text style={MainStyles.choiceText}>Get Educated</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const MainStyles = StyleSheet.create({
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
  choiceButton: {
    width: '80%',
    height: 80,
    borderWidth: 4,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 50,
  },
  choicesContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  choiceText: {
    fontSize: 24,
    color: 'gray',
    fontWeight: 'bold',
  },
});
