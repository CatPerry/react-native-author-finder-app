import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListsContainer from './ListsContainer';

const Main: React.FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <ListsContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 26,
    color: '#848785',
    padding: 15,
  }
});

export default Main;
