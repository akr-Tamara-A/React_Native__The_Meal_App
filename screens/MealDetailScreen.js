import React from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import RegularText from '../components/RegularText';
import BoldText from '../components/BoldText';

const ListItem = ({children}) => {
  return (
    <View style={styles.listItem}>
      <RegularText>{children}</RegularText>
    </View>
  );
};

const MealDetailScreen = () => {
  const route = useRoute();
  const meal = route.params.meal;

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.wrapper}>
        <Image source={{uri: meal.imageUrl}} style={styles.image} />
        <View style={styles.detailsWrapper}>
          <RegularText>{meal.duration} min</RegularText>
          <RegularText>{meal.compleity.toUpperCase()}</RegularText>
          <RegularText>{meal.affordability.toUpperCase()}</RegularText>
        </View>
        <View style={styles.block}>
          <BoldText style={styles.blockTitle}>INGRIDIENTS</BoldText>
          {meal.ingredients.map(item => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </View>
        <View style={styles.block}>
          <BoldText style={styles.blockTitle}>STEPS</BoldText>
          {meal.steps.map(item => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
  },
  detailsWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  block: {
    padding: 10,
  },
  blockTitle: {
    fontSize: 18,
    paddingBottom: 5,
    textAlign: 'center',
  },
  listItem: {
    margin: 5,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
});

export default MealDetailScreen;
