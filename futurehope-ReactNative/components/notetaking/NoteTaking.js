import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, AsyncStorage, Modal, KeyboardAvoidingView } from 'react-native';
import ListItem from './ListItem';
import AddItem from './AddItem';
import Icon from "react-native-vector-icons/Entypo"
import { widthPercentageToDP, heightPercentageToDP } from "../../utils/PercenatageFix";
import { NativeRouter, Route, Link } from "react-router-native";


const NoteTaking = ({ items, deleteItem, addItem, text, onTextChange }) => {
    const [open, setOpen] = useState(false);


    const handleModal = () => setOpen(!open);

    return (
        <View style={styles.container}>

            <View style={styles.flatview}>
                <FlatList
                    data={items}
                    renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />}
                />
            </View>
            <Icon style={styles.plus} onPress={handleModal} color='#ff9800' size={60} name='circle-with-plus' />

            <Modal
                animationType="fade"
                visible={open}
                onDismiss={handleModal}>
                <AddItem handleModal={handleModal} addItem={addItem} text={text} onTextChange={onTextChange} />
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        maxHeight:heightPercentageToDP('82.5%'),
    },

    flatview: {
        maxHeight: heightPercentageToDP('70%'),
        height: heightPercentageToDP('77%')
    },

    plus: {
        marginLeft: widthPercentageToDP('78%'),
    }

});

export default NoteTaking;
