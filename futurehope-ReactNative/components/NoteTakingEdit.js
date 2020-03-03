import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {useParams} from 'react-router-native';

const EditItem = ({ items, editItem }) => {

    const {id} = useParams()
    const [edit, setEdit] = useState('');
    const [target, setTarget] = useState({})

    console.log('id',id)

    React.useEffect(()=>{
       items.forEach(e=>{

        if(e.id === id){
               setTarget(e)
               console.log('target',target)
           }
       })
    },[])
    const onChange = textValue => setEdit(textValue);

    return (
        <View>
            <Text style={styles.title}>{target.title}</Text>
            <Text>{target.content}</Text>
            <TextInput placeholder="Add details here..." style={styles.input} onChangeText={onChange} />
            <TouchableOpacity style={styles.button} onPress={() => editItem(edit, target.id)}>
                <Text style={styles.buttonText}>Set Details</Text>
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
    },
    title: {
        fontSize:30,
        textAlign: 'center'
    }
});


export default EditItem;
