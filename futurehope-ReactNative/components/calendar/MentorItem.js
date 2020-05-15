import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, AsyncStorage } from "react-native";
import { useHistory } from "react-router-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../utils/PercenatageFix";
// import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import Firebase, { db } from '../../config/Firebase'
// import uuid from "react-native-uuid";

const MentorItem = ({submitHandler}) => {
  const history = useHistory();
    
//   const [date, setDate] = useState(Date());
  const [events, setEvents] = useState([]);
  const [mentor, setMentor] = useState("");
  const [time, setTime] = useState();
  const [year, setYear] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [title, setTitle] = useState("");
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [agendaItems, setAgendaItems] = useState({});
  const [id, setId] = useState("");

  const mockSubmit = () => {
    submitHandler(year, month, day, time, mentor);
    history.replace("/calendar/agenda");
  };

//   const submitHandler = () => {
//     const date = `${year}-${month}-${day}`;
//     const meetingText = `${title} with ${mentor} at ${time}`;
//     agendaItems && agendaItems[date]
//       ? setAgendaItems({
//           ...agendaItems,
//           [date]: [...agendaItems[date], { id: id, text: meetingText }]
//         })
//       : setAgendaItems({
//           ...agendaItems,
//           [date]: [{ id: id, text: meetingText }]
//         });
//   };




  const _getStorageValue = async () => {
    const uid = await AsyncStorage.getItem("UID")
    let newData = [];
		db
      .collection("meetings")
      .where("participantUIDs", "array-contains", uid)
      .onSnapshot(querySnapshot => {
        querySnapshot.forEach(doc => {
          const start = doc.data().start.seconds * 1000;
            setTitle(doc.data().title)
            setMentor(doc.data().participantNames[0]);
            // console.log(doc.data())
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
            var dt = moment(myTime, ["hh:mm:ss.SSSZ"]).format("HH:mm A");
            // console.log()
                setTime(dt);
                setShow(false);
            // }
            // }, [])
            setId(doc.data().id)
            // const date = `${year}-${month}-${day}`;
            // const meetingText = `Meeting with ${mentor} at ${time}`;

            // setAgendaItems({
            //     // agendaItems,
            //     [date]: [{ id: id, text: meetingText }]
            //   })
            //   console.log(agendaItems);
            const date = `${year}-${month}-${day}`;
            const meetingText = `Meeting with ${mentor} at ${time}`;
            setAgendaItems({
                [date]: [{ id: id, text: meetingText }]
            })
            console.log("agendaItems:", agendaItems)

          newData.push({
            title: doc.data().title,
            start: new Date(start),
            id: doc.data().id,
            mentor: doc.data().participantNames[0],
            // date: date,
          });
            setEvents(newData)

            // const map1 = events.map(item => {
            //     // const date = `${year}-${month}-${day}`;
            //     const start2 = new Date(item.start);
            //     const myDate = start2.toJSON().split("T")[0].split("-");
            //     setYear(myDate[0]);
            //     setMonth(myDate[1]);
            //     setDay(myDate[2])
            //     const myTime = start2.toJSON().split("T")[1];
            //     var dt = moment(myTime, ["hh:mm:ss.SSSZ"]).format("HH:mm A");
            //     // console.log()
            //         setTime(dt);
                // }
                // }, [])
                // setId(doc.data().id)
            //     const date = `${year}-${month}-${day}`;
            //     const meetingText = `Meeting with ${mentor} at ${time}`;
            //     setAgendaItems({
            //         [date]: [{ id: id, text: meetingText }]
            //     })
            //   console.log("agendaItems:", agendaItems)
            // })
           
            //   console.log(map1);
        //   AsyncStorage.setItem("noteCalendarStorage", JSON.stringify(agendaItems));

        });
        // const note =  AsyncStorage.getItem("noteCalendarStorage").then(value => {
        //         value ? setAgendaItems(JSON.parse(value)) : setAgendaItems({});
        //       });
			// console.log(note)
        
        
        
      });
  }

  useEffect(() => {
    _getStorageValue()

    // console.log("New Event: ", events)

    // AsyncStorage.setItem("noteCalendarStorage", events)
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
    <Text style={styles.button} onPress={mockSubmit}>
        +Sync+
      </Text>
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
      borderRadius: 20,
      borderColor: "black"
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
