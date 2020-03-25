import React from "react";
import { View, Text, StyleSheet } from "react-native";

import EditAgenda from "./EditAgenda";

const AgendaItem = ({ item, setAgendaItems, agendaItems, date }) => {
  return (
    <View style={styles.itemView}>
      <Text style={styles.itemText}>{item.text}</Text>
      <EditAgenda
        item={item}
        setAgendaItems={setAgendaItems}
        agendaItems={agendaItems}
        date={date}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
    fontSize: 25
  },
  container: {
    height: 650,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 20
  },
  modal: {
    width: 200
  },
  button: {
    textAlign: "center",
    fontSize: 30,
    padding: 10,
    width: 150,
    borderRadius: 20
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
    marginBottom: 5,
    flexDirection: "row",
    alignContent: "center"
  },
  itemText: {
    fontSize: 18
  }
});

export default AgendaItem;
