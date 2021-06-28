import React from 'react';
import {FlatList} from 'react-native';
import MealsItem from './MealsItem';

const MealsList = ({dataList, navigation, category}) => {
  return (
    <FlatList
      data={dataList}
      keyExtractor={item => item.id}
      style={{width: '100%'}}
      renderItem={({item}) => {
        return (
          <MealsItem
            item={item}
            handlePress={() => {
              navigation.navigate('Meal Detail', {
                meal: item,
                // category: category,
              });
            }}
          />
        );
      }}
    />
  );
};

export default MealsList;
