
import { View, Text, StyleSheet, FlatList, Alert, AsyncStorage, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Route, useHistory } from "react-router-native"
import CalendarView from './CalendarView'
import AddEvent from './AddEvent'


const CalendarRoutes = () => {

    const [agendaItems, setAgendaItems] = useState({
        '2020-03-10': [{ text: 'Meeting with Bob Ross @ 3:15pm' }, { text: 'Meeting with Bob Ross @ 3:15pm' }, { text: 'Meeting with Bob Ross @ 3:15pm' }, { text: 'Meeting with Bob Ross @ 3:15pm' }, { text: 'Meeting with Bob Ross @ 3:15pm' }],
        '2020-03-11': [{ text: "Meeting with Bob Ross @ 3:15pm" }],
    })
    const [date, setDate] = useState()

    function submitHandler(date, mentor, time) {
        const meetingText = `Meeting with ${mentor} @ ${time}`
        setAgendaItems({
            ...agendaItems,
            [`${date}`]: [{ text: meetingText }]
        })
    }

    return (
        <View style={{ flex: 1 }}>
            <Route exact path='/calendar/addevent'><AddEvent submitHandler={submitHandler} /></Route>
            <Route exact path='/calendar/agenda'><CalendarView agendaItems={agendaItems} /></Route>
        </View>
    )

}

export default CalendarRoutes