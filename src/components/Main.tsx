import React from 'react';
import { StyleSheet, View } from 'react-native';
import AuthorList from './AuthorList';

const Main: React.FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <AuthorList />
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
