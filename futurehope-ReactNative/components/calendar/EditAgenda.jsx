import React, { useState } from "react";
import { View, StyleSheet, Modal, TextInput, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const EditAgenda = ({ item, setAgendaItems, agendaItems }) => {
  const [open, setOpen] = useState(false);
  const [newText, setNewText] = useState(item.text);

  const handleModal = () => setOpen(!open);

  const handleChange = ({ nativeEvent: { text } }) => setNewText(text);

  const handleSubmit = () => {
    handleModal();
  };

  const deleteFunction = () => {
    let target = "";
    let newState = {};
    let newArr = [];

    for(let i in agendaItems){
      for(let j of agendaItems[i]){
        if(j.id == item.id){
          target = i;
        }
      }
    }
    for(let i in agendaItems){
      if(target == i){
        agendaItems[i].forEach((ele) => {
          if(ele.id !== item.id){
            newArr.push(ele);
          }
        })
      } else {
        newState = {...newState, [i]:agendaItems[i]};
      }
    }
    setAgendaItems({
      ...newState, [target]:newArr
    });
    setOpen(!open);
  }

  return (
    <View style={{ flexDirection: "row" }}>
      <Icon
        name="pencil"
        size={30}
        color="black"
        style={{ marginLeft: "auto" }}
        onPress={() => handleModal()}
      />
      <Modal
        animationType="fade"
        visible={open}
        onDismiss={() => handleModal()}
      >
        <TextInput value={newText} onChange={here => handleChange(here)} />
        <Icon
          name="trash"
          size={30}
          color="red"
          style={{ marginLeft: "auto" }}
          onPress={deleteFunction}
        />
      <Button title="Done" color="green" onPress={() => handleSubmit()} />
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
