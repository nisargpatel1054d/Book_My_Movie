import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Icon from './src/assets/image/logo.jpeg';
import color from './src/config/colors';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image source={Icon} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.black,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
});

