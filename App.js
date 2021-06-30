import 'react-native-gesture-handler';
import React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryMealScreen from './screens/CategoryMealScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import FiltersScreen from './screens/FiltersScreen';
import COLORS from './constants/colors';
import StyledHeaderButton from './components/StyledHeaderButton';
import Icon from 'react-native-vector-icons/Ionicons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const FavStack = createStackNavigator();
const FiltersStack = createStackNavigator();
const Tab =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const tabNavigatorConfig =
  Platform.OS === 'android'
    ? {shifting: true}
    : {
        tabBarOptions: {
          activeTintColor: COLORS.accentColor,
          labelStyle: {fontSize: 16},
        },
      };

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor:
            Platform.OS === 'android' ? 'white' : COLORS.primaryColor,
          activeBackgroundColor:
            Platform.OS === 'android' ? COLORS.primaryColor : 'white',
          labelStyle: {
            fontSize: 18,
            fontFamily: 'OpenSans-Bold',
            fontWeight: 'bold',
          },
        }}>
        <Drawer.Screen name="Meals" component={TabNavigator} />
        <Drawer.Screen name="Filters" component={FiltersNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator {...tabNavigatorConfig}>
      <Tab.Screen
        name="Meals"
        component={HomeTab}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="restaurant" size={25} color={color} />
          ),
          tabBarColor: COLORS.primaryColor,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavTab}
        options={{
          tabBarIcon: ({color}) => <Icon name="star" size={25} color={color} />,
          tabBarColor: COLORS.accentColor,
        }}
      />
    </Tab.Navigator>
  );
};

const HomeTab = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === 'android' ? COLORS.primaryColor : 'white',
        },
        headerTitleStyle: {
          color: Platform.OS === 'android' ? 'white' : COLORS.primaryColor,
        },
        headerTintColor:
          Platform.OS === 'android' ? 'white' : COLORS.primaryColor,
      }}>
      <HomeStack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={({navigation}) => ({
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
      <HomeStack.Screen
        name="Category Meal"
        component={CategoryMealScreen}
        options={({route}) => ({
          title: route.params.item.title,
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android' ? route.params.item.color : 'white',
          },
          headerTitleStyle: {
            color:
              Platform.OS === 'android'
                ? route.params.item.textColor
                : COLORS.primaryColor,
          },
          headerTintColor:
            Platform.OS === 'android'
              ? route.params.item.textColor
              : COLORS.primaryColor,
        })}
      />
      <HomeStack.Screen
        name="Meal Detail"
        component={MealDetailScreen}
        options={({route, navigation}) => ({
          title: route.params.meal.title,
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android' ? COLORS.primaryColor : 'white',
          },
          headerTitleStyle: {
            color: Platform.OS === 'android' ? 'white' : COLORS.primaryColor,
          },
          headerTintColor:
            Platform.OS === 'android' ? 'white' : COLORS.primaryColor,
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
              </HeaderButtons>
            );
          },
        })}
      />
    </HomeStack.Navigator>
  );
};

const FavTab = () => {
  return (
    <FavStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === 'android' ? COLORS.accentColor : 'white',
        },
        headerTitleStyle: {
          color: Platform.OS === 'android' ? 'white' : COLORS.accentColor,
        },
        headerTintColor:
          Platform.OS === 'android' ? 'white' : COLORS.accentColor,
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
                    console.log('menu');
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
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android' ? COLORS.accentColor : 'white',
          },
          headerTitleStyle: {
            color: Platform.OS === 'android' ? 'white' : COLORS.primaryColor,
          },
          headerTintColor:
            Platform.OS === 'android' ? 'white' : COLORS.primaryColor,
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

export default App;
