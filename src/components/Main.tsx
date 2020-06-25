import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthorList from './AuthorList';

const Main: React.FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Posts</Text>
      <AuthorList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingRight: 30,
    marginRight: 30,
  },
  headerText: {
    fontSize: 26,
    color: '#000000',
    padding: 15,
  }
});

export default Main;
