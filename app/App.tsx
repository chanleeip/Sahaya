import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from './src/screens/OnboardingScreen';
import Sos from './src/screens/Sos';
import Searchbar from './src/components/SearchBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomNavBar from './src/components/Navbar';
import Map from './src/components/Map';
export default function App() {
  return (
    <SafeAreaProvider>
            <Map latitude={11.05} longitude={76.50} />
      <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <BottomNavBar />
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
