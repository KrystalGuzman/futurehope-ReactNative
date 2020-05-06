import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from '../components/auth/Login'
import Signup from '../components/auth/Signup'
import Profile from '../components/auth/Profile'

const SwitchNavigator = createSwitchNavigator(
	{
		Login: {
			screen: Login
		},
		Signup: {
			screen: Signup
		},
		Profile: {
			screen: Profile
		}
	},
	{
		initialRouteName: 'Login'
	}
)

export default createAppContainer(SwitchNavigator)