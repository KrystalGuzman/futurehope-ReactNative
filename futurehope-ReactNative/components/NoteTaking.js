import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, AsyncStorage } from 'react-native';
import ListItem from './ListItem';
import AddItem from './AddItem';
import uuid from 'react-native-uuid';
import { NativeRouter, Route, Link } from "react-router-native"
//import Icon from 'react-native-vector-icons/dist/FontAwesome';


const NoteTaking = () => {

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
            if (value) {
                setItems(JSON.parse(value))
            }
        })
    }, [])

    React.useEffect(() => {
        AsyncStorage.setItem("noteAppStorage", JSON.stringify(items))
    }, [items])

    return (
        <View>
            <AddItem addItem={addItem} />
            <FlatList
                data={items}
                renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />}
            />
        </View>
    )
}

export default NoteTaking