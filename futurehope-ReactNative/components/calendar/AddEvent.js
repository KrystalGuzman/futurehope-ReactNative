import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useHistory } from "react-router-native"
import {heightPercentageToDP, widthPercentageToDP} from "../../utils/PercenatageFix";
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
        <View style={styles.container} >
            <View style={styles.dateContainer}>
                <Text>Month:</Text><TextInput style={styles.dateInput} onChangeText={onMonthChange} value={month}  maxLength={2} placeholder='Ex: 01' />
                <Text>Day:</Text><TextInput style={styles.dateInput} onChangeText={onDayChange} value={day} maxLength={2} placeholder='Ex: 01' />
                <Text>Year:</Text><TextInput style={styles.dateInput} onChangeText={onYearChange} value={year} maxLength={4} placeholder='Ex: 2020' />
            </View >
            <Text style={styles.text}>Mentor:</Text>
            <TextInput style={styles.input} onChangeText={onMentorChange} value={mentor} placeholder='Name of Mentor'/>
            <Text style={styles.text}>Time:</Text>
            <TextInput style={styles.input} onChangeText={onTimeChange} value={time} placeholder='Ex: 1:00pm' />
            <Text style={styles.button} onPress={mockSubmit}>Add This Meeting</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        padding: 10,
        textAlign: 'center',
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
        fontSize: 18
    },
    container: {

        // alignItems: 'center',
        // justifyContent: 'center',
        maxHeight:heightPercentageToDP('100%'),
        marginTop:heightPercentageToDP('1%')
    },
    dateContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: heightPercentageToDP('1%'),
        marginBottom: heightPercentageToDP('1%'),
        maxWidth:widthPercentageToDP('99%')

    },
    modal: {
        
    },
    button: {
        textAlign: "center",
        fontSize: 25,
        padding: 1,
        backgroundColor: '#ff9800',
        marginRight:widthPercentageToDP('3%'),
        marginLeft:widthPercentageToDP('3%'),
        marginTop:heightPercentageToDP('10%'),
        maxWidth:widthPercentageToDP('100%'),
    },
    input: {
        margin: heightPercentageToDP('5.5%'),
        borderColor: 'lightgrey',
        borderWidth: 2
    },
    dateInput: {
        marginTop: heightPercentageToDP('2%'),
        marginBottom:heightPercentageToDP('2%'),
        borderColor: 'lightgrey',
        borderWidth: 2,
        width: widthPercentageToDP('15%')
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