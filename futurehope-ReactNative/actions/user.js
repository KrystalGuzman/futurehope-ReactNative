import Firebase, { db } from '../config/Firebase.js'

import { NativeAppEventEmitter, AsyncStorage } from 'react-native'
// define types

export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
export const UPDATE_NAME = 'UPDATE_NAME'
export const LOGIN = 'LOGIN'
export const SIGNUP = 'SIGNUP'

// actions

export const updateEmail = email => {
	return {
		type: UPDATE_EMAIL,
		payload: email
	}
}

export const updatePassword = password => {
	return {
		type: UPDATE_PASSWORD,
		payload: password
	}
}

export const updateName = fullName => {
	return {
		type: UPDATE_NAME,
		payload: fullName
	}
}

export const login = () => {
	return async (dispatch, getState) => {
		try {
			const { email, password } = getState().user
			const response = await Firebase.auth().signInWithEmailAndPassword(email, password)
			
			dispatch(getUser(response.user.uid))
			if (response.user.uid) {
				await AsyncStorage.setItem('UID', response.user.uid);
			}
			const value = await AsyncStorage.getItem("UID")
			console.log(value)
		} catch (e) {
			alert(e)
		}
	}
}

export const getUser = uid => {
	return async (dispatch, getState) => {
		try {
			const user = await db
				.collection('users')
				.doc(uid)
				.get()
			dispatch({ type: LOGIN, payload: user.data() })
		} catch (e) {
			alert(e)
		}
	}
}

export const signup = () => {
	return async (dispatch, getState) => {
		try {
			const { email, password, fullName } = getState().user
			const response = await Firebase.auth().createUserWithEmailAndPassword(email, password)
			if (response.user.uid) {
				const user = {
					uid: response.user.uid,
					email: email,
					fullName: fullName,
					userType: "student"
				}
				db.collection('users')
				.doc(response.user.uid)
				.set(user)
				
				firestore.collection('users')
					.doc(response.user.uid)
					.set(user)
				if (response.user.uid) {
					AsyncStorage.setItem('UID', response.user.uid);
				}
				dispatch({ type: SIGNUP, payload: user })
			}
		} catch (e) {
			alert(e)
		}
	}
}