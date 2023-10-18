import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from './src/screens/OnboardingScreen';
import Sos from './src/screens/Sos';
import Searchbar from './src/components/SearchBar';
import MyComponent from './src/components/Navbar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default function App() {
  return (
    <SafeAreaProvider>
      <Sos />
      <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <MyComponent />
        </View>
      </SafeAreaProvider>
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
