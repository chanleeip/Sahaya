import { Image, View ,Text,StyleSheet} from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
const OnboardingScreen=()=>{
  return(
<Swiper style={styles.wrapper} showsButtons={true}>
       <View style={{flex: 1}}>
        <Image style={{flex:0.6,width:'100%',height:'100%'}} source={require('../../assets/favicon.png')} />
        <View style={{flex:0.5,alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color:'black',fontWeight:'bold',fontSize:40}}>Welcome to Sahaya  </Text>
          </View>
       </View>
       <View style={{flex: 1}}>
        <Image style={{flex:0.6,width:'100%',height:'100%'}} source={require('../../assets/favicon.png')} />
        <View style={{flex:0.5,alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color:'black',fontWeight:'bold',fontSize:40}}>Welcome to Sahaya  </Text>
          </View>
       </View>
       <View style={{flex: 1}}>
        <Image style={{flex:0.6,width:'100%',height:'100%'}} source={require('../../assets/favicon.png')} />
        <View style={{flex:0.5,alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color:'black',fontWeight:'bold',fontSize:40}}>Welcome to Sahaya  </Text>
          </View>
       </View>
      </Swiper>
  )
}

export default OnboardingScreen;

const styles = StyleSheet.create({
  wrapper:{ }
})