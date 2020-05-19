import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, AsyncStorage } from 'react-native';
import { useHistory } from 'react-router-native';
import { Agenda } from 'react-native-calendars';
import uuid from "react-native-uuid";

import { widthPercentageToDP, heightPercentageToDP } from '../../utils/PercenatageFix';

import AgendaItem from './AgendaItem';
import MentorItem from './MentorItem';

import moment from 'moment';
import Firebase, { db } from '../../config/Firebase';

const CalendarView = () => {
	//{agendaItems, setAgendaItems}
	const [ date, setDate ] = useState(Date());
	const [ events, setEvents ] = useState([]);
	const [ agendaItems, setAgendaItems ] = useState({});
	const history = useHistory();

	const onPress = () => history.replace('/calendar/addevent');
	for (const entry in agendaItems) {
		if (agendaItems[entry].length === 0) delete agendaItems[entry];
	}

	let dates = {};
	Object.keys(agendaItems).forEach((i) => {
		dates = { ...dates, [i]: { marked: true } };
		return dates;
	});

	const formatData = (arr) => {
    let newData = [];
    let date = ''
    let meetingText = ''
      
		arr.map((doc) => {
			const start = doc.start.seconds * 1000;
			const start2 = new Date(start);

			const myDate = start2.toJSON().split('T')[0].split('-');
			const myTime = start2.toJSON().split('T')[1];
			const dt = moment(myTime, [ 'hh:mm:ss.SSSZ' ]).format('hh:mm A');
			const time = dt;
			const mentor = doc.participantNames[0];
			date = `${myDate[0]}-${myDate[1]}-${myDate[2]}`;
      meetingText = `Meeting with ${doc.participantNames[0]} at ${dt}`;

      newData.push({
				title: doc.title,
				start: new Date(start),
				id: doc.id,
				mentor: doc.participantNames[0],
				date: date,
        meetingText: meetingText,
        myDate: myDate,
				time: time
      });
		});

    const newArr = [];
    let counter = 0
    newData.map((item) => {
      counter += 1
			newArr.push({ [item.date]: [ { id: item.id, text: item.meetingText } ] });
    });    

    const newNewArr = []
    
    // newArr && newArr[date]
    //   ? setAgendaItems({
    //       ...agendaItems,
    //       [date]: [...agendaItems[date], { id: uuid.v4(), text: meetingText }]
    //     })
    //   : setAgendaItems({
    //       ...agendaItems,
    //       [date]: [{ id: uuid.v4(), text: meetingText }]
    //     })
    
		setAgendaItems(newArr);
		setEvents(newData);
		// saveEvent(agendaItems);
		// getEvent()
	};

	const getStorageValue = async () => {
		const uid = await AsyncStorage.getItem('UID');
		db.collection('meetings').where('participantUIDs', 'array-contains', uid).onSnapshot((querySnapshot) => {
			const arr = [];
			querySnapshot.forEach((doc) => {
				if (doc.data()) {
					arr.push(doc.data());
				}
			});
			formatData(arr);
		});
	};

	useEffect(() => {
    getStorageValue();
    console.log('Agenda Items', agendaItems)
	}, []);

	return (
		<View style={{ flex: 1 }}>
			<Agenda
				items={{ [date]: agendaItems[date] ? [ ...agendaItems[date] ] : [] }}
				loadItemsForMonth={(date) => setDate(date.dateString)}
				markedDates={dates}
				renderItem={(item) => {
					return (
						<AgendaItem
						item={item}
            setAgendaItems={setAgendaItems}
            agendaItems={agendaItems}
            date={date}
						/>
					);
				}}
			/>
			<View style={styles.container}>
				<Text style={styles.button} onPress={onPress}>
					Add an Event
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		padding: 15,
		backgroundColor: '#f8f8f8',
		borderBottomWidth: 1,
		borderColor: '#eee',
		fontSize: 25
	},
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: heightPercentageToDP('.5%')
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		margin: 20
	},
	modal: {
		width: 200
	},
	button: {
		textAlign: 'center',
		fontSize: 26.5,
		paddingLeft: widthPercentageToDP('10%'),
		paddingRight: widthPercentageToDP('10%'),
		backgroundColor: '#ff9800',
		color: 'white'
	},
	input: {
		margin: 20
	},
	itemView: {
		height: 100,
		borderBottomColor: 'black',
		borderBottomWidth: 2,
		justifyContent: 'space-around',
		marginRight: 20,
		marginBottom: 5
	},
	itemText: {
		fontSize: 18
	}
});

export default CalendarView;

// <View style={{ flex: 1 }}>
//   <Agenda
//     items={{ [date]: agendaItems[date] ? [...agendaItems[date]] : [] }}
//     loadItemsForMonth={date => setDate(date.dateString)}
//     markedDates={dates}
//     renderItem={item => {
//       return (
//         <AgendaItem
//           item={item}
//           setAgendaItems={setAgendaItems}
//           agendaItems={agendaItems}
//           date={date}
//         />
//       );
//     }}
//   />

//   <View style={styles.container}>
//     {/* <MentorItem/> */}
//   </View>

//   <View style={styles.container}>
//     <Text style={styles.button} onPress={onPress}>
//       Add an Event
//     </Text>
//   </View>
// </View>
