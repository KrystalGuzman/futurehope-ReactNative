import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native"
import Icon from "react-native-vector-icons/FontAwesome";
import { widthPercentageToDP, heightPercentageToDP } from "../utils/PercenatageFix";
import { Footer, FooterTab, Button } from 'native-base';
import CalendarView from './calendar/CalendarView';
import SwitchNavigator from '../navigation/SwitchNavigator'

class Home extends React.Component{
    render() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome {this.props.user.fullName} </Text>
            <SwitchNavigator />
        </View>
    )
    }
}
const mapStateToProps = state => {
	return {
		user: state.user
	}
}

const styles = StyleSheet.create({
    text: {
        fontSize: 28,
        textAlign: 'center',
        maxWidth: ('60%'),
        fontWeight: 'bold',
        margin: ('15%'),
        color: 'white' 
    },
    container: {
        height: heightPercentageToDP('82.5%'),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange' 
    }
});


export default connect(mapStateToProps)(Home);
