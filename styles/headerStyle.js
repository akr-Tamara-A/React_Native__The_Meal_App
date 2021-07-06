import {Platform} from 'react-native';
import COLORS from '../constants/colors';

export const defaultStyle = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? COLORS.primaryColor : 'white',
  },
  headerTitleStyle: {
    color: Platform.OS === 'android' ? 'white' : COLORS.primaryColor,
    fontFamily: 'OpenSans-Bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'OpenSans-Regular',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primaryColor,
};

export const accentStyle = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? COLORS.accentColor : 'white',
  },
  headerTitleStyle: {
    color: Platform.OS === 'android' ? 'white' : COLORS.accentColor,
    fontFamily: 'OpenSans-Bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'OpenSans-Regular',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.accentColor,
};
