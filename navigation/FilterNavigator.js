import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import COLORS from '../constants/colors';
import FiltersScreen from '../screens/FiltersScreen';
import StyledHeaderButton from '../components/StyledHeaderButton';

const FiltersStack = createStackNavigator();

const FiltersNavigator = () => {
  return (
    <FiltersStack.Navigator>
      <FiltersStack.Screen
        name="Filter Meals"
        component={FiltersScreen}
        options={({navigation}) => ({
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android' ? COLORS.primaryColor : 'white',
          },
          headerTitleStyle: {
            color: Platform.OS === 'android' ? 'white' : COLORS.primaryColor,
          },
          headerTintColor:
            Platform.OS === 'android' ? 'white' : COLORS.primaryColor,
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={StyledHeaderButton}>
                <Item
                  title="Menu"
                  iconName="menu"
                  onPress={() => {
                    console.log('menu');
                    navigation.toggleDrawer();
                  }}
                />
              </HeaderButtons>
            );
          },
        })}
      />
    </FiltersStack.Navigator>
  );
};

export default FiltersNavigator;
