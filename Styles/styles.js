import {StyleSheet} from 'react-native';
import AppColors from './colors';

export const Styles = StyleSheet.create({
  horizontalButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  smallButton: {
    borderWidth: 2,
    width: '40%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: 'gray',
  },
  smallButtonText: {
    fontSize: 24,
    color: 'gray',
    fontWeight: 'bold',
  },
  registerTitle: {
    fontSize: 32,
    color: AppColors.primaryDark,
    marginTop: 50,
    marginBottom: 20,
    textAlign: 'left',
    width: '80%',
    fontWeight: 'bold',
  },
});
