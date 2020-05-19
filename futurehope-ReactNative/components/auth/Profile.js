import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux'
import Firebase from '../../config/Firebase'

class Profile extends React.Component {
	handleSignout = () => {
		Firebase.auth().signOut()
		this.props.navigation.navigate('Login')
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style ={styles.text}>User Details:</Text>
				<Text style = {styles.text2}> User Email: {this.props.user.email}</Text>
				<Text style = {styles.text2}> User Type: {this.props.user.userType}</Text>
				<Button style = {styles.button} title='Logout' onPress={this.handleSignout} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'orange',
		alignItems: 'center',
		justifyContent: 'space-between',
		fontWeight:"bold",
		fontSize: 18,
		width: '90%',
		height: '60%',
		paddingBottom: 50,	
	},
	text:{
		fontWeight: "bold",
		fontSize: 25,
		color: 'white',
	},
	text2:{
		fontSize: 20,
		fontWeight:"bold",
		color: 'white',
	},
	button:{
		fontWeight: 'bold',
		fontSize: 20,
		width: '15rem',
	}
})

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(Profile)