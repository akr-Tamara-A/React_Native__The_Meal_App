import React from 'react';
import {FlatList, StyleSheet, Dimensions, View} from 'react-native';
import {CATEGORIES} from '../data/15.1 dummy-data';
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
  item: {
    width: Dimensions.get('window').width / 2 - 30,
    height: 150,
    margin: 15,
    backgroundColor: 'grey',
  },
});

export default CategoriesScreen;
