import React, { useCallback, useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { CommonActions } from '@react-navigation/native';
export default function App({ navigation }) {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync(Entypo.font);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    setTimeout(()=> {
      navigation.dispatch(CommonActions.navigate ({
        name: 'Home'
      }))
    }, 2000)
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);
  if (!appIsReady) {
    return null;
  }
  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}
      onLayout={onLayoutRootView}>
       <Image
        style={{ width:200, height:200 }}
        source={{
          uri:'https://i.makeagif.com/media/1-21-2017/LaiT3C.gif'
        }}
      />
    </View>
  );
}