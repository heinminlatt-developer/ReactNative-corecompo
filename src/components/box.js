import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Box = ({ backgroundColor, children }) => {
  return (
    <View style={[styles.box, { backgroundColor },]}>
      <Text>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 20,
    width:100,
    height:100,
    
  },
});

export default Box;
