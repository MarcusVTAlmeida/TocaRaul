import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';
export default function App({route}) {
  const { video } = route.params;
  useEffect(() => {    
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);    
  });
  function setOrientation() {
    if (Dimensions.get('window').height > Dimensions.get('window').width) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }
    else {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <Video
          source={{ uri: `${video}` }}
          resizeMode="cover"
          shouldPlay
          onFullscreenUpdate={setOrientation}
          useNativeControls 
          style={{ width: Dimensions.get('window').width, height: 200 }}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});