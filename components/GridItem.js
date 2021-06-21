import React from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  View,
} from 'react-native';
import BoldText from './BoldText';

const GridItem = ({handlePress, item}) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.wrapper}>
      <TouchableComponent onPress={handlePress}>
        <View style={[styles.item, {backgroundColor: item.color}]}>
          <BoldText style={styles.text}>{item.title}</BoldText>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 15,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
    elevation: 5,
    margin: 15,
  },
  item: {
    width: Dimensions.get('window').width / 2 - 30,
    height: 150,
    borderRadius: 15,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  text: {
    color: '#333333',
    fontSize: 20,
  },
});

export default GridItem;
