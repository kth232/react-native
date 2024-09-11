import React from 'react';
import {View, StyleSheet} from 'react-native';

const Box = ({rounded}) => {
  //스타일 배열형태로 여러개 동시 적용 가능
  //삼항조건식 또는 && 연산자로 상황에 따라 스타일 적용 다르게 줄 수 있다
  return <View styles={[styles.box, rounded ? styles.rounded : null]} />;
};

const styles = StyleSheet.create({
  box: {
    width: 64,
    height: 64,
    backgroundColor: 'black',
  },
  rounded: {
    borderRadius: 16,
  },
  small: {
    width: 32,
    height: 32,
  },
  medium: {
    width: 64,
    height: 64,
  },
  large: {
    width: 128,
    height: 128,
  },
});

export default Box;
