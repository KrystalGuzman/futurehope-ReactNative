import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native"
import Icon from "react-native-vector-icons/FontAwesome";

const Home = ({ item, deleteItem }) => {

    return (
        <View style={styles.container}>
            <Link to='/notetaking'>
                <Text style={styles.text}><Icon name='file' size={40} />  Notes</Text>
            </Link>
            <Link to='/futurerelease'>
                <Text style={styles.text}><Icon name='calendar' size={40} color='white' /> Calendar</Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 35,
        textAlign: 'center',
        backgroundColor: '#ff9800',
        width: 300,
        margin: 60,
        padding: 40,
        borderRadius: 70
    },
    container: {
        height: 650,
        alignItems: 'center',
        justifyContent: 'center'

    }
});

export default Home;
