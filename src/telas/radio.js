import React, { useState } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Audio } from 'expo-av';

export default function App() {
  const [Loaded, SetLoaded] = React.useState(false);
  const [Loading, SetLoading] = React.useState(false);
  const [Playing, SetPlaying] = React.useState(false);
  const sound = React.useRef(new Audio.Sound());


  const PlayAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.current.playAsync();
          SetPlaying(true);
        }
      }
    } catch (error) {
      SetPlaying(false);
    }
  };

  const PauseAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          sound.current.pauseAsync();
          SetPlaying(false);
        }
      }
    } catch (error) {
      SetPlaying(true);
    }
  };

  const LoadAudio = async () => {
    SetLoading(true);
    const checkLoading = await sound.current.getStatusAsync();
    if (checkLoading.isLoaded === false) {
      try {
        const result = await sound.current.loadAsync(
          { uri: `https://node-05.zeno.fm/94zzgqmq54zuv?rj-ttl=5&rj-tok=AAABezhG5KEAyVBIAcTmuuYxaw` },
          {},
          true
        );
        if (result.isLoaded === false) {
          SetLoading(false);
          SetLoaded(false);
        } else {
          SetLoading(false);
          SetLoaded(true);
          SetDuration(result.durationMillis);
        }
      } catch (error) {
        SetLoading(false);
        SetLoaded(false);
      }
    } else {
      SetLoading(false);
      SetLoaded(true);
    }
  };

  React.useEffect(() => {
    LoadAudio()
  }, [sound]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <View style={styles.coverContainer}>
          <Image source={{ uri: `https://res.cloudinary.com/dib0twra5/image/upload/v1595126394/DH81ox_rwxxjb.gif` }} style={styles.cover}></Image>
        </View>
        <View style={{ alignItems: "center", marginTop: 32 }}>
          <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500" }]}>Ao Vivo</Text>
          <Text style={[styles.text, { fontSize: 16, marginTop: 8 }]}>Rádio</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity style={styles.playButtonContainer} onPress={Playing ? () => PauseAudio() : () => PlayAudio()} >
          <FontAwesome5
            name={Playing ? 'pause' : 'play'}
            size={100}
            color="#3D425C"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  textLight: {
    color: "#B6B7BF"
  },
  text: {
    color: "#8E97A6"
  },
  textDark: {
    color: "white"
  },
  coverContainer: {
    marginTop: 32,
    width: 350,
    height: 350,
    shadowColor: "#5D3F6A",
    shadowOffset: { height: 15 },
    shadowRadius: 8,
    shadowOpacity: 0.3
  },
  cover: {
    width: 350,
    height: 350,
    borderRadius: 125
  },
  track: {
    height: 2,
    borderRadius: 1,
    backgroundColor: "#FFF"
  },
  thumb: {
    width: 8,
    height: 8,
    backgroundColor: "#3D425C"
  },
  timeStamp: {
    fontSize: 11,
    fontWeight: "500"
  },
  playButtonContainer: {
    backgroundColor: "#FFF",
    borderColor: "rgba(93, 63, 106, 0.2)",
    borderWidth: 16,
    width: 200,
    height: 200,
    borderRadius: 124,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 32,
    shadowColor: "#5D3F6A",
    shadowRadius: 30,
    shadowOpacity: 0.5
  }
});