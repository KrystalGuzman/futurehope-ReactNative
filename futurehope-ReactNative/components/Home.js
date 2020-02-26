import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native"
import Icon from "react-native-vector-icons/FontAwesome";

const Home = ({ item, deleteItem }) => {

    return (
        <View style={styles.container}>
            <Link to='/notetaking'>
                <Text style={styles.text}><Icon name='file' size={40}/>  Notes</Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 35,
        textAlign: 'center'
    },
    container: {
        height: 450,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Home;
