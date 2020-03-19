import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={AppStyles.mainView}>
        <Image
          style={AppStyles.logo}
          source={require('ForSee/assets/images/ApplicationLogo.png')}
        />
        <Text>Email</Text>
        <TextInput style={AppStyles.loginFieldsTextInput} />
        <Text>Password</Text>
        <TextInput style={AppStyles.loginFieldsTextInput} />

        <View style={AppStyles.loginAndRegisterButtonContainer}>
          <TouchableOpacity>
            <Text>Sign Up!</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Login!</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const AppStyles = StyleSheet.create({
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
  },
});

export default App;
