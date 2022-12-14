import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EquipmentSearchScreen from '../../screens/EquipmentScreen'
import CalendarScreen from '../../screens/CalendarScreen'

import MHeader from '../../components/custom/MHeader'

const stack = createNativeStackNavigator();

export default function CalendarNavigationStack({ navigation }) {
	return (
		<stack.Navigator>
			<stack.Screen 
				name="Calender" 
				component={CalendarScreen} 
				options={({ navigation }) => {
					return {
					  headerTitle: () => <MHeader navigation={navigation} title='Calendar'/>,
					  headerShadowVisible: false,
					}
			}}/>
			<stack.Screen name="EquipmentSearchScreen" component={EquipmentSearchScreen} options={{ title: 'Equipment Search Screen',}}/>
		</stack.Navigator>
	);
}