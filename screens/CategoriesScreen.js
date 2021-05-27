import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import GridItem from '../components/GridItem';

const CategoriesScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        renderItem={({item}) => {
          return (
            <GridItem
              item={item}
              handlePress={() => {
                navigation.navigate('Category Meal', {
                  item: item,
                });
              }}
            />
          );
        }}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default CategoriesScreen;
