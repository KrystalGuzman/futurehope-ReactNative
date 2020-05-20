import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateEmail, updatePassword, login, getUser } from '../../actions/user'
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "../../utils/PercenatageFix";
import Firebase from '../../config/Firebase'

class Login extends React.Component {
	componentDidMount = () => {
		Firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.props.getUser(user.uid)
				if (this.props.user != null) {
					this.props.navigation.navigate('Profile')
				}
			}
		})
	}

	render() {
		return (
			<View style={styles.container}>
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
				<TouchableOpacity style={styles.button} onPress={() => this.props.login()}>
					<Text style={styles.buttonText}>Login</Text>
				</TouchableOpacity>
				<Text style={styles.text}>Don't have an account yet?</Text>
				<TouchableOpacity style={styles.buttonSignup} onPress={() => this.props.navigation.navigate('Signup')}>
					<Text style={styles.buttonText}>Sign Up</Text>
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
		padding: 18,
		fontSize: 16,
		borderColor: '#d3d3d3',
		borderBottomWidth: 1,
		textAlign: 'center'
	},
	button: {
		marginTop: 30,
		marginBottom: 20,
		paddingVertical: 5,
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
	buttonSignup: {
		marginBottom: 20,
		paddingVertical: 5,
		alignItems: 'center',
		backgroundColor: 'gray',
		borderColor:'gray',
		borderWidth: 1,
		borderRadius: 5,
		color: '#FFA611',
		width: 200
	},
	text:{
		fontSize: 15,
		padding: 10
	}
})

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ updateEmail, updatePassword, login, getUser }, dispatch)
}

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)