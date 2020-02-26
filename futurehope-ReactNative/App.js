import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, AsyncStorage, TouchableOpacity } from 'react-native';
import NoteTakingEdit from "./components/NoteTakingEdit";
import Header from './components/Header';
import Home from './components/Home'
import NoteTaking from './components/NoteTaking';
import uuid from 'react-native-uuid';
import { NativeRouter, Route, Link, Switch } from "react-router-native"

const App = () => {
  const [items, setItems] = React.useState([
    { id: uuid.v4(), title: 'Note 1', content: '' },
    { id: uuid.v4(), title: 'Note 2', content: '' },
    { id: uuid.v4(), title: 'Note 3', content: '' },
    { id: uuid.v4(), title: 'Note 4', content: '' },
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = (title) => {
    setItems(prevItems => {
      return [{ id: uuid.v4(), title, content: '' }, ...prevItems];
    });
  };



  React.useEffect(() => {
    AsyncStorage.getItem("noteAppStorage").then(value => {
      if (typeof value === 'array') {
        setItems(JSON.parse(value))
      }else{
        setItems([])
      }
    })
  }, [])

  React.useEffect(() => {
    AsyncStorage.setItem("noteAppStorage", JSON.stringify(items))
  }, [items])

  const editItem = (content, id) => {
    setItems(prevItems => {
      let newArr= []
      let target = {}
      items.forEach(e=>{
          
        if(e.id === id){
              target = e
              target.content = content
               console.log('target',target)
           }else{
             newArr.push(e)
           }

       })
       setItems([...newArr, {...target}])
      
    });
  };

  return (
    <NativeRouter>
      <View style={styles.container}>
        <Header />
<Switch>
        <Route exact path='/' component={Home} />
        <Route path='/notetaking'><NoteTaking items={items} addItem={addItem} deleteItem={deleteItem}/></Route>
        <Route path='/noteedit/:id'><NoteTakingEdit items={items} editItem={editItem}/></Route>
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
