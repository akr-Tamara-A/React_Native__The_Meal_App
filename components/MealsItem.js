import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  View,
  ImageBackground,
} from 'react-native';
import BoldText from './BoldText';

const MealsItem = ({handlePress, item}) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.wrapper}>
      <TouchableComponent onPress={handlePress}>
        <View style={styles.item}>
          <ImageBackground source={{uri: item.imageUrl}} style={styles.imageBg}>
            <View style={styles.info}>
              <BoldText style={styles.title}>{item.title}</BoldText>
              <View style={styles.detailsWrapper}>
                <BoldText style={styles.text}>{item.duration}m</BoldText>
                <BoldText style={styles.text}>
                  {item.compleity.toUpperCase()}
                </BoldText>
                <BoldText style={styles.text}>
                  {item.affordability.toUpperCase()}
                </BoldText>
              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 2,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
    elevation: 5,
    margin: 15,
  },
  item: {
    backgroundColor: '#ccc',
    width: '100%',
    height: 200,
    borderRadius: 2,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
  },
  imageBg: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  info: {
    justifyContent: 'center',
    minHeight: '25%',
    backgroundColor: 'rgba(250, 250, 250, .75)',
  },
  detailsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  title: {
    color: '#111111',
    fontSize: 18,
    paddingHorizontal: 15,
  },
  text: {
    color: '#3a3a3a',
  },
});

export default MealsItem;
