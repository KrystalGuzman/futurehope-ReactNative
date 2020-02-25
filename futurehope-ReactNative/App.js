import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, AsyncStorage } from 'react-native';
import uuid from 'react-native-uuid';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {

  const [items, setItems] = useState([
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

  useEffect(() => {
    AsyncStorage.getItem("noteAppStorage").then(value => {
      setItems(JSON.parse(value))
    })
  }, [])

  useEffect(() => {
    AsyncStorage.setItem("noteAppStorage", JSON.stringify(items))
  }, [items])

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


export default App;
