import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Alert,
    FlatList,
} from 'react-native';
import React, {Component} from 'react';
import AppColors from '../Styles/colors';
import {Styles} from '../Styles/styles';
import Strings from '../Strings';

import {LineChart} from 'react-native-chart-kit';

export default class AddRecordScreen extends Component {
    componentDidMount() {
        this.setState({
            isProfessional: this.props.route.params.isProfessional,
            userName: this.props.route.params.userName,
        });
        this.getUserData();
    }

    constructor(props) {
        super(props);
        this.state = {
            isProfessional: false,
            userName: '',
            dates: [],
            rightEye: [],
            leftEye: [],
            records: [],
        };
    }

    getUserData() {
        fetch('https://se69teeec9.execute-api.us-east-1.amazonaws.com/api/get_user_records?email=' + global.email + '&password=' + global.password)
            .then((response) => response.json())
            .then((json) => {
                console.warn(json);
                if (json.status === 'OK') {
                    let records = json.records;
                    let dates = [];
                    let rightEyeData = [];
                    let leftEyeData = [];
                    for (let i = 0; i < records.length; i++) {
                        let record = records[i];
                        dates.push(record.year);
                        rightEyeData.push(record.right_eye_myopia);
                        leftEyeData.push(record.left_eye_myopia);
                    }
                    /*
                    this.setState({
                        dates: dates,
                        rightEye: rightEyeData,
                        leftEye: leftEyeData,
                        records: records,
                    });*/
                } else {
                    Alert.alert('A problem occurred!');
                }
            })
            .catch((error) => {
                Alert.alert('A problem occurred!');
                console.error(error);
            });
    }

    renderRecord(item) {
        return (
            <View style={AddRecordStyles.recordContainer}>
                <Text style={AddRecordStyles.recordText}>{item.month} / {item.year}</Text>
                <View style={AddRecordStyles.grayLine}/>
            </View>);
    }

    render() {
        return (
            <View>
                <StatusBar barStyle="dark-content"/>
                <ScrollView style={AddRecordStyles.mainView}
                            contentContainerStyle={AddRecordStyles.scrollViewContentContainer}>
                    {this.state.dates.length > 0 ? <View>
                        <Text>{Strings.leftEye}</Text>
                        <LineChart
                            data={{
                                labels: this.state.dates,
                                datasets: [
                                    {
                                        data: this.state.leftEye,
                                    },
                                ],
                            }}
                            width={(Dimensions.get('window').width * 9) / 10} // from react-native
                            height={220}
                            yAxisInterval={1} // optional, defaults to 1
                            chartConfig={{
                                backgroundColor: '#e26a00',
                                backgroundGradientFrom: '#fb8c00',
                                backgroundGradientTo: '#ffa726',
                                decimalPlaces: 2, // optional, defaults to 2dp
                                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                style: {
                                    borderRadius: 16,
                                },
                                propsForDots: {
                                    r: '6',
                                    strokeWidth: '2',
                                    stroke: '#ffa726',
                                },
                            }}
                            style={{
                                marginVertical: 8,
                                borderRadius: 16,
                                marginTop: 30,
                            }}
                        />
                        <Text>{Strings.rightEye}</Text>
                        <LineChart
                            data={{
                                labels: this.state.dates,
                                datasets: [
                                    {
                                        data: this.state.rightEye,
                                    },
                                ],
                            }}
                            width={(Dimensions.get('window').width * 9) / 10} // from react-native
                            height={220}
                            yAxisInterval={1} // optional, defaults to 1
                            chartConfig={{
                                backgroundColor: '#e26a00',
                                backgroundGradientFrom: '#fb8c00',
                                backgroundGradientTo: '#ffa726',
                                decimalPlaces: 2, // optional, defaults to 2dp
                                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                style: {
                                    borderRadius: 16,
                                },
                                propsForDots: {
                                    r: '6',
                                    strokeWidth: '2',
                                    stroke: '#ffa726',
                                },
                            }}
                            style={{
                                marginVertical: 8,
                                borderRadius: 16,
                                marginTop: 30,
                            }}
                        />
                    </View> : null}
                    <Text>{Strings.records}</Text>
                    {this.state.records.length > 0 ?
                        <View>
                            <FlatList data={this.state.records}
                                      extraData={this.state.records}
                                      keyExtractor={item => item.id}
                                      renderItem={(item) => this.renderRecord(item)}/>
                        </View> : <Text>You currently don't have any records.</Text>}
                    <View style={AddRecordStyles.choicesContainer}>
                        <TouchableOpacity style={AddRecordStyles.choiceButton}>
                            <Text style={AddRecordStyles.choiceText}>Import New Data</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const AddRecordStyles = StyleSheet.create({
    mainView: {
        height: '100%',
    },
    scrollViewContentContainer: {
        alignItems: 'center',
        paddingTop: 50,
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
    adviceText: {
        width: '80%',
        marginTop: 10,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        borderColor: 'orange',
        marginBottom: 10,
    },
    recordContainer: {
        height: 60,
        width: '100%',
    },
    grayLine: {
        height: 1,
        width: '100%',
        backgroundColor: 'gray',
        marginLeft: 20,
    },
    recordText: {
        textAlign: 'left',
        marginLeft: 20,
        fontSize: 20,
        width: '100%',
        marginBottom: 10,
        marginTop: 20,
    },
});

// TODO: Generate a method to summarize user data to plain text
