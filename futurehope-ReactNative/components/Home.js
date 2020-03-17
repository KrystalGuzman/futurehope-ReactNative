import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native"
import Icon from "react-native-vector-icons/FontAwesome";
import { widthPercentageToDP, heightPercentageToDP } from "../utils/PercenatageFix";
import { Footer, FooterTab, Button } from 'native-base';
import CalendarView from './calendar/CalendarView';

const Home = ({ item, deleteItem }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to the School In The Sky app</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    text: {

        fontSize: 28,
        textAlign: 'center',


    },
    container: {
        height: heightPercentageToDP('82%'),
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Home;
