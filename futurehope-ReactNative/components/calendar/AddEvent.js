import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useHistory } from "react-router-native"
const AddEvent = ({ date, submitHandler }) => {
    const history = useHistory()

    const [mentor, setMentor] = useState('')
    const [time, setTime] = useState('')
    const [year, setYear] = useState('')
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const mockSubmit = () => {
        submitHandler(year, month, day, time, mentor)
        history.replace('/calendar/agenda')
    }
    function onMonthChange(textValue) {
        setMonth(textValue)
    }
    function onDayChange(textValue) {
        setDay(textValue)
    }
    function onYearChange(textValue) {
        setYear(textValue)
    }
    function onMentorChange(textValue) {
        setMentor(textValue)
    }
    function onTimeChange(textValue) {
        setTime(textValue)
    }

    return (
        <View >
            <View style={styles.dateContainer}>
                <Text>Month:</Text><TextInput style={styles.dateInput} onChangeText={onMonthChange} value={month} />
                <Text>Day:</Text><TextInput style={styles.dateInput} onChangeText={onDayChange} value={day} />
                <Text>Year:</Text><TextInput style={styles.dateInput} onChangeText={onYearChange} value={year} />
            </View >
            <Text style={styles.text}>Mentor:</Text>
            <TextInput style={styles.input} onChangeText={onMentorChange} value={mentor} />
            <Text style={styles.text}>Time:</Text>
            <TextInput style={styles.input} onChangeText={onTimeChange} value={time} />
            <Text style={styles.button} onPress={mockSubmit}>Add This Meeting</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        padding: 15,
        textAlign: 'center',
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
        fontSize: 18
    },
    container: {

        alignItems: 'center',
        justifyContent: 'center'

    },
    dateContainer: {
        alignItems: 'center',
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
        backgroundColor: '#ff9800'
    },
    input: {
        margin: 20,
        borderColor: 'lightgrey',
        borderWidth: 2
    },
    dateInput: {
        margin: 20,
        borderColor: 'lightgrey',
        borderWidth: 2,
        width: 50
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
export default AddEvent