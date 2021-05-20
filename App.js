import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryMealScreen from './screens/CategoryMealScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Category Meal" component={CategoryMealScreen} />
        <Stack.Screen name="Meal Detail" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
