import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Chatgpt from './src/index'
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hello gpt</Text> */}
      <StatusBar style="auto" />
      <Chatgpt />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
