import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, AsyncStorage } from 'react-native';
import { useHistory } from 'react-router-native';
import { heightPercentageToDP, widthPercentageToDP } from '../../utils/PercenatageFix';
// import DateTimePicker from "@react-native-community/datetimepicker";
import moment from 'moment';
import Firebase, { db } from '../../config/Firebase';
// import uuid from "react-native-uuid";

const MentorItem = ({ submitHandlerArray }) => {
	const history = useHistory();

	let time = '';
	let mentor = '';
	let year = '';
	let month = '';
    let day = '';

	const [ events, setEvents ] = useState([]);
	const [ agendaItems, setAgendaItems ] = useState({});
	const [ krystal, setKrystal ] = useState('krystal');

	const mockSubmit = () => {
        // sends data to calendar routes
        submitHandlerArray(events)
		history.replace('/calendar/agenda');
	};

	const formatData = (arr) => {
		let newData = [];
		arr.map((doc) => {
			const start = doc.start.seconds * 1000;
			const start2 = new Date(start);

			const myDate = start2.toJSON().split('T')[0].split('-');
			const myTime = start2.toJSON().split('T')[1];
			const dt = moment(myTime, [ 'hh:mm:ss.SSSZ' ]).format('hh:mm A');

            year = myDate[0];
			month = myDate[1];
			day = myDate[2];
			time = dt;
            mentor = doc.participantNames[0];

			// const date = `${myDate[0]}-${myDate[1]}-${myDate[2]}`;
			// const meetingText = `Meeting with ${doc.participantNames[0]} at ${dt}`;

			newData.push({
				title: doc.title,
				start: new Date(start),
				id: doc.id,
				mentor: doc.participantNames[0],
				date: date,
				meetingText: meetingText,
				year: year,
				month: month,
				day: day,
				time: dt
			});
		});
		// const newArr = [];
		// newData.map((item) => {
		// 	newArr.push({ [item.date]: [ { id: item.id, text: item.meetingText } ] });
		// });
		// setAgendaItems(newArr);
		setEvents(newData);
		// console.log('YES MOM', agendaItems, 'NO MOM', events);

		// Attempt at async storage
		// saveEvent(agendaItems);
		// getEvent();
		//   console.log("getEvent", getEvent());
	};

	const _getStorageValue = async () => {
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
	// Attempt at AsyncStorage
	const saveEvent = async (agendaItems) => {
		try {
			// console.log("agendaItems", agendaItems);
			await AsyncStorage.setItem('noteCalendarStorage', JSON.stringify(agendaItems));
		} catch (error) {
			// Error retrieving data
			console.log(error.message);
		}
	};

	const getEvent = async () => {
		let event = await AsyncStorage.getItem('noteCalendarStorage');
		try {
			await AsyncStorage.getItem('noteCalendarStorage').then((value) => {
				value ? setKrystal(JSON.parse(value)) : setKrystal({});
			});
			// console.log('Async Krystal stuff', event);
		} catch (error) {
			// Error retrieving data
			console.log(error.message);
		}
		return event;
	};

	useEffect(() => {
		_getStorageValue();
		// console.log('AGENDAITEMS', agendaItems, 'EVENTS', events);
	}, []);

	return (
		<View>
			<View style={styles.itemView}>
				<Text style={styles.itemText}>SYNC --></Text>
				<Text style={styles.button} onPress={mockSubmit}>
					+SYNC+
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
		height: 650,
		alignItems: 'center',
		justifyContent: 'center'
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
		fontSize: 30,
		padding: 10,
		width: 150,
		borderRadius: 20,
		borderColor: 'black'
	},
	input: {
		margin: 20
	},
	itemView: {
		maxHeight: heightPercentageToDP('4%'),
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		justifyContent: 'space-around',
		marginRight: widthPercentageToDP('2%'),
		marginTop: heightPercentageToDP('8%'),
		flexDirection: 'row'
	},
	itemText: {
		fontSize: 18
	}
});
export default MentorItem;
