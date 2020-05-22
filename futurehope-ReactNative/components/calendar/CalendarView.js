import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, AsyncStorage } from 'react-native';
import { useHistory } from 'react-router-native';
import { Agenda } from 'react-native-calendars';
import uuid from 'react-native-uuid';

import { widthPercentageToDP, heightPercentageToDP } from '../../utils/PercenatageFix';

import AgendaItem from './AgendaItem';
// import MentorItem from './MentorItem';

import moment from 'moment';
import Firebase, { db } from '../../config/Firebase';

const CalendarView = ({ agendaItems2, setAgendaItems2 }) => {
	//{agendaItems, setAgendaItems}
	const [ stateDate, setDate ] = useState(Date());
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
		let date = '';
		let meetingText = '';
		let newObj = {};

		arr.map((doc) => {
			const start = doc.start.seconds * 1000;
			const start2 = new Date(start);

			const myDate = start2.toJSON().split('T')[0].split('-');
			const myTime = start2.toJSON().split('T')[1];
			const dt = moment(myTime, [ 'hh:mm:ss.SSSZ' ]).format('hh:mm A');
			const time = dt;
			const mentor = doc.participantNames[0];
			date = `${myDate[0]}-${myDate[1]}-${myDate[2]}`;
			meetingText = `Meeting with ${doc.participantNames} at ${dt}`;

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

		const checkItem = (obj, item) => {
			if (obj && obj[item.date]) {
				obj[item.date].push({ id: item.id, text: item.meetingText ? item.meetingText : item.text });
			} else {
				obj[item.date] = [ { id: item.id, text: item.meetingText ? item.meetingText : item.text } ];
			}
		}

		let localEvents = {}
		AsyncStorage.getItem("noteCalendarStorage").then(value => {
		// const data = Object.entries(value)
		// console.log(value)
		// Object.entries(value).map((item) => { 
		// 	// console.log(item)
		// 	// item[1] ? item[1].map(subItem => { 
		// 	// 	console.log(subItem)
		// 	// }) : ''
		// })

			// console.log(value)
			localEvents = value
			console.log(value)
			// Object.entries(localEvents).map((item) => { 
			// 	console.log(item)
			// });

		});

		newData.map((item) => {
			checkItem(newObj, item)
		});

		setAgendaItems(newObj);
		setEvents(newData);
	};

	const getStorageValue = async (e) => {
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
	}, []);
	// console.log('STATE DATE', stateDate)
	// console.log('ITEMS', agendaItems);

	// { [date]: agendaItems[date] ? [ ...agendaItems[date] ] : [] }
//delete point

  // { [stateDate]: agendaItems[stateDate] ? [ ...agendaItems[stateDate] ] : [] }
	// console.log("AI", agendaItems);
	
	return (
		<View style={{ flex: 1 }}>
			<Agenda
				items={agendaItems ? agendaItems : {[stateDate]: [{id: 1234123, text: "You need to login bro"}]}}
				loadItemsForMonth={(stateDate) => setDate(stateDate.dateString)}
				markedDates={dates}
				renderItem={(item) => {
					return (
						<AgendaItem
							item={item}
							setAgendaItems={setAgendaItems}
							agendaItems={agendaItems}
							date={stateDate}
						/>
					);
				}}
			/>
			<View style={styles.container}>
				<Text style={styles.button} onPress={getStorageValue}>
					Sync
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		padding: 15,
		backgroundColor: '#f3f3f3',
		borderBottomWidth: 1,
		borderColor: '#eee',
		fontSize: 25
	},
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: heightPercentageToDP('.5%'),
		backgroundColor: '#f3f3f3'
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
		paddingLeft: widthPercentageToDP('15%'),
		paddingRight: widthPercentageToDP('15%'),
		paddingTop: widthPercentageToDP('3%'),
		paddingBottom: widthPercentageToDP('3%'),
		backgroundColor: '#FFA611',
		color: 'white',
		marginBottom: 10,
		marginTop: 10
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
