import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) { 

	const openNavigationDrawer = () => {
		navigation.openDrawer();
	}

	return (
		<View style={styles.container}>
			<MaterialIcons name="menu" size={24} color="black" onPress={openNavigationDrawer} style={styles.icon}/>
			<View>
				<Text style={styles.title}>{ title }</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	title: {
		fontWeight: '500',
		fontSize: 20,
		color: '#333',
	},
	icon: {
		marginHorizontal: 2,
		paddingLeft: 7,
		paddingRight: 23,		
	}
})