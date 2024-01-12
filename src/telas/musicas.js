import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements'
import Admob from '../../admob'

const App = ({ navigation, route }) => {
  const { musicas, imagem, album, resumo } = route.params;

  const renderItem = ({ item }) => (
    <View style={styles.item}>

      <Icon
        name='musical-note' type="ionicon" />
      <TouchableOpacity onPress={() => {
        navigation.navigate('player', {
          musica: item.musica,
          nome: item.nome,
          imagem: imagem,
          album: album,
          resumo: resumo
        });
      }} style={{ padding: 10, alignItems: 'center', flexDirection: 'row' }}>
        <Text style={styles.title}>{item.nome}</Text>
      </TouchableOpacity>

      <Icon
        name='musical-notes' type="ionicon" />
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: 'center', alignSelf: 'center', flex: 1 }}>
        </View>
        <View style={{ alignItems: 'center', padding: 20 }}>
          <Text style={{ fontSize: 30, color: 'white' }}>Músicas</Text>
        </View>
        <FlatList
          data={musicas}
          renderItem={renderItem}
        />
        {resumo != `` ? <View>
          <View style={{ alignItems: 'center', padding: 20 }}>
            <Text style={{ fontSize: 30, color: 'white' }}>Resumo</Text>
          </View>
          <View style={styles.item}>
            <Text style={{ fontSize: 22, color: 'black' }}>{resumo}</Text>
          </View></View> : null}
        <View style={{ alignItems: 'center', alignSelf: 'center', flex: 1, bottom: 0 }}>
        </View>
      </ScrollView>
      <Admob />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  item: {
    backgroundColor: '#d3d3d3',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignContent: 'center'
  },
  title: {
    fontSize: 18,
    width: 250,
    color: 'black'
  },
});

export default App;