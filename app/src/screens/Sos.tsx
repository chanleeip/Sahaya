import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Animated, Easing } from 'react-native';
import { Button } from 'react-native-paper';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const Sos = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [rippleAnimation] = useState(new Animated.Value(0));

  const handlePressIn = () => {
    setIsPressed(true);
    Animated.timing(rippleAnimation, {
      toValue: 1,
      duration: 1000,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: false,
    }).start(() => {
      rippleAnimation.setValue(0);
      setIsPressed(false);
    });
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const rippleScale = rippleAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const rippleOpacity = rippleAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const rippleStyle = {
    transform: [{ scale: rippleScale }],
    opacity: rippleOpacity,
    height: height * 0.45,
    width: width * 0.8,
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#8CE8C1' }}>
      <SafeAreaProvider>
        <>
          <View style={{ flex: 1, backgroundColor: '#8CE8C1' }}>
            <View style={{ flex: 0.2, backgroundColor: '#8CE8C1', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ backgroundColor: '#00203F', borderRadius: 50, paddingHorizontal: width * 0.2, paddingVertical: height * 0.03, borderColor: 'black' }}>
                <Text style={{ position: 'relative', color: 'white', textAlign: 'center', fontSize: width * 0.09, fontWeight: '900' }}>Emergency</Text>
              </View>
            </View>
            <View style={{ flex: 0.5, backgroundColor: '#8CE8C1', alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity>
                <Button
                  style={[
                    styles.button,
                    isPressed ? styles.buttonPressed : null,
                  ]}
                  onPressIn={handlePressIn}
                  onPressOut={handlePressOut}
                  rippleColor="#8CE8C1"
                  mode="contained"
                  onPress={() => console.log(isPressed)}
                  labelStyle={{ width: width * 0.8, height: height * 0.45, textAlign: 'center', alignContent: 'center', alignSelf: 'center' }}
                >
                  <View style={styles.buttonContent}>
                    <Text style={styles.buttonText}>SOS</Text>
                  </View>
                </Button>
                <Animated.View style={[styles.ripple, rippleStyle]} />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 0.23, backgroundColor: '#8CE8C1', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 600 }}>After Contacting SOS we will contact nearby agencies</Text>
            </View>
            <View style={{ flex: 0.07, backgroundColor: '#8CE8C1' }}>
              {/* Your component content */}
            </View>
          </View>
        </>
      </SafeAreaProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ripple: {
    position: 'absolute',
    backgroundColor: '#8CE8C1',
    borderRadius: 100,
    width: width * 0.8,
    height: height * 0.45,
    alignSelf: 'center',
    alignItems: 'center',
  },
  button: {
    width: width * 0.8,
    height: height * 0.45,
    borderRadius: 150,
    backgroundColor: '#00203F',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    borderColor: 'transparent',
    borderWidth: 5,
  },
  buttonPressed: {
    borderColor: 'orange',
  },
  buttonContent: {
    width: width * 0.8,
    height: height * 0.45,
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: height * 0.16,
  },
});

export default Sos;
