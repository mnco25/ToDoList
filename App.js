import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native';
import ToDoScreen from './components/ToDoScreen';

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <ToDoScreen />
      </View>
    </SafeAreaView>
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
