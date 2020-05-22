import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  heightPercentageToDP,
  widthPercentageToDP
} from "../../utils/PercenatageFix";

const EditAgenda = ({ item, setAgendaItems, agendaItems, date }) => {
  const [open, setOpen] = useState(false);
  const [newText, setNewText] = useState(item.text);

  const handleModal = () => setOpen(!open);

  const handleChange = text => setNewText(text);

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
    <View>
      <Icon
        name="pencil"
        size={23}
        color="black"
        style={{ marginLeft: "auto" }}
        onPress={handleModal}
      />
      <Modal
        style={styles.container}
        animationType="fade"
        visible={open}
        onDismiss={handleModal}
      >
        <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={80}>
          <TextInput
            multiline
            numberOfLines={10}
            style={styles.input}
            value={newText}
            onChangeText={handleChange}
          />
        </KeyboardAvoidingView>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={handleSubmit}>
              Edit Agenda
            </Text>
            <Text style={styles.buttonText} onPress={deleteFunction}>
              Delete
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: heightPercentageToDP("1%")
  },
  input: {
    height: heightPercentageToDP("80%"),
    width: widthPercentageToDP("95%"),
    margin: widthPercentageToDP("2%"),
    fontSize: 16,
    borderColor: "#eee",
    borderWidth: widthPercentageToDP(".5%"),
    borderRadius: 5,
    textAlignVertical: "top",
    padding: heightPercentageToDP("1%")
  },
  modalView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  button: {
    backgroundColor: "white",
    padding: widthPercentageToDP("2%"),
    margin: widthPercentageToDP("1%"),
    width: widthPercentageToDP("99%"),
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "#FFB23D",
    padding: widthPercentageToDP("1%"),
    width: widthPercentageToDP("40%")
  }
});

export default EditAgenda;
