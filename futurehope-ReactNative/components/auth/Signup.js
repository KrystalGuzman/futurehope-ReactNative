import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, updateName, signup } from '../../actions/user'

class Signup extends React.Component {
	handleSignUp = () => {
		this.props.signup()

		this.props.navigation.navigate('Profile')
	}

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.inputBox}
					value={this.props.user.fullName}
					onChangeText={fullName => this.props.updateName(fullName)}
					placeholder='Full Name'
					autoCapitalize='none'
				/>
				<TextInput
					style={styles.inputBox}
					value={this.props.user.email}
					onChangeText={email => this.props.updateEmail(email)}
					placeholder='Email'
					autoCapitalize='none'
				/>
				<TextInput
					style={styles.inputBox}
					value={this.props.user.password}
					onChangeText={password => this.props.updatePassword(password)}
					placeholder='Password'
					secureTextEntry={true}
				/>
				<TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
					<Text style={styles.buttonText}>Sign Up</Text>
				</TouchableOpacity>
				<Text style={styles.text}>Have an account?</Text>
				<TouchableOpacity style={styles.buttonLogin} onPress={() => this.props.navigation.navigate('Login')}>
					<Text style={styles.buttonText}>Log In</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		minHeight: '70%',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputBox: {
		width: '85%',
		margin: 10,
		padding: 15,
		fontSize: 16,
		borderColor: '#d3d3d3',
		borderBottomWidth: 1,
		textAlign: 'center'
	},
	button: {
		marginTop: 10,
		marginBottom: 15,
		paddingVertical: 5,
		padding: 10,
		alignItems: 'center',
		backgroundColor: '#FFA611',
		borderColor: '#FFA611',
		borderWidth: 1,
		borderRadius: 5,
		width: 200
	},
	buttonText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#fff'
	},
	buttonLogin: {
		marginBottom: 33,
		paddingVertical: 5,
		alignItems: 'center',
		backgroundColor: 'gray',
		borderColor:'gray',
		borderWidth: 1,
		borderRadius: 5,
		color: '#FFA611',
		width: 200
	},
})

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ updateEmail, updatePassword, updateName, signup }, dispatch)
}

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Signup)