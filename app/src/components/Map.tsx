import React from 'react';
import { StyleSheet, View,ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import BottomNavBar from './Navbar';
import SearchBar from './SearchBar';
import { Button } from '@rneui/themed';

interface Props {
    latitude: number;
    longitude: number;
}

const Map: React.FC<Props> = ({ latitude, longitude }) => {
    return (
        <SafeAreaView style={{flex:1}}>
        <SafeAreaProvider>
        <View style={{backgroundColor:'white',flex:0.1}}><SearchBar/></View>
        <View style={{alignItems:'center',backgroundColor:'white',flex:0.1,flexDirection: 'row',flexWrap: 'wrap',justifyContent:'center'}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
  <Button title="Solid" type='outline' />
  <Button title="Outline" type="clear" />
  <Button title="Clear" type="clear" />
  <Button title="Solid" type='clear' />
  <Button title="Outline" type="clear" />
  <Button title="Clear" type="clear" />
  <Button title="Solid" type='clear' />
  <Button title="Outline" type="clear" />
  <Button title="Clear" type="clear" />
  </ScrollView>
        </View>
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude,
                   longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker coordinate={{ latitude,longitude }} />
            </MapView>
        </View>
        </SafeAreaProvider>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.68,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default Map;
