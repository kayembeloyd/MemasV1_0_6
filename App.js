import { StyleSheet, Text, View } from 'react-native';

import 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> fewgreg </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
