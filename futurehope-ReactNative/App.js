import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, AsyncStorage, TouchableOpacity } from 'react-native';

import Header from './components/Header';
import Home from './components/Home'
import NoteTaking from './components/NoteTaking'
import { NativeRouter, Route, Link } from "react-router-native"

const App = () => {





  return (
    <NativeRouter>
      <View style={styles.container}>
        <Header />

        <Route exact path='/' component={Home} />
        <Route path='/notetaking' component={NoteTaking} />

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
