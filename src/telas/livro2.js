import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const App = ({route}) => {
    const { nome, imagem, resumo } = route.params;
  return (
    <ScrollView style={styles.container}>      
      <Image source={{uri:`${imagem}`}} style={{width: 200, height: 300, alignSelf:'center', paddingLeft: 20, paddingRight:20, marginTop:50}}></Image>
    <Text style={{alignSelf:'center', paddingTop:20, fontSize:24,textAlign:'justify', color:'white'}}>{nome}</Text>
    <Text style={styles.title}>{resumo}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  backgroundColor:'black'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    paddingTop:20,
    fontSize: 16,
    paddingLeft: 10,
    paddingRight:10,
    textAlign:'justify',
    color:'white',
    marginBottom:20
  },
});

export default App;