import React from 'react';
import {View, Text, Button} from 'react-native';
//view: 보이는 화면에 대한 컴포넌트
//text: 글자 컴포넌트
//Button: 버튼 컴포넌트

const Greeting = ({name}) => {
  return (
    <>
      <View>
        <Text>Hello, {name ?? '기본 이름'}</Text>

        <Button title="확인" />
      </View>
    </>
  );
};

/*
Greeting.defaultProps = {
    name: '기본 이름',
};
*/

export default Greeting;
