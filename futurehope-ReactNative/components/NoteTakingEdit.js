import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useParams } from 'react-router-native'
import {widthPercentageToDP, heightPercentageToDP} from "../utils/PercenatageFix";

const EditItem = ({ items, editItem, edit, editChange }) => {
    const { id } = useParams()

    const [target, setTarget] = useState({})

    React.useEffect(() => {
        items.forEach(e => {

            if (e.id === id) {
                setTarget(e)
            }
        })
    }, [items])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{target.title}</Text>
            <TextInput placeholder="Add details here..." style={styles.input} onChangeText={editChange} value={edit} />
            <TouchableOpacity style={styles.button} onPress={() => editItem(edit, target.id)}>
                <Text style={styles.buttonText}>Set Details</Text>
            </TouchableOpacity>
            <Text style={styles.title2}>Details</Text>
            <Text style={styles.contents}>{target.content}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    title2: {
        fontSize: 30
    },
    title: {
        fontSize: 40,
        margin: 20
    },
    input: {
        height: 60,
        padding: 8,
        fontSize: 16
    },
    button: {
        backgroundColor: '#FFB23D',
        padding: 9,
        margin: 5,
        width: 200,
        borderRadius: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    contents: {
        borderWidth: 1,
        borderColor: 'black',
        width: widthPercentageToDP('98%'),
        height: heightPercentageToDP('33%'),
        padding: 10,
        fontSize: 18
    }
});


export default EditItem;
