import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {MEALS} from '../data/dummy-data';
import {useRoute} from '@react-navigation/native';
import MealsItem from '../components/MealsItem';

const CategoryMealScreen = ({navigation}) => {
  const route = useRoute();
  const selectedCategory = route.params.item.id;
  const displayedMeals = MEALS.filter(meal => {
    return meal.categoryId.indexOf(selectedCategory) >= 0;
  });
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        style={{width: '100%'}}
        renderItem={({item}) => {
          return (
            <MealsItem
              item={item}
              handlePress={() => {
                navigation.navigate('Meal Detail', {
                  meal: item,
                  category: route.params.item,
                });
              }}
            />
          );
        }}
      />
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
