import React from 'react';
import {StyleSheet, View} from 'react-native';
import MealsList from '../components/MealsList';
import {useSelector} from 'react-redux';
import BoldText from '../components/BoldText';

const FavoritesScreen = ({navigation}) => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);

  return (
    <View style={styles.screen}>
      {favMeals.length === 0 || !favMeals ? (
        <View style={styles.wrapper}>
          <BoldText style={styles.text}>No favorite meals found.</BoldText>
          <BoldText style={styles.text}>Start adding some!</BoldText>
        </View>
      ) : (
        <MealsList dataList={favMeals} navigation={navigation} />
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

export default FavoritesScreen;
