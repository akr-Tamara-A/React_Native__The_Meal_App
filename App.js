import 'react-native-gesture-handler';
import React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import COLORS from './constants/colors';
import {createDrawerNavigator} from '@react-navigation/drawer';

import TabNavigator from './navigation/TabNavigator';
import FiltersNavigator from './navigation/FilterNavigator';

import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import mealsReducer from './store/reducers/meals';

const Drawer = createDrawerNavigator();

const rootReducer = combineReducers({
  meals: mealsReducer,
});
const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
