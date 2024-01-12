import React, { Component, useState, useEffect } from 'react';
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
import {
  Dimensions,
  Text,
  View,
  Image,
  Share,
  TouchableOpacity
} from 'react-native';
import frases from '../componentes/frases'
import Admob from '../../admob'

export default function App() {
  const [fraseEscolhida, SetfraseEscolhida] = React.useState(frases[Math.floor(Math.random() * 149)]);
  const botaoPressionado = () => {
    var numeroAleatorio = Math.random();
    numeroAleatorio = Math.floor(numeroAleatorio * 149);
    SetfraseEscolhida(frases[numeroAleatorio])
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: fraseEscolhida
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={{ backgroundColor: 'black', flex: 1 }}>
      <Image source={{ uri: 'https://res.cloudinary.com/dib0twra5/image/upload/v1696303849/Raul%20imagens/vnnosm7exzyxjfcrhoyn.jpg' }} style={{ width: SCREEN_WIDTH, height: 350, alignSelf: 'center' }}></Image>
      <Text style={{ color: 'white', textAlign: 'justify', padding: 10, alignSelf: 'center', fontSize: 20, fontFamily: 'LangarRegular' }}>{fraseEscolhida} </Text>
      <View style={{ flexDirection: 'row', alignSelf: 'center', position: 'absolute', bottom: 100, justifyContent: 'center' }}>
        <TouchableOpacity style={{ backgroundColor: "darkred", padding: 10, borderWidth: 1, borderRadius: 50 }} onPress={botaoPressionado}>
          <Text style={{ color: 'white', fontSize: 24 }}>Próximo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: "darkblue", padding: 10, marginLeft: 50, borderWidth: 1, borderRadius: 50 }} onPress={onShare}>
          <Text style={{ color: 'white', fontSize: 24 }}>Compartilhar</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        position: "absolute",
        bottom: 0
      }}>
        <Admob />
      </View>

    </View>
  );
};