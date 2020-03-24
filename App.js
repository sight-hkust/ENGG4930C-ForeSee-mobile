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
import RegisterName from './Screens/RegisterWorkflow/RegisterName';
import MainScreen from './Screens/MainScreen';
import RecordsScreen from './Screens/RecordsScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterChoiceScreen} />
        <Stack.Screen name="RegisterName" component={RegisterName} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="RecordsScreen" component={RecordsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App: () => React$Node = () => {
  return MyStack();
};

export default App;
