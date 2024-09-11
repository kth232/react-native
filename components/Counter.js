import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Counter = () => {
  const [number, setNumber] = useState(0);

  return (
    <View sytle={styles.block}>
      <View style={styles.numberArea}>
        <Text>{number}</Text>
      </View>
      <Button title="+1" onPress={() => setNumber(number + 1)} />
      <Button title="-1" onPress={() => setNumber(number - 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  numberArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 1,
  },
});

export default Counter;
