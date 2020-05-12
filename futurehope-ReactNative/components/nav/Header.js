import React from 'react';
import { View, Text, StyleSheet, ShadowPropTypesIOS } from 'react-native';
import { NativeRouter, Route, Link, useHistory } from "react-router-native"
import Icon from 'react-native-vector-icons/FontAwesome'
import { widthPercentageToDP, heightPercentageToDP } from '../../utils/PercenatageFix'

const Header = () => {
    const history = useHistory()
    function backHandler() {
        history.goBack()
    }

    return (
        <View style={styles.header}>
            <Icon style={styles.icon} name='arrow-left' onPress={backHandler} size={20} color='#ff9800' />
            <Text style={styles.text}>School in the Sky</Text>
            <Link style={styles.icon} to='/'><Icon name='home' color='#ff9800' size={20} /></Link>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: heightPercentageToDP('9%'),
        paddingTop: heightPercentageToDP('6%'),
        paddingBottom: heightPercentageToDP('2%'),
        alignItems: 'center',
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        justifyContent: 'space-between'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        color: 'gray'
    },
    icon: {
        marginLeft: widthPercentageToDP('4%'),
        marginRight: widthPercentageToDP('4%')
    }
});

export default Header;
