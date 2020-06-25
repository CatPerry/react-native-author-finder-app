import React from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

const HeaderComponent: React.FunctionComponent = () => {
  return (
    <Header
      placement="left"
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    width: '100%',
  }
});
export default HeaderComponent;
