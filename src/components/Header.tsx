import React from 'react';
import { Header } from 'react-native-elements';

const HeaderComponent: React.FunctionComponent = () => {
  return (
    <Header
      placement="left"
      leftComponent={{ text: 'Bookable', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
      backgroundColor='#41bdc4'
      linearGradientProps={{
        colors: ['#41bdc4', '#3d7282'],
        start: { x: 0, y: 0.5 },
        end: { x: 1, y: 0.5 },
      }}
    />
  );
};

export default HeaderComponent;
