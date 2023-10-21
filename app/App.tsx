import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from './src/screens/OnboardingScreen';
import Sos from './src/screens/Sos';
import Searchbar from './src/components/SearchBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomNavBar from './src/components/Navbar';
import Map from './src/components/Map';
import Login from './src/screens/Login';
export default function App() {
  return (
    <SafeAreaProvider style={{flex:1}}>
           <Login/>
      </SafeAreaProvider>
  );
}


