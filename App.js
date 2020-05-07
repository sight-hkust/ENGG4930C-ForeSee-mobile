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
import RegisterEmail from './Screens/RegisterWorkflow/RegisterEmail';
import RegisterPassword from './Screens/RegisterWorkflow/RegisterPassword';
import RegisterBirthday from './Screens/RegisterWorkflow/RegisterBirthday';
import RegisterPhone from './Screens/RegisterWorkflow/RegisterPhone';
import RegisterIsParent from './Screens/RegisterWorkflow/RegisterIsParent';
import MainScreen from './Screens/MainScreen';
import GetEducatedScreen from './Screens/GetEducated';
import RecordsScreen from './Screens/RecordsScreen';
import ArticleDetailScreen from './Screens/ArticleDetail';
import AskAnExpertScreen from './Screens/AskAnExpertScreen';
import AddRecordScreen from './Screens/AddRecordScreen';

const Stack = createStackNavigator();

global.realName = '';
global.email = '';
global.password = '';

function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Register" component={RegisterChoiceScreen}/>
                <Stack.Screen name="RegisterName" component={RegisterName}/>
                <Stack.Screen name="RegisterEmail" component={RegisterEmail}/>
                <Stack.Screen name="RegisterPassword" component={RegisterPassword}/>
                <Stack.Screen name="RegisterBirthday" component={RegisterBirthday}/>
                <Stack.Screen name="RegisterPhone" component={RegisterPhone}/>
                <Stack.Screen name="RegisterIsParent" component={RegisterIsParent}/>

                <Stack.Screen name="MainScreen" component={MainScreen}/>
                <Stack.Screen name="RecordsScreen" component={RecordsScreen}/>
                <Stack.Screen name="GetEducatedScreen" component={GetEducatedScreen}/>
                <Stack.Screen name="ArticleDetailScreen" component={ArticleDetailScreen}/>
                <Stack.Screen name="AskAnExpertScreen" component={AskAnExpertScreen}/>
                <Stack.Screen name="AddRecordScreen" component={AddRecordScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const App: () => React$Node = () => {
    return MyStack();
};

export default App;
