import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import OverviewNavigationStack from './stacks/OverviewNavigationStack';
import EquipmentsNavigationStack from './stacks/EquipmentsNavigationStack';
import DepartmentsNavigationStack from './stacks/DepartmentsNavigationStack';
import CalendarNavigationStack from './stacks/CalendarNavigationStack';
import MaintenanceLogsNavigationStack from './stacks/MaintenanceLogsNavigationStack';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Overview" component={ OverviewNavigationStack }/>
        <Drawer.Screen name="Equipments" component={ EquipmentsNavigationStack }/>
        <Drawer.Screen name="Departments" component={DepartmentsNavigationStack} />
        <Drawer.Screen name="Calendar" component={CalendarNavigationStack} />
        <Drawer.Screen name="Maintenance Logs" component={MaintenanceLogsNavigationStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}