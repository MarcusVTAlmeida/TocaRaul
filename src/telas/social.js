import React from 'react';
import { Icon } from 'react-native-elements'
import { SafeAreaView, StyleSheet, ScrollView, Text, View } from 'react-native';
import * as Linking from 'expo-linking';
import { SocialIcon } from 'react-native-elements';
import Admob from '../../admob'

const App = () => {
  function linkingYoutube() {
    Linking.openURL('https://www.youtube.com/channel/UCF_ZemMVw8G6Kko3IeNtDCw');
  };
  function linkingFacebook() {
    Linking.openURL('https://www.facebook.com/raulseixasnaweb');
  };
  function linkingInstagram() {
    Linking.openURL('https://www.instagram.com/raulseixasnaweb');
  };
  function linkingSpotify() {
    Linking.openURL('https://open.spotify.com/artist/7jrRQZg4FZq6dwpi3baKcu?si=zY9OU42kR9CrpJICH6gNag&dl_branch=1');
  };
  function linkingTwitter() {
    Linking.openURL('https://twitter.com/RaulSeixasnaweb');
  };
  function linkingEmail() {
    Linking.openURL('mailto:raulseixasweb@gmail.com');
  };
  function linkingAmazonMusic() {
    Linking.openURL('https://music.amazon.com.br/artists/B000T17LR0/raul-seixas?tab=CATALOG&ref=dm_wcp_artist_link_pr_s%3Fref_%3Ddmm_sl_amp_w27_raulseixasniver');
  };
  function linkingWeb() {
    Linking.openURL('https://raulsseixas.wordpress.com/');
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={{ alignItems: 'center', alignSelf: 'center' }}>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading} >
            Redes sociais oficiais
          </Text>
          <Text style={styles.textStyle}>TOCA RAUL</Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
          </View>
          <View style={{ width: '100%', flexDirection: 'column' }}>
            <SocialIcon
              title="Siga no Youtube"
              button
              iconSize={40}
              type="youtube"
              onPress={() => {
                linkingYoutube()
              }}
            />
          </View>
          <View style={{ width: '100%', flexDirection: 'column' }}>
            <SocialIcon
              title="Siga no Facebook"
              button
              iconSize={40}
              type="facebook"
              onPress={() => {
                linkingFacebook()
              }}
            />
          </View>
          <View style={{ width: '100%', flexDirection: 'column' }}>
            <SocialIcon
              title="Siga no Instagram"
              button
              iconSize={40}
              type="instagram"
              onPress={() => {
                linkingInstagram()
              }}
            />
          </View>
          <View style={{ width: '100%', flexDirection: 'column' }}>
            <SocialIcon
              title="Siga no Twitter"
              button
              iconSize={40}
              type="twitter"
              onPress={() => {
                linkingTwitter()
              }}
            />
          </View>
          <View style={{ width: '100%', flexDirection: 'row' }}>
            <Icon
              name='spotify'
              type='entypo'
              reverse
              raised
              color='green'
              size={37}
              onPress={() => linkingSpotify()} />
            <Icon
              name='email'
              type='zsocial'
              reverse
              raised
              color='#A9A9A9'
              size={37}
              onPress={() => linkingEmail()} />
            <Icon
              name='social-amazon'
              type='foundation'
              reverse
              raised
              color='#363636'
              size={37}
              onPress={() => linkingAmazonMusic()} />
            <Icon
              name='web'
              type='material-community'
              raised
              color='black'
              size={37}
              onPress={() => linkingWeb()} />
          </View>
        </View>
      </ScrollView>
      <Admob />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  },
  textStyle: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
    marginVertical: 16,
  },
});

export default App;