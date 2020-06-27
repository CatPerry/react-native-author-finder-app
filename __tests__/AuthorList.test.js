import React from 'react';
import renderer, { act } from 'react-test-renderer';
import 'isomorphic-fetch';
import MockedNavigator from '../MockedNavigator';
import ListsContainer from '../src/components/ListsContainer';

test('ListsContainer fetches data correctly', async () => {
  const promise = Promise.resolve();
  const handleFetchData = jest.fn(() => promise);
  const wrapper = renderer
    .create(
      <MockedNavigator
        component={ListsContainer}
        handleFetchData={handleFetchData}
      />
    )
    .toJSON();

  expect(wrapper).toMatchSnapshot();
  await act(() => promise);
});
