import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
//import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { useParams } from 'react-router-native'

const EditItem = ({ items, editItem }) => {
    const { id } = useParams()
    const [edit, setEdit] = useState('');
    const [target, setTarget] = useState({})
    console.log('id', id)
    React.useEffect(() => {
        items.forEach(e => {

            if (e.id === id) {
                setTarget(e)
                console.log('target', target)
            }
        })
    }, [])
    const onChange = textValue => setEdit(textValue);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{target.title}</Text>
            <TextInput placeholder="Add details here..." style={styles.input} onChangeText={onChange} />
            <TouchableOpacity style={styles.button} onPress={() => editItem(edit, target.id)}>
                <Text style={styles.buttonText}>Set Details</Text>
            </TouchableOpacity>
            <Text style={styles.title2}>Details</Text>
            <Text>{target.content}</Text>
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
    }
});


export default EditItem;