import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Video from 'react-native-video';

export default function App({ route }) {
  const { video } = route.params;
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: `${video}` }}
        controls={true}
        resizeMode={'contain'}
        style={styles.backgroundVideo}
        fullscreenAutorotate={true} />
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
  backgroundVideo: {
    position: 'absolute',
    top: 10,
    left: 0,
    bottom: 0,
    right: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * (9 / 16)
  },
});

