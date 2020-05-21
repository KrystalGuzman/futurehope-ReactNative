import { View, AsyncStorage } from "react-native";
import React, { useState } from "react";
import { Route } from "react-router-native";
import CalendarView from "./CalendarView";
import AddEvent from "./AddEvent";
import MentorItem from "./MentorItem";
import uuid from "react-native-uuid";

const CalendarRoutes = () => {
  const [agendaItems, setAgendaItems] = useState({});
  React.useEffect(() => {
    AsyncStorage.getItem("noteCalendarStorage").then(value => {
      value ? setAgendaItems(JSON.parse(value)) : setAgendaItems({});
    });
  }, []);

  React.useEffect(() => {
    AsyncStorage.setItem("noteCalendarStorage", JSON.stringify(agendaItems));
  }, [agendaItems]);

  const submitHandler = (year, month, day, time, mentor) => {
    const date = `${year}-${month}-${day}`;
    const meetingText = `Meeting with ${mentor} at ${time}`;
    agendaItems && agendaItems[date]
      ? setAgendaItems({
          ...agendaItems,
          [date]: [...agendaItems[date], { id: uuid.v4(), text: meetingText }]
        })
      : setAgendaItems({
          ...agendaItems,
          [date]: [{ id: uuid.v4(), text: meetingText }]
        });
  };

  const submitHandlerArray = (events) => {
    let date = "";
    let meetingText = "";
    events.map((event) => {
    date = `${event.year}-${event.month}-${event.day}`;
    meetingText = `Meeting with ${event.mentor} at ${event.time}`;

    agendaItems && agendaItems[date]
      ? setAgendaItems({
          ...agendaItems,
          [date]: [...agendaItems[date], { id: uuid.v4(), text: meetingText }]
        })
      : setAgendaItems({
          ...agendaItems,
          [date]: [{ id: uuid.v4(), text: meetingText }]
        })
    })
  };

  return (
    <View style={{ flex: 1 }}>
      <Route exact path="/calendar/addevent">
        <AddEvent submitHandler={submitHandler} />
      </Route>
      <Route exact path="/calendar/agenda">
        <CalendarView
          agendaItems2={agendaItems}
          setAgendaItems2={setAgendaItems}
        />
      </Route>
      {/* <MentorItem submitHandlerArray={submitHandlerArray} /> */}
    </View>
  );
};

export default CalendarRoutes;
