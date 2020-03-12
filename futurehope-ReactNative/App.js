import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, AsyncStorage, TouchableOpacity } from 'react-native';
import Header from './components/Header';
import Home from './components/Home'
import CalendarRoutes from './components/calendar/CalendarRoutes'

import { NativeRouter, Route, Link, Switch } from "react-router-native"
import NoteTakingRoutes from './components/NoteTakingRoutes';

const App = () => {
  

  return (
    <NativeRouter>
      <View style={styles.container}>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/calendar'><CalendarRoutes /></Route>
          <Route path='/notetaking'><NoteTakingRoutes /></Route>
        </Switch>
      </View>
    </NativeRouter>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


export default App;
