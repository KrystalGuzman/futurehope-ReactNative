import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { useParams, useHistory } from "react-router-native";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "../../utils/PercenatageFix";
import Icon from "react-native-vector-icons/FontAwesome";

const EditItem = ({ items, editItem, edit, editChange, deleteItem }) => {
  const { id } = useParams();
  const history = useHistory()
  const [target, setTarget] = useState({});
  const [editNote, setEditNote] = useState(false);
  React.useEffect(() => {
    items.forEach(e => {
      if (e.id === id) {
        setTarget(e);
        editChange(target.content)
      }
    });
  }, [items, editNote]);

  const deletePress = () => {
    deleteItem(id)
    history.push("/notetaking/noteview")
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior='height' keyboardVerticalOffset={50}>
        <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', maxWidth: widthPercentageToDP('90%') }}>
          <Text style={styles.title}>{target.title}</Text>
          <Icon name='trash' color='grey' size={25} onPress={deletePress} />
        </View>
        {!target.content ? (
          <Text style={editNote ? styles.invis : styles.placeHolder}>
            Add note here...
          </Text>
        ) : (
            <Text style={editNote ? styles.invis : styles.contents}>
              {target.content}
            </Text>
          )}
        <TextInput
          placeholder="Add note here..."
          style={editNote ? styles.input : styles.invis}
          onChangeText={editChange}
          value={edit}
        />
      </KeyboardAvoidingView>
      <TouchableOpacity
        style={editNote ? styles.button : styles.invis}
        onPress={() => {
          editItem(edit, target.id);
          setEditNote(false);
        }}
      >
        {/* <Icon name='check' color='white' size= {20}/> */}
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={editNote ? styles.invis : styles.editContentBtn}
        onPress={() => setEditNote(true)}
      >
        <Text style={styles.contentBtnText}>Edit Note</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: heightPercentageToDP("82%"),
    textAlign: "left",
    marginLeft: widthPercentageToDP('5%'),
    marginRight: widthPercentageToDP('2%'),
    maxWidth: ('90%'),
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
    fontSize: widthPercentageToDP('10%'),
    fontWeight: "bold",
    padding: widthPercentageToDP('1%'),
    marginTop: heightPercentageToDP('1%')
  },
  edit: {
    color: "#FFB23D",
    textAlign: "right",
    fontSize: 20,
    fontWeight: "bold"
  },
  placeHolder: {
    marginLeft: widthPercentageToDP('.5%'),
    color: "grey"
  },
  input: {
    height: heightPercentageToDP('60%'),
    textAlignVertical: 'top',
    fontSize: 16,
    borderColor: '#eee',
    borderWidth: 1,
    padding: widthPercentageToDP('1%'),
    borderRadius: 5
  },
  button: {
    width: "100%",
    backgroundColor: "#FFB23D",
    position: "absolute",
    bottom: heightPercentageToDP('1%')
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    padding: widthPercentageToDP('2%'),
    fontSize: 30
  },
  contents: {
    padding: widthPercentageToDP('1%'),
    color: "grey",
    fontSize: 20
  },
  editContentBtn: {
    width: "100%",
    backgroundColor: "#FFB23D",
    position: "absolute",
    bottom: heightPercentageToDP('1%')
  },
  contentBtnText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    padding: widthPercentageToDP('2%'),
    fontSize: 20,
  },
  touchableOpacity:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
});

export default EditItem;
