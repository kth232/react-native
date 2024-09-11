import React from 'react';
import {SafeAreaView, StyleSheet, Button, View} from 'react-native';
//import Greeting from './components/Greeting';
// import Box from './components/Box';
import Counter from './components/Counter';
//<SafeAreaView>로 감싸야 ios에서 스테이터스바와 컴포넌트가 겹치는 현상 방지할 수 있음
//StyleSheet: 스타일 입히는 컴포넌트, html이 아니기 때문에 선택자 없음

const App = () => {
  return (
    <SafeAreaView style={styles.block}>
      {/* <Greeting /> */}
      <View>
        <Counter />
        {/* <Box rounded size="small" />
        <Box size="medium" />
        <Box size="large" />
        <Button title="확인1" />
        <Button title="확인2" />
        <Button title="확인3" /> */}
        {/* 스타일을 적용하기 위해 사용하기 때문에 rounded만 써도 ={true}로 인식
      false는 적용할 필요없음 */}
      </View>
    </SafeAreaView>
  );
};

//태그에 직접 스타일 지정해야 함
//기본값은 flex, column형

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

// const styles = StyleSheet.create({
//   text: {
//     //키, 값형태로 스타일 지정
//     color: 'blue',
//     fontSize: 20, //픽셀은 인식 못함-> dpi 단위로 지정
//   },
//   block: {
//     backgroundColor: 'blue', //요소만큼만 영역 차지
//     flex: 1, //flexGrow: 화면 가득 채움
//     justifyContent: 'center', //세로 정렬
//     textAlign: 'center', //가로 정렬, 웹과 방향성 반대
//   },
//   buttons: {
//     flexDirection: 'row', //요소 가로로 나열
//     justifyContent: 'center',
//   },
//   button: {
//     width: 80,
//     height: 45,
//   },
// });

export default App;
