import React from 'react';
import {StyleSheet, View} from 'react-native';
import MealsList from '../components/MealsList';
import {useSelector} from 'react-redux';

const FavoritesScreen = ({navigation}) => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);

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
