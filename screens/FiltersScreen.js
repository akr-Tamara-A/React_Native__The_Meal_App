import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Switch} from 'react-native';
import BoldText from '../components/BoldText';
import RegularText from '../components/RegularText';
import COLORS from '../constants/colors';
import {Platform} from 'react-native';

const FiltersSwitch = ({label, value, onChange}) => {
  return (
    <View style={styles.filterContainer}>
      <RegularText style={styles.label}>{label}</RegularText>
      <Switch
        thumbColor={Platform.OS === 'android' && COLORS.primaryColor}
        trackColor={{
          true: COLORS.primaryColor,
          false: Platform.OS === 'android' && '#ccc',
        }}
        value={value}
        onValueChange={newValue => onChange(newValue)}
        style={
          Platform.OS === 'android' && {
            transform: [{scaleX: 1.1}, {scaleY: 1.1}],
          }
        }
      />
    </View>
  );
};

const FiltersScreen = ({navigation}) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegatarian, setIsVegatarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);

  useEffect(() => {
    navigation.setParams({
      save: {
        glutenFree: isGlutenFree,
        vegan: isVegan,
        vegatarian: isVegatarian,
        lactoseFree: isLactoseFree,
      },
    });
  }, [isGlutenFree, isLactoseFree, isVegan, isVegatarian, navigation]);

  return (
    <View style={styles.screen}>
      <BoldText style={styles.title}>Available Filters / Restrictions</BoldText>
      <FiltersSwitch
        label={'Gluten-free'}
        value={isGlutenFree}
        onChange={setIsGlutenFree}
      />
      <FiltersSwitch label={'Vegan'} value={isVegan} onChange={setIsVegan} />
      <FiltersSwitch
        label={'Vegatarian'}
        value={isVegatarian}
        onChange={setIsVegatarian}
      />
      <FiltersSwitch
        label={'Lactose-free'}
        value={isLactoseFree}
        onChange={setIsLactoseFree}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    margin: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  label: {
    fontSize: 16,
  },
});

export default FiltersScreen;
