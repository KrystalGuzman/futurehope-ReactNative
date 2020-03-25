import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, AsyncStorage, TouchableOpacity } from 'react-native';
import Header from './components/Header';
import Home from './components/Home'
import CalendarRoutes from './components/calendar/CalendarRoutes';
import {heightPercentageToDP} from "./utils/PercenatageFix";
import { NativeRouter, Route, Link, Switch, useHistory } from "react-router-native"
import NoteTakingRoutes from './components/NoteTakingRoutes';
import BottomFooter from './components/BottomFooter';

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
        <BottomFooter style={styles.styledfooter} />
      </View>
    </NativeRouter>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  styledfooter:{
    position: "absolute",
    bottom: heightPercentageToDP('0%')
  }
});


export default App;
