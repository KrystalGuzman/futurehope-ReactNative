import React, { useState } from "react";
import { View, StyleSheet, Modal, TextInput, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const EditAgenda = ({ item, setAgendaItems, agendaItems, date }) => {
  const [open, setOpen] = useState(false);
  const [newText, setNewText] = useState(item.text);

  const handleModal = () => setOpen(!open);

  const handleChange = text => {
    setNewText(text);
  };

  const handleSubmit = () => {
    setAgendaItems({
      ...agendaItems,
      [date]: [
        ...agendaItems[date],
        ...agendaItems[date].filter(meeting => {
          if (meeting.id === item.id) item.text = newText;
        })
      ]
    });
    handleModal();
  };

  const deleteFunction = () => {
    setAgendaItems({
      ...agendaItems,
      [date]: agendaItems[date].filter(meeting => !(meeting.id === item.id))
    });
    handleModal();
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <Icon
        name="pencil"
        size={30}
        color="black"
        style={{ marginLeft: "auto" }}
        onPress={handleModal}
      />
      <Modal
        animationType="fade"
        visible={open}
        onDismiss={handleModal}
      >
        <TextInput value={newText} onChangeText={handleChange} />
        <Icon
          name="trash"
          size={30}
          color="red"
          style={{ marginLeft: "auto" }}
          onPress={deleteFunction}
        />
        <Button title="Done" color="green" onPress={handleSubmit} />
      </Modal>
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
    marginBottom: 5
  },
  itemText: {
    fontSize: 18
  }
});

export default EditAgenda;
