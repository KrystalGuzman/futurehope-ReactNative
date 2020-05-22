import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from '../../utils/PercenatageFix';

const AddItem = ({ title, addItem, text, onTextChange, handleModal }) => {
    const submitHandler = () => {
        addItem(text)
        handleModal()
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior='height' keyboardVerticalOffset={80}>
                <View style={styles.container}>
                    <Text style={styles.text}>New Note</Text>
                </View>
                <TextInput multiline numberOfLines={10} onChangeText={text => onChangeText(text)} placeholder="Add item..." style={styles.input} onChangeText={onTextChange} value={text} />
            </KeyboardAvoidingView>
            <View style={styles.buttonsdesign}>
                <TouchableOpacity style={styles.button}  >
                    <Text onPress={handleModal} style={styles.buttonText}>Cancel </Text>
                    <Text onPress={submitHandler} style={styles.buttonText}>Add Note </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: heightPercentageToDP('1%'),
        marginBottom: heightPercentageToDP('1%'),
    },
    input: {
        height: heightPercentageToDP('70%'),
        width: widthPercentageToDP('95%'),
        margin: widthPercentageToDP('2%'),
        fontSize: 16,
        borderColor: '#eee',
        borderWidth: widthPercentageToDP('.5%'),
        borderRadius: 5,
        textAlignVertical: 'top',
        padding: heightPercentageToDP('1%')

    },
    text: {
        fontSize: 24,
        textAlign: 'center',
        color: 'orange',
    },
    button: {
        backgroundColor: 'white',
        padding: widthPercentageToDP('2%'),
        margin: widthPercentageToDP('1%'),
        width: widthPercentageToDP('99%'),
        flexDirection: "row",
        justifyContent: "space-between",
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: '#FFB23D',
        padding: widthPercentageToDP('2%'),
        width: widthPercentageToDP('45%')
    }
});

export default AddItem;