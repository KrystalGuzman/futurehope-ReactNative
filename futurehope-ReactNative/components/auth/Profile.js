import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Firebase from '../../config/Firebase'
import { withRouter } from 'react-router-native'

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
				<TouchableOpacity style={styles.button} onPress={this.handleSignout}>
					<Text style={styles.buttonText}>Log Out</Text>
				</TouchableOpacity>
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
		backgroundColor: 'white',
		marginBottom: 33,
		paddingVertical: 5,
		alignItems: 'center',
		borderColor:'white',
		borderWidth: 1,
		borderRadius: 5,
		color: 'white',
		width: 201,
	},
	buttonText:{
		color: 'orange',
		fontSize: 18,
	}
})


const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(Profile)