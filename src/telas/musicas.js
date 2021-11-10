import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const App = ({navigation, route}) => {
    const {  musicas, imagem, album } = route.params;
  
  const renderItem = ({ item }) => ( 
    <View style={styles.item}>
      <Ionicons name="musical-note" size={40} color="black" />
<TouchableOpacity  onPress={() => {
          navigation.navigate('player', {
           musica: item.musica,
           nome: item.nome,
           imagem: imagem,
           album: album
          });
        }} style={{padding: 10, alignItems:'center', flexDirection:'row'}}>      
    <Text style={styles.title}>{item.nome}</Text>  
    </TouchableOpacity> 
    <Ionicons name="musical-notes" size={40} color="black" />
  </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={musicas}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  item: {
    backgroundColor: '#d3d3d3',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection:'row', 
    justifyContent:'space-evenly',
    alignItems:'center',
    alignContent: 'center'
  },
  title: {
    fontSize: 18,
    width: 250
  },
});

export default App;