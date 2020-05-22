import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { useHistory } from "react-router-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../utils/PercenatageFix";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
const AddEvent = ({ submitHandler }) => {
  const history = useHistory();

  const [mentor, setMentor] = useState("");
  const [time, setTime] = useState();
  const [year, setYear] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const mockSubmit = () => {
    submitHandler(year, month, day, time, mentor);
    history.replace("/calendar/agenda");
  };
  function onMentorChange(textValue) {
    setMentor(textValue);
  }
  const handleChange = ({ nativeEvent: { timestamp }, type }, l) => {
    console.log(type);
    if (type === "set") {
      if (mode === "date") {
        setMode("time");
        const myDate = l.toJSON().split("T")[0].split("-");
        setYear(myDate[0]);
        setMonth(myDate[1]);
        setDay(myDate[2]);
      } else {
        setMode("date");
        const myTime = moment(timestamp).format("h:mm a");
        setTime(myTime);
        setShow(false);
      }
    } else {
      setShow(false);
      setMode("date");
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        {time && (
            <Text>{day}-{month}-{year} at {time}</Text>
        )}
        {show && (
          <DateTimePicker
            value={Date.now()}
            minimumDate={Date.now()}
            mode={mode}
            onChange={(here, k) => handleChange(here, k)}
          />
        )}
        <Text style={styles.button} onPress={() => setShow(true) }>
          Set Date/Time
        </Text>
      </View>
      <Text style={styles.text}>Mentor:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onMentorChange}
        value={mentor}
        placeholder="Name of Mentor"
      />
      <Text style={styles.button} onPress={mockSubmit}>
        Add This Meeting
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    padding: 10,
    textAlign: "center",
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
    fontSize: 20,

  },
  container: {
    maxHeight: heightPercentageToDP("100%"),
    marginTop: heightPercentageToDP("1%"),
  },
  dateContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: heightPercentageToDP("1%"),
    marginBottom: heightPercentageToDP("1%"),
    maxWidth: widthPercentageToDP("99%"),
  },
  modal: {},
  button: {
    textAlign: "center",
    fontSize: 25,
    padding: 6,
    backgroundColor: "#ff9800",
    marginRight: widthPercentageToDP("5%"),
    marginLeft: widthPercentageToDP("5%"),
    marginTop: heightPercentageToDP("15%"),
    maxWidth: widthPercentageToDP("100%"),
    color: "white"
  },
  input: {
    margin: heightPercentageToDP("5.5%"),
    borderColor: "lightgrey",
    borderWidth: 2,
  },
  dateInput: {
    marginTop: heightPercentageToDP("2%"),
    marginBottom: heightPercentageToDP("2%"),
    borderColor: "lightgrey",
    borderWidth: 2,
    width: widthPercentageToDP("15%"),
  },
  itemView: {
    height: 100,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    justifyContent: "space-around",
    marginRight: 20,
    marginBottom: 5,
  },
  itemText: {
    fontSize: 18,
  },
});
export default AddEvent;
