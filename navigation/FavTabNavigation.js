import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import StyledHeaderButton from '../components/StyledHeaderButton';
import {accentStyle} from '../styles/headerStyle';

const FavStack = createStackNavigator();

const FavTab = () => {
  return (
    <FavStack.Navigator
      screenOptions={{
        ...accentStyle,
      }}>
      <FavStack.Screen
        name="Favorite Meals"
        component={FavoritesScreen}
        options={({navigation}) => ({
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
      <FavStack.Screen
        name="Meal Detail"
        component={MealDetailScreen}
        options={({route}) => ({
          title: route.params.meal.title,
          ...accentStyle,
          headerRight: () => {
            return (
              <HeaderButtons HeaderButtonComponent={StyledHeaderButton}>
                <Item
                  title="Favorite"
                  iconName="star"
                  onPress={() => {
                    console.log('fav');
                  }}
                />
                <Item
                  title="Unfavorite"
                  iconName="star-outline"
                  onPress={() => {
                    console.log('unfav');
                  }}
                />
              </HeaderButtons>
            );
          },
        })}
      />
    </FavStack.Navigator>
  );
};

export default FavTab;
