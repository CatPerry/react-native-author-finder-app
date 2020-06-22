import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import ListItems from './components/ListItems';
import AuthorDetails from './components/AuthorDetails';
// import { NavigationContainer } from '@react-navigation/native';

export function App() {

  return (
    // <NavigationContainer>
    <View>
      <Header />
      <View style={styles.container}>
        <Text style={styles.headerText}>Authors</Text>
        <ListItems />
        <AuthorDetails />
      </View>
    </View>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 0,
    width: '100%',
  },
  headerText: {
    fontSize: 26,
    color: '#000000',
    padding: 15,
  }
});
