import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {useHistory}from 'react-router-native'
import { Agenda } from "react-native-calendars";
import {widthPercentageToDP, heightPercentageToDP} from '../../utils/PercenatageFix';

import AgendaItem from "./AgendaItem";

const CalendarView = ({ agendaItems, setDate, setAgendaItems }) => {
      const history = useHistory();

      function onPress() {
        history.replace("/calendar/addevent");
      }

      // console.log("agendaItems", agendaItems);

  return (
    <View style={{ flex: 1 }}>
      <Agenda
        items={{ ...agendaItems }}
        renderItem={(item, firstItemInDay) => {
          console.log(item);
          return (
            <AgendaItem
              item={item}
              setAgendaItems={setAgendaItems}
              agendaItems={agendaItems}
            />
          );
        }}
      />
      <View style={styles.container}>
        <Text style={styles.button} onPress={onPress}>
          Add an Event
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    text: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
        fontSize: 25
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom:heightPercentageToDP('.5%'),


    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 20,


    },
    modal: {
        width: 200
    },
    button: {
        textAlign: "center",
        fontSize: 26.5,
        paddingLeft: widthPercentageToDP('10%'),
        paddingRight: widthPercentageToDP('10%'),
        backgroundColor: '#ff9800'
    },
    input: {
        margin: 20
    },
    itemView: {
        height: 100,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        justifyContent: "space-around",
        marginRight: 20,
        marginBottom: 5
    },
    itemText: {
        fontSize: 18
    }
});

export default CalendarView;
