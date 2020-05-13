import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, AsyncStorage } from "react-native";
import { useHistory } from "react-router-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../utils/PercenatageFix";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import Firebase, { db } from '../../config/Firebase'

const MentorItem = ({ submitHandler }) => {
  const history = useHistory();
    
  const [date, setDate] = useState(Date());
  const [events, setEvents] = useState([]);
  const [mentor, setMentor] = useState("");
  const [time, setTime] = useState();
  const [year, setYear] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

//   const mockSubmit = () => {
//     submitHandler(year, month, day, time, mentor);
//     history.replace("/calendar/agenda");
//   };

//   function onMentorChange(textValue) {
//     setMentor(textValue);
//   }

  // const handleChange = ({ nativeEvent: { timestamp }, type }, l) => {
  //   console.log(type);
  //   if (type === "set") {
  //     if (mode === "date") {
  //       setMode("time");
  //       const myDate = l.toJSON().split("T")[0].split("-");
  //       setYear(myDate[0]);
  //       setMonth(myDate[1]);
  //       setDay(myDate[2]);
  //     } else {
  //       setMode("date");
  //       const myTime = moment(timestamp).format("h:mm a");
  //       setTime(myTime);
  //       setShow(false);
  //     }
  //   } else {a
  //     setShow(false);
  //     setMode("date");
  //   }
  // };


  const _getStorageValue = async () => {
    const uid = await AsyncStorage.getItem("UID")
    let newData = [];
		db
      .collection("meetings")
      .where("participantUIDs", "array-contains", uid)
      .onSnapshot(querySnapshot => {
        querySnapshot.forEach(doc => {
          const start = doc.data().start.seconds * 1000;
          
            setMentor(doc.data().participantNames);
            // useEffect(() => {
                const start2 = new Date(start);
                // console.log("Start: ", start2);
                // if (mode === "date") {
              const myDate = start2.toJSON().split("T")[0].split("-");
                setYear(myDate[0]);
                setMonth(myDate[1]);
                setDay(myDate[2])
            // } else {
                
              const myTime = start2.toJSON().split("T")[1];
            //   .split("Z");
            //    moment(timestamp).format("h:mm a");
            var dt = moment(myTime, ["hh:mm:ss.SSSZ"]).format("HH:mm A");
            console.log()
                setTime(dt);
                setShow(false);
            // }
            // }, [])

          newData.push({
            // title: doc.data().title,
            start: new Date(start),
            id: doc.data().id,
            // year: '',
            // month: '',
            // day: '',
            // time: '',
            // mentor: doc.data().participantNames,
            // show: true
          });
        });
        setEvents(newData)
      });
  }

  // useEffect(() => {
  //     const myDate = l.toJSON().split("T")[0].split("-");
  //       setYear(myDate[0]);
  //       setMonth(myDate[1]);
  //       setDay(myDate[2])
  //     const myTime = moment(timestamp).format("h:mm a");
  //       setTime(myTime);
  //       setShow(false);
  // }, [])

  useEffect(() => {
    _getStorageValue()
    // console.log("New Event: ",events)
  }, [])

  return (
      <View>
    {/* <View style={styles.container}>
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
        <Text style={styles.button} onPress={() => setShow(true)}>
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
    </View> */}

{/* real code */}

    <View style={styles.itemView}>
    {/* <Text style={styles.itemText}>Mentor: {mentor}</Text> */}
    {/* <Text style={styles.itemText}>year: {year}</Text>
    <Text style={styles.itemText}>month: {month}</Text>
    <Text style={styles.itemText}>day: {day}</Text> */}
    <Text style={styles.itemText}>time: {time}</Text>
    {/* <EditAgenda
      item={item}
      setAgendaItems={setAgendaItems}
      agendaItems={agendaItems}
      date={date}
    /> */}
    </View>
    </View>
  );
};
// const styles = StyleSheet.create({
//   text: {
//     padding: 10,
//     textAlign: "center",
//     backgroundColor: "#f8f8f8",
//     borderBottomWidth: 1,
//     borderColor: "#eee",
//     fontSize: 18,
//   },
//   container: {
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     maxHeight: heightPercentageToDP("100%"),
//     marginTop: heightPercentageToDP("1%"),
//   },
//   dateContainer: {
//     alignItems: "center",
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//     marginTop: heightPercentageToDP("1%"),
//     marginBottom: heightPercentageToDP("1%"),
//     maxWidth: widthPercentageToDP("99%"),
//   },
//   modal: {},
//   button: {
//     textAlign: "center",
//     fontSize: 25,
//     padding: 1,
//     backgroundColor: "#ff9800",
//     marginRight: widthPercentageToDP("3%"),
//     marginLeft: widthPercentageToDP("3%"),
//     marginTop: heightPercentageToDP("10%"),
//     maxWidth: widthPercentageToDP("100%"),
//   },
//   input: {
//     margin: heightPercentageToDP("5.5%"),
//     borderColor: "lightgrey",
//     borderWidth: 2,
//   },
//   dateInput: {
//     marginTop: heightPercentageToDP("2%"),
//     marginBottom: heightPercentageToDP("2%"),
//     borderColor: "lightgrey",
//     borderWidth: 2,
//     width: widthPercentageToDP("15%"),
//   },
//   itemView: {
//     height: 100,
//     borderBottomColor: "black",
//     borderBottomWidth: 2,
//     justifyContent: "space-around",
//     marginRight: 20,
//     marginBottom: 5,
//   },
//   itemText: {
//     fontSize: 18,
//   },
// });

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
      maxHeight: heightPercentageToDP('4%'),
      borderBottomColor: "black",
      borderBottomWidth: 1,
      justifyContent: "space-around",
      marginRight: widthPercentageToDP('2%'),
      marginTop: heightPercentageToDP('8%'),
      flexDirection: "row",
      
    },
    itemText: {
      fontSize: 18
    }
  });
export default MentorItem;
