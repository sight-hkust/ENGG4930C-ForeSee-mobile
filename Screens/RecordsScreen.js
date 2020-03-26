import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import React, {Component} from 'react';
import AppColors from '../Styles/colors';
import {Styles} from '../Styles/styles';

import {LineChart} from 'react-native-chart-kit';

export default class RecordsScreen extends Component {
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
        <SafeAreaView style={RecordsStyles.mainView}>
          <LineChart
            data={{
              labels: [2005, 2011, 2012, 2014, 2017, 2018, 2020],
              datasets: [
                {
                  data: [0, 0.25, 1, 1.5, 2, 2.3, 3],
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
          <Text multiline={true} style={RecordsStyles.adviceText}>
            General explanation: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Text>
          <View style={RecordsStyles.recordContainer}>
            <Text style={RecordsStyles.recordText}>02 / 01 / 2005</Text>
            <View style={RecordsStyles.grayLine} />
          </View>
          <View style={RecordsStyles.recordContainer}>
            <Text style={RecordsStyles.recordText}>02 / 01 / 2005</Text>
            <View style={RecordsStyles.grayLine} />
          </View>
          <View style={RecordsStyles.recordContainer}>
            <Text style={RecordsStyles.recordText}>02 / 01 / 2005</Text>
            <View style={RecordsStyles.grayLine} />
          </View>
          <View style={RecordsStyles.recordContainer}>
            <Text style={RecordsStyles.recordText}>02 / 01 / 2005</Text>
            <View style={RecordsStyles.grayLine} />
          </View>
          <View style={RecordsStyles.choicesContainer}>
            <TouchableOpacity style={RecordsStyles.choiceButton}>
              <Text style={RecordsStyles.choiceText}>Import New Data</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const RecordsStyles = StyleSheet.create({
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
