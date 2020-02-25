import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native"
//import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Home = ({ item, deleteItem }) => {

    return (
        <View>


            <Link to='/notetaking'><Text style={styles.text}>Notes</Text></Link>

        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 25,
        textAlign: 'center'
    }
});

export default Home