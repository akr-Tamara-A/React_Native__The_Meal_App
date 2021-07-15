import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import MealsList from '../components/MealsList';
import BoldText from '../components/BoldText';
import {useSelector} from 'react-redux';

const CategoryMealScreen = ({navigation}) => {
  const route = useRoute();
  const selectedCategory = route.params.item.id;

  const availableMeals = useSelector(state => state.meals.filteredMeals);
  // let displayedMeals;
  // useEffect(() => {
  //   const displayedMeals = availableMeals.filter(meal => {
  //     return meal.categoryId.indexOf(selectedCategory) >= 0;
  //   });
  // }, [availableMeals, selectedCategory]);

  const displayedMeals = availableMeals.filter(meal => {
    return meal.categoryId.indexOf(selectedCategory) >= 0;
  });

  return (
    <View style={styles.screen}>
      {displayedMeals.length === 0 ? (
        <View style={styles.wrapper}>
          <BoldText style={styles.text}>No meals found.</BoldText>
          <BoldText style={styles.text}>Maybe check your filters?</BoldText>
        </View>
      ) : (
        <MealsList dataList={displayedMeals} navigation={navigation} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default CategoryMealScreen;
