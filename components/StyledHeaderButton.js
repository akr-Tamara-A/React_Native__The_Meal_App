import React from 'react';
import {Platform} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
import COLORS from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const StyledHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Icon}
      color={Platform.OS === 'android' ? 'white' : COLORS.primaryColor}
      iconSize={23}
    />
  );
};

export default StyledHeaderButton;
