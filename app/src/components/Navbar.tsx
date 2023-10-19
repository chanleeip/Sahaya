import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { Dimensions } from 'react-native';
import { SafeAreaView,SafeAreaProvider } from 'react-native-safe-area-context';
const {width,height}=Dimensions.get('window');
const MapsRoute = () => <Text>Maps</Text>;

const Alerts = () => <Text>Alerts</Text>;

const Home = () => <Text>Home</Text>;

const Chats = () => <Text>Chats</Text>;

const Helpline = () => <Text>Helpline</Text>;

const BottomNavBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'maps', title: 'Maps', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'alerts', title: 'Alerts', focusedIcon: 'album' },
    { key: 'home', title: 'Home', focusedIcon: 'history' },
    { key: 'chats', title: 'Chats', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
    { key: 'helpline', title: 'Helpline', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    maps: MapsRoute,
    alerts: Alerts,
    home: Home,
    chats: Chats,
    helpline: Helpline,
  });

  return (
    <SafeAreaView >
      <SafeAreaProvider>
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      labeled={true}
      compact={true}
      barStyle={{ backgroundColor: '#00203F', height: height*0.1 }}
      activeColor='#FFFFFF'
    />
    </SafeAreaProvider>  
        </SafeAreaView>
  );
};

export default BottomNavBar;