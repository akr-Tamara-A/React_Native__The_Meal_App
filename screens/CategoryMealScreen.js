import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const CategoryMealScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>Category Meal Screen</Text>
      <Button
        title="To Meal Detail"
        onPress={() => {
          navigation.navigate('Meal Detail');
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
