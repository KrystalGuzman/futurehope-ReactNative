import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useHistory } from "react-router-native";
import { Agenda } from "react-native-calendars";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "../../utils/PercenatageFix";

import AgendaItem from "./AgendaItem";

const CalendarView = ({ agendaItems, setAgendaItems }) => {
  const [date, setDate] = useState(Date());
  const history = useHistory();
  const onPress = () => history.replace("/calendar/addevent");
  for (const entry in agendaItems) {
    if (agendaItems[entry].length === 0) delete agendaItems[entry];
  }
  let dates = {};
  Object.keys(agendaItems).forEach(i => {
    dates = { ...dates, [i]: { marked: true } };
    return dates;
  });
  console.log(dates);
  return (
    <View style={{ flex: 1 }}>
      <Agenda
        items={{ [date]: agendaItems[date] ? [...agendaItems[date]] : [] }}
        loadItemsForMonth={date => setDate(date.dateString)}
        markedDates={dates}
        renderItem={item => {
          return (
            <AgendaItem
              item={item}
              setAgendaItems={setAgendaItems}
              agendaItems={agendaItems}
              date={date}
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
    backgroundColor: "#f3f3f3",
    borderBottomWidth: 1,
    borderColor: "#eee",
    fontSize: 25
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: heightPercentageToDP(".5%"),
    backgroundColor: "#f3f3f3"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 20,
  },
  modal: {
    width: 200,
  },
  button: {
    textAlign: "center",
    fontSize: 26.5,
    paddingLeft: widthPercentageToDP("15%"),
    paddingRight: widthPercentageToDP("15%"),
    paddingTop: widthPercentageToDP("3%"),
    paddingBottom: widthPercentageToDP("3%"),
    backgroundColor: "#FFA611",
    color: "white",
    marginBottom: 20,  
    borderColor: '#FFA611',
		borderWidth: 1,
		borderRadius: 5,
  },
  input: {
    margin: 20
  },
  itemView: {
    height: 100,
    borderBottomColor: "black",
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
