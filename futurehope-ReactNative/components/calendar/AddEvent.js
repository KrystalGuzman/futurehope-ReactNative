import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const CalendarRoutes = ({ date, submitHandler }) => {
    const [mentor, setMentor] = useState()
    const [time, setTime] = useState()
    const mockSubmit = () => {
        console.log(date)
    }
    return (
        <View>
            <TextInput />
            <TextInput />
            <Text onPress={mockSubmit}>Button</Text>
        </View>
    )
}