import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { useParams } from "react-router-native";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "../utils/PercenatageFix";

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
      <Text style={styles.title}>{target.title}</Text>
      {!target.content ? (
        <Text style={editNote ? styles.invis : styles.placeHolder}>
          Add details here...
        </Text>
      ) : (
        <Text style={editNote ? styles.invis : styles.contents}>
          {target.content}
        </Text>
      )}
      <TextInput
        placeholder={target.content || "Add details here..."}
        style={editNote ? styles.input : styles.invis}
        onChangeText={editChange}
        value={edit}
      />
      <TouchableOpacity
        style={editNote ? styles.button : styles.invis}
        onPress={() => {
          editItem(edit, target.id);
          setEditNote(false);
        }}
      >
        <Text style={styles.buttonText}>Set Details</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={editNote ? styles.invis : styles.editContentBtn}
        onPress={() => setEditNote(true)}
      >
        <Text style={styles.contentBtnText}>Edit Content</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: heightPercentageToDP("82%"),
    textAlign: "left",
    marginLeft: 10,
    marginRight: 10
  },
  invis: {
    display: "none"
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
    width: "100%",
    backgroundColor: "#FFB23D",
    position: "absolute",
    bottom: 10
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    padding: 10,
    fontSize: 20
  },
  contents: {
    padding: 7,
    color: "grey",
    fontSize: 20
  },
  editContentBtn: {
    width: "100%",
    backgroundColor: "#FFB23D",
    position: "absolute",
    bottom: 10
  },
  contentBtnText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    padding: 10,
    fontSize: 20
  }
});

export default EditItem;
