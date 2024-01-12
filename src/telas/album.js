import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import albuns from '../componentes/albuns'

const App = ({ navigation }) => {

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => { navigation.navigate('musicas', { musicas: item.musicas, imagem: item.imagem, album: item.album, resumo: item.resumo }) }} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ alignItems: 'center', flex: 1 }}>
          <Image source={{ uri: `${item.imagem}` }} style={{ width: 300, height: 300 }}></Image>
          <Text style={styles.title}>{item.album}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={albuns}
        renderItem={renderItem}
      />
      <View style={{ alignItems: 'center', alignSelf: 'center', bottom: 0 }}>
      </View>
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
  },
  title: {
    paddingTop: 10,
    fontSize: 20,
    color: "#000000",
  },
});

export default App;