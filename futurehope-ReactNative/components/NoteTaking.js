import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, AsyncStorage } from 'react-native';
import ListItem from './ListItem';
import AddItem from './AddItem';


import { NativeRouter, Route, Link } from "react-router-native";

const NoteTaking = ({items, deleteItem, addItem}) => {
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

export default NoteTaking;
