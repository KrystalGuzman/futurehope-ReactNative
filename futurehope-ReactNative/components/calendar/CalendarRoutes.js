
import { View, Text, StyleSheet, FlatList, Alert, AsyncStorage, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import { Route, useHistory } from "react-router-native"
import CalendarView from './CalendarView'
import AddEvent from './AddEvent'
import uuid from 'react-native-uuid'

const CalendarRoutes = () => {

    const [agendaItems, setAgendaItems] = useState({})

    React.useEffect(() => {
        AsyncStorage.getItem("noteCalendarStorage").then(value => {
            console.log(value)
            if (value) {
                setAgendaItems(JSON.parse(value))
            } else {
                setAgendaItems({})
            }
        })
    }, [])

    React.useEffect(() => {
        AsyncStorage.setItem("noteCalendarStorage", JSON.stringify(agendaItems))
    }, [agendaItems])

    function submitHandler(year, month, day, time, mentor) {
        const date = `${year}-${month}-${day}`
        const meetingText = `Meeting with ${mentor} @ ${time}`

        agendaItems && agendaItems[`${date}`] ?
            setAgendaItems({
                ...agendaItems,
                [`${date}`]: [...agendaItems[`${date}`], { id: uuid.v4(), text: meetingText }]
            }) :
            setAgendaItems({
                ...agendaItems,
                [`${date}`]: [{ id: uuid.v4(), text: meetingText }]
            })

    }

    return (
        <View style={{ flex: 1 }}>
            <Route exact path='/calendar/addevent'><AddEvent submitHandler={submitHandler} /></Route>
            <Route exact path='/calendar/agenda'><CalendarView agendaItems={agendaItems} setAgendaItems={setAgendaItems}/></Route>
        </View>
    )

}


export default CalendarRoutes
