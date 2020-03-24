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

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;
const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
};

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
          <Text style={Styles.registerTitle}>
            {'Hello, ' + this.state.userName}
          </Text>
          <Text>What can we do for you?</Text>
          <LineChart
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get('window').width} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
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
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
          <View style={RecordsStyles.choicesContainer}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('RegisterName', {
                  isProfessional: false,
                })
              }
              style={RecordsStyles.choiceButton}>
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
});
