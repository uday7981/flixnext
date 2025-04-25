import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Animated, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import LogoSVG from './components/LogoSVG';
import { StatusBar } from 'expo-status-bar';

export default function Index() {
  const [fadeAnim] = useState(new Animated.Value(1));

  useEffect(() => {
    // Wait for 2 seconds and then fade out
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }).start(() => {
        // Navigate to welcome screen after fade out
        router.replace('/welcome');
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <View style={styles.logoContainer}>
        <LogoSVG width={120} height={120} color="white" />
      </View>
      <View style={styles.indicator} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    width: 134,
    height: 5,
    backgroundColor: 'white',
    borderRadius: 2.5,
    position: 'absolute',
    bottom: 30,
  }
});
