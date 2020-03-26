import React, { useState } from "react";
import { View, StyleSheet, Modal, TextInput, Button, Text,TouchableOpacity, KeyboardAvoidingView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {heightPercentageToDP, widthPercentageToDP} from "../../utils/PercenatageFix";

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
    <View >
      <Icon
        name="pencil"
        size={23}
        color="black"
        style={{ marginLeft: "auto" }}
        onPress={() => handleModal()}
      />
      <Modal style={styles.container}
        animationType="fade"
        visible={open}
        onDismiss={() => handleModal()}
      >
      <KeyboardAvoidingView behavior='height' keyboardVerticalOffset={80}>
       <TextInput multiline numberOfLines={10} style={styles.input} value={newText} onChange={here => handleChange(here)} />
       </KeyboardAvoidingView>
       <View style={styles.modalView}>
       <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText} onPress={() => handleSubmit()} >Edit Agenda</Text>
       <Text style={styles.buttonText} onPress={deleteFunction}>Delete</Text>
      </TouchableOpacity>
      {/* <Icon
          name="trash"
          size={25}
          color="grey"
          onPress={deleteFunction}
        /> */}
        
       
      </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: heightPercentageToDP('1%')
},
input: {
    height: heightPercentageToDP('80%'),
    width: widthPercentageToDP('95%'),
    margin: widthPercentageToDP('2%'),
    fontSize: 16,
    borderColor: '#eee',
    borderWidth: widthPercentageToDP('.5%'),
    borderRadius: 5,
    textAlignVertical: 'top',
    padding: heightPercentageToDP('1%')

},
modalView:{
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems:'center'
},

button: {
    backgroundColor: 'white',
    padding: widthPercentageToDP('2%'),
    margin: widthPercentageToDP('1%'),
    width: widthPercentageToDP('99%'),
    flexDirection: "row",
    justifyContent: "space-between",

},
buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor:'#FFB23D',
    padding: widthPercentageToDP('1%'),
    width: widthPercentageToDP('40%')
}
});

export default EditAgenda;
