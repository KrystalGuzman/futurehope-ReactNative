import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { useParams } from "react-router-native";

const EditItem = ({ items, editItem, edit, editChange }) => {
  const { id } = useParams();

  const [target, setTarget] = useState({});
  const [editNote, setEditNote] = useState(false);
  React.useEffect(() => {
    items.forEach(e => {
      if (e.id === id) {
        setTarget(e);
      }
    });
  }, [items]);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>{target.title}</Text>
        {!editNote ? (
          <Text style={styles.edit} onPress={() => setEditNote(true)}>
            Edit
          </Text>
        ) : null}
      </View>
      {!target.content ? (
        <Text style={styles.placeHolder}>Add details here...</Text>
      ) : (
        <Text style={styles.contents}>{target.content}</Text>
      )}
{/*       <TextInput
        placeholder="Add details here..."
        style={styles.input}
        onChangeText={editChange}
        value={edit}
      /> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => editItem(edit, target.id)}
      >
        <Text style={styles.buttonText}>Set Details</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.editContentBtn}>
          <Text style={styles.contentBtnText}>
              Edit Content
          </Text>
      </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: "left",
    marginLeft: 10,
    marginRight: 10,
    flex:1,
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title2: {
    fontSize: 30
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 20
  },
  edit: {
    color: "#FFB23D",
    textAlign: "right",
    fontSize: 20,
    fontWeight: "bold"
  },
  placeHolder: {
    color: "grey"
  },
  input: {
    height: 60,
    padding: 8,
    fontSize: 16
  },
  button: {
    backgroundColor: "#FFB23D",
    padding: 9,
    margin: 5,
    width: 200,
    borderRadius: 20
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center"
  },
  contents: {
    padding: 7,
    color:'grey',
    fontSize: 20
  },
  editContentBtn:{
      width:'100%',
      backgroundColor:'#FFB23D',
      position:'absolute',
      bottom:10
  },
  contentBtnText:{
      color:'white',
      textAlign:'center',
      fontWeight:'bold',
      padding:10,
      fontSize:20
  }
});

export default EditItem;
