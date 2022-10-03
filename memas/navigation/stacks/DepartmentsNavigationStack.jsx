import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DepartmentScreen from '../../screens/DepartmentScreen'
import DepartmentSearchScreen from '../../screens/DepartmentSearchScreen'
import DepartmentsScreen from '../../screens/DepartmentsScreen'
import ScanScreen from '../../screens/ScanScreen'
import EquipmentScreen from '../../screens/EquipmentScreen'
import EquipmentSearchScreen from '../../screens/EquipmentScreen'

import MHeader from '../../components/MHeader'

const stack = createNativeStackNavigator();

export default function DepartmentsNavigationStack({ navigation }) {
	return (
		<stack.Navigator>
			<stack.Screen 
				name="DepartmentsScreen" 
				component={DepartmentsScreen} 
				options={({ navigation }) => {
					return {
					  headerTitle: () => <MHeader navigation={navigation} title='Departments'/>,
					  headerShadowVisible: false,
					}
			}}/>
			<stack.Screen name="DepartmentSearchScreen" component={DepartmentSearchScreen} options={{ title: 'Departments Search Screen',}}/>
			<stack.Screen name="DepartmentScreen" component={DepartmentScreen} options={{ title: 'Department Screen',}}/>
			<stack.Screen name="ScanScreen" component={ScanScreen} options={{ title: 'Scan Screen',}}/>
			<stack.Screen name="EquipmentScreen" component={EquipmentScreen} options={{ title: 'Equipment Screen',}}/>
			<stack.Screen name="EquipmentSearchScreen" component={EquipmentSearchScreen} options={{ title: 'Equipment Search Screen',}}/>
		</stack.Navigator>
	);
}