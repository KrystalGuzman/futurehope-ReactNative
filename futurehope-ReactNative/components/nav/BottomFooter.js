import React, { Component, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Footer, FooterTab, Button } from 'native-base';
import Icon from "react-native-vector-icons/FontAwesome";
import { widthPercentageToDP, heightPercentageToDP } from "../../utils/PercenatageFix";
import { useHistory } from 'react-router-native'

const BottomFooter = () => {
  const [calendarActive, setCalendarActive] = useState(false)
  const [notesActive, setNotesActive] = useState(false)
  const [cardActive, setCardActive] = useState(false)
  const history = useHistory();

  function calendarPress() {
    history.push("/calendar/agenda");
    setCalendarActive(true)
    setNotesActive(false)
  }

  function notePress() {
    history.push("/notetaking/noteview");
    setCalendarActive(false)
    setNotesActive(true)
  }

  function cardPress() {
    history.push("/flashcards/flashcard");
    setCardActive(false)
    setNotesActive(true)
  }

  return (
    <View style={styles.container}>
      <Footer style={styles.footerMain}>
        <FooterTab style={styles.footerTab}>
          <Button style={notesActive ? styles.activeButton : styles.inactiveButton} onPress={notePress}>
            <Icon name='sticky-note' size={20} color='gray' />
            <Text style={styles.buttonText}>Notes</Text>
          </Button>
          <Button style={calendarActive ? styles.activeButton : styles.inactiveButton} onPress={calendarPress}>
            <Icon name='calendar' size={20} color='gray' />
            <Text style={styles.buttonText}>Calendar</Text>
          </Button>
          <Button style={cardActive ? styles.activeButton : styles.inactiveButton} onPress={cardPress}>
            <Icon name='check-square-o' size={20} color='gray' />
            <Text style={styles.buttonText}>Flashcards</Text>
          </Button>
        </FooterTab>
      </Footer>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'gray'
  },
  inactiveButton: {
    marginTop: 0
  },
  activeButton: {
    marginTop: 0,
    borderBottomColor: '#ff9800',
    borderBottomWidth: 2
  },
  footerMain: {
    maxHeight: heightPercentageToDP('100%')
  },
  footerTab: {
    backgroundColor: 'white',
    borderTopColor: '#eee',
    borderTopWidth: widthPercentageToDP('.5%'),
  }
});


export default BottomFooter;
