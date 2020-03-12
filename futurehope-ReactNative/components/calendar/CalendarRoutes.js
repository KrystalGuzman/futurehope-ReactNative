import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  AsyncStorage,
  TouchableOpacity
} from "react-native";
import React, { useState } from "react";
import { Route, useHistory } from "react-router-native";
import CalendarView from "./CalendarView";
import AddEvent from "./AddEvent";
import uuid from "react-native-uuid";
const id = () => uuid.v4();
const CalendarRoutes = () => {
  const [agendaItems, setAgendaItems] = useState({
    "2020-03-10": [
      { id: id(), text: "Meeting with Bob Ross @ 3:15pm" },
      { id: id(), text: "Meeting with Bob Ross @ 3:15pm" },
      { id: id(), text: "Meeting with Bob Ross @ 3:15pm" },
      { id: id(), text: "Meeting with Bob Ross @ 3:15pm" },
      { id: id(), text: "Meeting with Bob Ross @ 3:15pm" }
    ],
    "2020-03-11": [{ id: id(), text: "Meeting with Bob Ross @ 3:15pm" }]
  });
  const [date, setDate] = useState();

  function submitHandler(date, mentor, time) {
    const meetingText = `Meeting with ${mentor} @ ${time}`;
    setAgendaItems({
      ...agendaItems,
      [date]: [{ id: id(), text: meetingText }]
    });
  }

  return (
    <View style={{ flex: 1 }}>
      <Route exact path="/calendar/addEvent">
        <AddEvent date={date} submitHandler={submitHandler} />
      </Route>
      <Route exact path="/calendar/agenda">
        <CalendarView
          agendaItems={agendaItems}
          setAgendaItems={setAgendaItems}
          setDate={setDate}
        />
      </Route>
    </View>
  );
};

export default CalendarRoutes;
