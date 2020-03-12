import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import {Link} from "react-router-native";

import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP } from '../utils/PercenatageFix';

const ListItem = ({ item, deleteItem }) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Link to={`/notetaking/noteedit/${item.id}`}><Text style={styles.listItemText}>{item.title}</Text></Link>
                <Icon onPress={() => deleteItem(item.id)} color='red' size={32} name='times-circle' />
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee'
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
