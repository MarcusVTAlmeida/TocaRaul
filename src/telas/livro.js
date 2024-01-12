import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import livros from '../componentes/livros'
import Admob from '../../admob'

const App = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => { navigation.navigate('livro2', { nome: item.nome, imagem: item.imagem, resumo: item.resumo }); }} style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}>
        <View style={{ alignItems: 'center', flex: 1 }}>
          <Image source={{ uri: `${item.imagem}` }} style={{ width: 250, height: 350 }}></Image>
          <Text style={styles.title}>{item.nome}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center', alignSelf: 'center' }}>
      </View>
      <FlatList
        data={livros}
        renderItem={renderItem}
      />
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
  },
  title: {
    paddingTop: 10,
    fontSize: 20,
    color: "black"
  },
});

export default App;