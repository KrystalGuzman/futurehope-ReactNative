import React from 'react';
import 'react-native';
import { render, fireEvent } from 'react-native-testing-library';

import App from './App';
import Header from './components/Header';
import Home from './components/Home';
import ListItem from './components/ListItem';
import NoteTaking from './components/NoteTaking';
import AddItem from './components/AddItem';
import NoteTakingEdit from './components/NoteTakingEdit';

test('App test against snapshot', () => {
    const tree = render(<App />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders the passed label', () => {
  const { queryByText } = render(<NoteTaking item="Test Item" />);
  expect(queryByText('ASDF')).toBeNull();
});

test('can press the button', () => {
  const onPressMock = jest.fn();
  const dummyPressMock = jest.fn()

  const { getByText } = render(<AddItem title="" onTextChange={dummyPressMock} addItem={onPressMock} text="Testing" />);
  const addButton = getByText(/Add Note/i);

  fireEvent.press(addButton);
  expect(onPressMock).toHaveBeenCalled();
  expect(onPressMock.mock.calls.length).toBe(1);

  fireEvent.press(addButton);
  expect(onPressMock.mock.calls.length).toBe(2);
});
