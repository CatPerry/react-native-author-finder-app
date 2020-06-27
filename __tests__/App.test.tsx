import React from 'react';
import renderer from 'react-test-renderer';

import { App } from './../src/App';

describe('<App />', () => {
  test('renders without crashing', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).not.toBeNull();
  });
});
