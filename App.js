import 'react-native-gesture-handler';
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

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './Screens/LoginScreen';
import RegisterChoiceScreen from './Screens/RegisterWorkflow/RegisterChoiceScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterChoiceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App: () => React$Node = () => {
  return MyStack();
};

const AppStyles = StyleSheet.create({

});

export default App;
