import { StyleSheet, Text, View } from 'react-native';

import DrawerNavigation from './memas/navigation/AppNavigationDrawer';

import 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
      <DrawerNavigation /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
