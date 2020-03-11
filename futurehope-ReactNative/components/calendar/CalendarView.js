import React, { useState } from 'react';
import { View, Text, StyleSheet, AsyncStorage, Modal, TouchableOpacity, TextInput } from 'react-native';

import { Agenda } from 'react-native-calendars'

import { NativeRouter, Route, Link, useHistory } from "react-router-native"
//import Icon from 'react-native-vector-icons/dist/FontAwesome';


const CalendarView = ({ agendaItems, setDate }) => {

    return (

        <Agenda
            items={agendaItems}
            renderItem={(item, firstItemInDay) => {
                console.log(item)
                return (<View style={styles.itemView}><Text style={styles.itemText}>{item.text}</Text></View>);
            }}
        />

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

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 20

    },
    modal: {
        width: 200
    },
    button: {
        textAlign: "center",
        fontSize: 30,
        padding: 10,
        width: 150,
        borderRadius: 20
    },
    input: {
        margin: 20
    },
    itemView: {
        height: 100,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        justifyContent: "space-around",
        marginRight: 20,
        marginBottom: 5
    },
    itemText: {
        fontSize: 18
    }
});

export default CalendarView
