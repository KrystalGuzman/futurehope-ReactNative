import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Link, useHistory } from "react-router-native";

import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP } from '../../utils/PercenatageFix';

const ListItem = ({ item, deleteItem }) => {
    const history = useHistory()

    function onPress() {
        history.push(`/notetaking/noteedit/${item.id}`)
    }
    return (
        <TouchableOpacity onPress={onPress} style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>{item.title}</Text>
                <Icon color='#ff9800' size={20} name='chevron-right' />
            </View>
        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#eee',
        borderWidth: 1
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listItemText: {
        fontSize: 18,
        width: widthPercentageToDP('83%'),
        maxWidth: 360
    }
});


export default ListItem;
