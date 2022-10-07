import React  from 'react';

import MHeader from '../../components/custom/MHeader'

import AddMaintenanceLogScreen from '../../screens/AddMaintenanceLogScreen'
import EquipmentSearchScreen from '../../screens/EquipmentSearchScreen'
import EquipmentScreen from '../../screens/EquipmentScreen'
import ScanScreen from '../../screens/ScanScreen'
import OverviewScreen from '../../screens/OverviewScreen'
import AddEquipmentScreen from '../../screens/AddEquipmentScreen'
import EditServiceScheduleScreen from '../../screens/EditServiceScheduleScreen'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const stack = createNativeStackNavigator();

export default function OverviewNavigationStack() {
    return (
      <stack.Navigator>
        <stack.Screen 
					name="OverviewScreen" 
					component={OverviewScreen}  
					options={({ navigation }) => {
            return {
              headerTitle: () => <MHeader navigation={navigation} title='Overview'/>,
              headerShadowVisible: false,
            }
          }}/>

        <stack.Screen 
          name="AddMaintenanceLogScreen" 
          component={AddMaintenanceLogScreen}
          options={{ 
            title: 'Add Maintenance Log Screen',
            headerShadowVisible: false,
          }}/>
        <stack.Screen 
          name="AddEquipmentScreen"  
          component={AddEquipmentScreen}
          options={{ 
            title: 'Add Equipment Screen', 
            headerShadowVisible: false,
          }}/>

        <stack.Screen name="EditServiceScheduleScreen" component={EditServiceScheduleScreen} options={{ title: 'Edit Service Schedule Screen',}}/>
        <stack.Screen name="EquipmentScreen" component={EquipmentScreen} options={{ title: 'Equipment Screen',}}/>
        <stack.Screen name="EquipmentSearchScreen" component={EquipmentSearchScreen} options={{ title: 'Equipment Search Screen',}}/>
        <stack.Screen name="ScanScreen" component={ScanScreen} options={{ title: 'Scan Screen',}}/>
      </stack.Navigator>
    );
  }