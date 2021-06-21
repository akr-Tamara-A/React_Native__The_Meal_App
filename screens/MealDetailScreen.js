import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const MealDetailScreen = () => {
  const route = useRoute();
  const meal = route.params.meal;

  return (
    <View style={styles.screen}>
      <Text>Meal Detail Screen</Text>
      <Text>{meal.title}</Text>
      <Text>{meal.compleity}</Text>
      <Text>{meal.isVegan ? 'is vegan' : 'not vegan'}</Text>
      <Text>{meal.affordability}</Text>
      <Icon name="star-outline" size={30} />
      <Button title="star-outline" labelStyle={{fontSize: 25}}>
        <Icon name="star-outline" size={23} style={{fontSize: 30}} />
      </Button>
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

export default MealDetailScreen;
