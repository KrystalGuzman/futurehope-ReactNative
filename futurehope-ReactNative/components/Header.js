import React from 'react';
import { View, Text, StyleSheet, ShadowPropTypesIOS } from 'react-native';
import { NativeRouter, Route, Link, useHistory } from "react-router-native"
import Icon from 'react-native-vector-icons/FontAwesome'
const Header = () => {
    const history = useHistory()
    function backHandler() {
        history.goBack()
    }
    return (
        <View style={styles.header}>
            <Icon style={styles.icon} name='arrow-left' onPress={backHandler} size={38} color='white' />
            <Text style={styles.text}>School in the Sky</Text>
            <Link style={styles.icon} to='/'><Icon name='home' color='white' size={38} /></Link>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 75,
        paddingTop: 28,

        backgroundColor: '#ff9800',
        justifyContent: 'space-between'
    },
    text: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center'
    },
    icon: {
        marginLeft: 20,
        marginRight: 20
    }
});


export default Header;
