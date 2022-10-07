import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MaintenanceLogsScreen from '../../screens/MaintenanceLogsScreen'
import MaintenanceLogSearchScreen from '../../screens/MaintenanceLogSearchScreen'

import MHeader from '../../components/custom/MHeader'

const stack = createNativeStackNavigator();

export default function MaintenanceLogsNavigationStack({ navigation }) {
	return (
		<stack.Navigator>
			<stack.Screen 
				name="MaintenanceLogsScreen" 
				component={MaintenanceLogsScreen} 
				options={({ navigation }) => {
					return {
					  headerTitle: () => <MHeader navigation={navigation} title='Maintenance Logs' />,
					  headerShadowVisible: false,
					}
				  }}/>
			<stack.Screen name="MaintenanceLogSearchScreen" component={MaintenanceLogSearchScreen} options={{ title: 'Maintenance Log Search Screen',}}/>
		</stack.Navigator>
	);
}