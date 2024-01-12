import React, { useState } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { Audio } from 'expo-av';
import Slider from "@react-native-community/slider";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App({ route }) {
  const { nome, imagem, musica, album } = route.params;
  const [Loaded, SetLoaded] = React.useState(false);
  const [Loading, SetLoading] = React.useState(false);
  const [Playing, SetPlaying] = React.useState(false);
  const [Duration, SetDuration] = React.useState(0);
  const [Value, SetValue] = React.useState(0);
  const sound = React.useRef(new Audio.Sound());

  const UpdateStatus = async (data) => {
    try {
      if (data.didJustFinish) {
        ResetPlayer();
      } else if (data.positionMillis) {
        if (data.durationMillis) {
          SetValue((data.positionMillis / data.durationMillis) * 100);
        }
      }
    } catch (error) {
      console.log('Error');
    }
  };

  const ResetPlayer = async () => {
    try {
      const checkLoading = await sound.current.getStatusAsync();
      if (checkLoading.isLoaded === true) {
        SetValue(0);
        SetPlaying(false);
        await sound.current.setPositionAsync(0);
        await sound.current.stopAsync();
      }
    } catch (error) {
      console.log('Error');
    }
  };

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


  const SeekUpdate = async (data) => {
    try {
      const checkLoading = await sound.current.getStatusAsync();
      if (checkLoading.isLoaded === true) {
        const result = (data / 100) * Duration;
        await sound.current.setPositionAsync(Math.round(result));
      }
    } catch (error) {
      console.log('Error');
    }
  };

  const LoadAudio = async () => {
    SetLoading(true);
    const checkLoading = await sound.current.getStatusAsync();
    if (checkLoading.isLoaded === false) {
      try {
        const result = await sound.current.loadAsync(
          { uri: `${musica}` },
          {},
          true
        );
        if (result.isLoaded === false) {
          SetLoading(false);
          SetLoaded(false);
        } else {
          sound.current.setOnPlaybackStatusUpdate(UpdateStatus);
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
  const GetDurationFormat = (duration) => {
    let time = duration / 1000;
    let minutes = Math.floor(time / 60);
    let timeForSeconds = time - minutes * 60;
    let seconds = Math.floor(timeForSeconds);
    let secondsReadable = seconds > 9 ? seconds : `0${seconds}`;
    return `${minutes}:${secondsReadable}`;
  };
  React.useEffect(() => {
    return LoadAudio()
      ? () => {
        sound.current.unloadAsync()
      }
      : undefined;
  }, [sound]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center", flex: 1 }}>
        <View style={styles.coverContainer}>
          <Image source={{ uri: `${imagem}` }} style={styles.cover}></Image>
        </View>
        <View style={{ marginTop: 32 }}>
          <Text style={[styles.textDark, { fontSize: 20, fontWeight: "500" }]}>{nome}</Text>
        </View>
        <Text style={[styles.text, { fontSize: 16, marginTop: 8 }]}>{album}</Text>
      </View>

      <View style={{ margin: 30 }}>
        <Slider
          style={{ width: '100%' }}
          minimumValue={0}
          maximumValue={100}
          value={Value}
          onSlidingComplete={(data) => SeekUpdate(data)}
          minimumTrackTintColor={'dodgerblue'}
        />
        <Text style={[styles.textDark, { fontSize: 16, fontWeight: "500", alignSelf: 'center' }]}>
          {Playing
            ? GetDurationFormat((Value * Duration) / 100)
            : GetDurationFormat(Duration)}
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 16 }}>
        <TouchableOpacity style={styles.playButtonContainer} onPress={Playing ? () => PauseAudio() : () => PlayAudio()} >
          <Icon
            name={Playing ? 'pause' : 'play'}
            size={50}
            color="#3D425C"
            style={[styles.playButton]}
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
    marginTop: 100,
    width: 250,
    height: 250,
    shadowColor: "#5D3F6A",
    shadowOffset: { height: 15 },
    shadowRadius: 8,
    shadowOpacity: 0.3
  },
  cover: {
    width: 250,
    height: 250,
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
    width: 128,
    height: 128,
    borderRadius: 64,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 32,
    shadowColor: "#5D3F6A",
    shadowRadius: 30,
    shadowOpacity: 0.5
  }
});
