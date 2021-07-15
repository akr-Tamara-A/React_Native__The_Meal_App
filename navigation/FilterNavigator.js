import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import FiltersScreen from '../screens/FiltersScreen';
import StyledHeaderButton from '../components/StyledHeaderButton';
import {defaultStyle} from '../styles/headerStyle';

const FiltersStack = createStackNavigator();

const FiltersNavigator = () => {
  return (
    <FiltersStack.Navigator>
      <FiltersStack.Screen
        name="Filter Meals"
        component={FiltersScreen}
        options={({navigation}) => ({
          ...defaultStyle,
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={StyledHeaderButton}>
                <Item
                  title="Menu"
                  iconName="menu"
                  onPress={() => {
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
