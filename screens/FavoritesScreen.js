import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MEALS} from '../data/dummy-data';
import MealsList from '../components/MealsList';

const FavoritesScreen = ({navigation}) => {
  const favMeals = MEALS.filter(meal => {
    return meal.id === 'm1' || meal.id === 'm2';
  });
  return (
    <View style={styles.screen}>
      <MealsList dataList={favMeals} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritesScreen;
