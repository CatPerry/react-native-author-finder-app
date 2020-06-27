import React from 'react';
import renderer from 'react-test-renderer';
import 'isomorphic-fetch';
import MockedNavigator from '../MockedNavigator';
import Main from '../src/components/Main';

test('renders correctly', () => {
  const tree = renderer.create(<MockedNavigator component={Main} />).toJSON();
  expect(tree).toMatchSnapshot();
});
