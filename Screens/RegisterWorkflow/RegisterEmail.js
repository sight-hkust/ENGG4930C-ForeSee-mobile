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

export default class RegisterEmail extends Component {
    componentDidMount() {
        this.setState({
            userName: this.props.route.params.userName,
            email: '',
        });
    }

    goToNextPage() {
        this.props.navigation.navigate('RegisterPassword', {
            userName: this.state.userName,
            email: this.state.email
        });
    }

    render() {
        return (
            <View>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView style={RegisterNameStyles.mainView}>
                    <Text style={Styles.registerTitle}>What is your email?</Text>
                    <TextInput
                        style={RegisterNameStyles.textInput}
                        placeholder={'Your Email'}
                        onChangeText={text => this.setState({email: text})}
                    />
                    <View style={RegisterNameStyles.buttonContainer}>
                        <TouchableOpacity
                            style={Styles.smallButton}
                            onPress={() => this.props.navigation.goBack()}>
                            <Text style={RegisterNameStyles.buttonText}>Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[Styles.smallButton, Styles.aProgressionButton]}
                            onPress={() => this.goToNextPage()}>
                            <Text
                                style={[
                                    Styles.smallButtonText,
                                    Styles.aProgressionText,
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
        width: '80%',
        justifyContent: 'space-between',
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
