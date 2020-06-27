/** All tests are passing; however they are throwing a new post 16.8
 * warning about wrapping any useStates or promises in act()
 * But the documentation isnt not clear on how to solve.
 * I'll come back to this if I have time. Here is a thread I'm
 * following about it:
 * https://github.com/testing-library/react-testing-library/issues/281
 * https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning
 * */

import React from 'react';
import renderer from 'react-test-renderer';
import 'isomorphic-fetch';
import MockedNavigator from '../MockedNavigator';
import Main from '../src/components/Main';

test('renders correctly', () => {
  const tree = renderer.create(<MockedNavigator component={Main} />).toJSON();
  expect(tree).toMatchSnapshot();
});
