import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

const AddItem = ({ title, addItem }) => {

    const [text, setText] = useState('');

    const onChange = textValue => setText(textValue);

    return (
        <View>
            <TextInput placeholder="Add item..." style={styles.input} onChangeText={onChange} />
            <TouchableOpacity style={styles.button} onPress={() => addItem(text)}>
                <Text style={styles.buttonText}>Add Note <Icon name='paper-plane' color='white' size={24}/></Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16
    },
    button: {
        backgroundColor: '#FFB23D',
        padding: 9,
        margin: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }
});


export default AddItem;
