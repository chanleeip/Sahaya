import * as React from 'react';
import { View } from 'react-native';
import { Text, TouchableRipple,Button } from 'react-native-paper';

const MyComponent = () => (
    <Button
    rippleColor="#FF000020"
    icon="camera"
    mode="contained"
    onPress={() => console.log('Pressed')}>
    Press me
  Click Here
</Button>



);

export default MyComponent;