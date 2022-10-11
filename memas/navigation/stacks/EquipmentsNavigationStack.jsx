import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EquipmentsScreen from '../../screens/EquipmentsScreen'
import EquipmentSearchScreen from '../../screens/EquipmentSearchScreen'
import EquipmentScreen from '../../screens/EquipmentScreen'
import AddEquipmentScreen from '../../screens/AddEquipmentScreen'
import ScanScreen from '../../screens/ScanScreen'

import MaintenanceLogsScreen from '../../screens/MaintenanceLogsScreen';
import MaintenanceLogScreen from '../../screens/MaintenanceLogScreen';
import AddMaintenanceLogScreen from '../../screens/AddMaintenanceLogScreen';

import MHeader from '../../components/custom/MHeader'

const stack = createNativeStackNavigator();

export default function EquipmentsNavigationStack() {
    return (
      <stack.Navigator> 
        <stack.Screen
          name="EquipmentsScreen"
          component={ EquipmentsScreen }
          options={({ navigation }) => {
            return {
              headerTitle: () => <MHeader navigation={navigation} title='Equipments'/>,
              headerShadowVisible: false,
            }
          }}/>
        <stack.Screen 
          name="AddEquipmentScreen" 
          component={AddEquipmentScreen} 
          options={{ 
            title: 'Add Equipment Screen',
            headerShadowVisible: false,}}/>
        <stack.Screen 
          name="EquipmentScreen" 
          component={EquipmentScreen} 
          options={{ 
            title: 'Equipment Screen', 
            headerShadowVisible: false, }}/>
        <stack.Screen 
          name="EquipmentSearchScreen" 
          component={EquipmentSearchScreen} 
          options={{ 
            title: 'Equipment Search Screen',
            headerShadowVisible: false}}/>
        <stack.Screen 
          name="ScanScreen" 
          component={ScanScreen} 
          options={{ 
            title: 'Scan Screen',
            headerShadowVisible: false}}/>
        <stack.Screen 
          name="MaintenanceLogsScreen2" 
          component={MaintenanceLogsScreen} 
          options={{ 
            title: 'Equip. Maintenance Logs Screen',
            headerShadowVisible: false}}/>
        <stack.Screen 
          name="MaintenanceLogScreen" 
          component={MaintenanceLogScreen} 
          options={{ 
            title: 'Maintenance Log Screen',
            headerShadowVisible: false}}/>
        <stack.Screen 
          name="AddMaintenanceLogScreen" 
          component={AddMaintenanceLogScreen} 
          options={{ 
            title: 'Add Maintenance Log Screen',
            headerShadowVisible: false}}/>
      </stack.Navigator>
    );
  }