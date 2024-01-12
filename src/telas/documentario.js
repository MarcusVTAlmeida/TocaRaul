import React, { useState } from "react";
import { View, Dimensions, Text, TouchableOpacity } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import * as Linking from 'expo-linking';


const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function App() {

  const [playing, setPlaying] = useState(false);
  function linkingYoutube() {
    Linking.openURL('https://www.youtube.com/watch?v=LqSGP17RXOs');
  };
  return (
    <View style={{ backgroundColor: 'black', flex: 1 }}>
      <View style={{ alignItems: 'center', alignSelf: 'center' }}>
      </View>
      <YoutubePlayer
        height={250}
        width={SCREEN_WIDTH}
        play={playing}
        videoId={"l2an4yYXL1w"} />
      <View style={{ color: 'white', paddingLeft: 15, paddingRight: 15 }}>
        <Text style={{ color: 'white', alignSelf: 'center', fontSize: 24 }}>Raul - O Início, o Fim e o Meio</Text>
        <Text style={{ color: 'white', textAlign: 'justify', paddingTop: 20 }}>Documentário sobre vida e obra do maior ícone do rock brasileiro, desvendando suas diversas facetas, suas parcerias com Paulo Coelho, seus casamentos e seus fãs, que ele continua a mobilizar vinte anos depois de sua morte.</Text>
        <TouchableOpacity style={{ borderRadius: 10, borderColor: 'white', borderWidth: 1, marginTop: '15%' }} onPress={() => linkingYoutube()}>
          <Text style={{ color: 'white', alignSelf: 'center', fontSize: 24 }}>ACESSAR FILME COMPLETO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}