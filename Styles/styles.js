import {StyleSheet} from 'react-native';

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
});
