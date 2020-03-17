import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Footer, FooterTab, Button } from 'native-base';
import Icon from "react-native-vector-icons/FontAwesome";
import {widthPercentageToDP, heightPercentageToDP} from "../utils/PercenatageFix";
import { useHistory }from 'react-router-native'

const BottomFooter = () => {

  const history = useHistory();

  function calendarPress() {
    history.replace("/calendar/agenda");
  }

  function notePress() {
    history.replace("/notetaking/noteview");
  }

      return (
        <View style={styles.container}>
          <Footer style={styles.footerMain}>
            <FooterTab style={styles.footerTab}>
              <Button onPress={notePress}>
                <Icon name='sticky-note' size={20} />
                <Text style={styles.buttonText}>Notes</Text>
              </Button>
              <Button onPress={calendarPress}>
                <Icon name='calendar' size={20} />
                <Text style={styles.buttonText}>Calendar</Text>
              </Button>
            </FooterTab>
          </Footer>
        </View>
      )
  }

const styles = StyleSheet.create({
  buttonText: {
      fontSize: 20,
      textAlign: 'center',
  },
  footerMain: {
      height: heightPercentageToDP('9%'),
      marginTop: 135

  },
  footerTab: {
      backgroundColor: 'lightgray',
      paddingTop: 1
  }
});


export default BottomFooter;
