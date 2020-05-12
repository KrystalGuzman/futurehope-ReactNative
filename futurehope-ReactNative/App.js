import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, AsyncStorage, TouchableOpacity } from 'react-native';
import Header from './components/nav/Header';
import Home from './components/Home'
import CalendarRoutes from './components/calendar/CalendarRoutes';
import { heightPercentageToDP } from "./utils/PercenatageFix";
import { NativeRouter, Route, Link, Switch, useHistory } from "react-router-native"
import NoteTakingRoutes from './components/notetaking/NoteTakingRoutes';
import BottomFooter from './components/nav/BottomFooter';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers'

import {decode, encode} from 'base-64'

if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware)

const App = () => {


  return (
    <Provider store={store}>
      <NativeRouter>
        <View style={styles.container}>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/calendar'><CalendarRoutes /></Route>
            <Route path='/notetaking'><NoteTakingRoutes /></Route>
          </Switch>
          <BottomFooter style={styles.styledfooter} />
        </View>
      </NativeRouter>
    </Provider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  styledfooter: {
    position: "absolute",
    bottom: heightPercentageToDP('0%')
  }
});


export default App;
