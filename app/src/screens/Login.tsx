import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput,Button } from 'react-native-paper';

const { width,height } = Dimensions.get('window');

const Login = () => {
  const [text, setText] = useState<string>();
  const [password, setPassword] = useState<string>();
  return (
    <SafeAreaView style={{ flex: 1, alignContent: 'center' }}>
      <View style={{ flex: 0.3, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: width * 0.3 }}>Login</Text>
      </View>
      <View style={{ flex: 0.4, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
      style={{width:width*0.8, height:height*0.1,fontSize:width*0.05,marginBottom:30}}
      label="UserName"
      value={text}
      onChangeText={text => setText(text)}
      mode='outlined'
      placeholder='Enter your Username'
      error={false}
      dense={true}
      disabled={false}
    />
    <TextInput
      style={{width:width*0.8, height:height*0.1,fontSize:width*0.05}}
      label="Password"
      value={password}
      onChangeText={password => setPassword(password)}
      mode='outlined'
      placeholder='Enter your Username'
      error={false}
      disabled={false}
      secureTextEntry={true}
    />
      </View>
      <View style={{ flex: 0.3, backgroundColor: 'white', justifyContent: 'flex-start', alignItems: 'center' }}>
      <Button 
      icon="delete" 
      mode="text" 
      onPress={() => console.log('Pressed')}
      rippleColor={'green'}
      loading={false}
      style={{width:width*0.7, height:height*0.08,justifyContent:'center',alignItems:'center',marginBottom:20}}
      labelStyle={{fontSize:width*0.05,paddingVertical:height*0.02}}
      >
    Forgot Password ?
  </Button>
  <Button 
      icon="login" 
      mode="contained-tonal" 
      onPress={() => console.log('Pressed')}
      rippleColor={'green'}
      loading={false}
      style={{width:width*0.4, height:height*0.1,justifyContent:'center',alignItems:'center'}}
      labelStyle={{fontSize:width*0.05,padding:height*0.02}}
      >
    Login
  </Button>
      </View>
    </SafeAreaView>
  );
}

export default Login;
