import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import MealsList from '../components/MealsList';
import {useSelector} from 'react-redux';

const CategoryMealScreen = ({navigation}) => {
  const route = useRoute();
  const selectedCategory = route.params.item.id;

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(meal => {
    return meal.categoryId.indexOf(selectedCategory) >= 0;
  });

  return (
    <View style={styles.screen}>
      <MealsList dataList={displayedMeals} navigation={navigation} />
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

export default CategoryMealScreen;
