import React from 'react';
import 'react-native';
import { render, fireEvent } from 'react-native-testing-library';

import App from './App';
import Header from './components/Header';
import Home from './components/Home';
import ListItem from './components/ListItem';
import NoteTaking from './components/NoteTaking';
import NoteTakingEdit from './components/NoteTakingEdit';


test('Header test against snapshot', () => {
    const tree = render(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
});


test('NoteTaking test against snapshot', () => {
    const tree = render(<NoteTaking />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('NoteTaking test against snapshot', () => {
    const tree = render(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Header name is correct', () => {
  const { getByText } = render(<Header />);
  const element = getByText('Future Hope');
});

// test('should invoke specified event', () => {
//    const onPressMock = jest.fn();
//    const { getByTestId } = render(<Home onPress={NoteTaking} />);
//
//    fireEvent(getByTestId('Link'), 'press');
//  });

test('debug.shallow', () => {
  expect(debug.shallow).toBe(debugShallow);
});
