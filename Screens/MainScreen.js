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
});
