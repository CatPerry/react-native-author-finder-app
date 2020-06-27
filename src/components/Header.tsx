import React from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const HeaderComponent: React.FunctionComponent = () => {
  return (
    <Header
      placement="left"
      leftComponent={{ text: 'Bookable', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
      style={styles.container}
      backgroundColor='#41bdc4'
      // ViewComponent={LinearGradient}
      linearGradientProps={{
        colors: ['#41bdc4', '#3d7282'],
        start: { x: 0, y: 0.5 },
        end: { x: 1, y: 0.5 },
      }}
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
