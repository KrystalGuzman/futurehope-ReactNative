import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native"
import Icon from 'react-native-vector-icons/FontAwesome'

const Header = () => {
    return (
        <View style={styles.header}>
            <Link to='/'><Icon name='home' color='white' size={42}/></Link>
            <Text style={styles.text}>Future Hope</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 75,
        paddingTop: 28,
        paddingRight: 120,
        paddingLeft: 15,
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
