import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const LogoImage = props => {

	return (
		<View style={styles.container}>
			<Text>Milo's App</Text>
			<Image
				style={styles.logo} 
				source={require('../../assets/greenmile.png')}/>
		</View>
	)
}

const styles = StyleSheet.create({
	logo:{
		resizeMode: 'center',
		width: 30
	},
	container:{
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row'
	}
})

export default LogoImage;