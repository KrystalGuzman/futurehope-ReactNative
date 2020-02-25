import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native"
const Header = () => {

    return (
        <View style={styles.header}>
            <Link to='/'><Text style={styles.text}>Home</Text></Link>
            <Text style={styles.text}>Future Hope</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 60,
        padding: 15,
        backgroundColor: '#ff9800',
        justifyContent: 'space-between'
    },
    text: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center'
    }
});


export default Header;
