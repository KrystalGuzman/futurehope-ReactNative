import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, AsyncStorage } from 'react-native';
import ListItem from './ListItem';
import AddItem from './AddItem';


import { NativeRouter, Route, Link } from "react-router-native"
//import Icon from 'react-native-vector-icons/dist/FontAwesome';


const FutureRelease = ({ items, deleteItem, addItem, text, onTextChange }) => {



    return (
        <View style={styles.container} >
            <Text style={styles.text}>This feature is in development and is scheduled for a future release.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
        fontSize: 25
    },
    container: {
        height: 650,
        alignItems: 'center',
        justifyContent: 'center'

    }
});

export default FutureRelease