import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, AsyncStorage } from 'react-native';
import ListItem from './ListItem';
import AddItem from './AddItem';


import { NativeRouter, Route, Link } from "react-router-native"
//import Icon from 'react-native-vector-icons/dist/FontAwesome';


const NoteTaking = ({ items, deleteItem, addItem, text, onTextChange }) => {



    return (
        <View>
            <AddItem addItem={addItem} text={text} onTextChange={onTextChange} />
            <FlatList
                data={items}
                renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />}
            />

        </View>
    )
}

export default NoteTaking