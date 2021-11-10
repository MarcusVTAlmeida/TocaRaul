import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Card } from 'react-native-elements'
import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import Carousel from 'react-native-snap-carousel';
import albuns from '../componentes/albuns'
import livros from '../componentes/livros'
import entrevistas from '../componentes/entrevistas'
export default class UserProfileView extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeIndex:0,
      carouselItems: [
      {
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1575692669/Imagem/Raul_Seixas_-_Raulzito_e_Os_Panteras_szvebe.gif',
      },
      {
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1576090373/1971%20-%20Sociedade%20da%20Gr%C3%A3%20Ordem%20Kavernista%20apresenta%20Sess%C3%A3o%20da%20Dez/Raul_Seixas_-_Sess10_pvl0iz.gif',
      },
      {
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1576150862/1973%20-%20Os%2024%20maiores%20sucessos%20da%20era%20do%20rock/Os_24_Maiores_Sucessos_da_Era_do_Rock_olfuht.jpg',
      },
      {
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1576090572/1973%20-%20Krig-Ha.Bandolo/Raul_Seixas_-_Krigha_bandolo_ghwwlw.gif',
      },
      {
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1576090672/1974%20-%20Gita/Raul_Seixas_-_Gita_mnegdi.gif',
      },
    ]
  }
}
_renderAlbum({item}){
  return (
    <View>
      <Image style={{height: 250, width: 250}}
      source={{uri:`${item.imagem}` }}></Image>
    </View>
  )
}
_renderLivros({item}){
  return (
    <View>
      <Image style={{height: 250, width: 250}}
      source={{uri:`${item.imagem}` }}></Image>
    </View>
  )
}
_renderEntrevistas({item,index}){
  return (
    <View>
      <Image style={{height: 250, width: 250}}
      source={{uri:`${item.imagem}` }}></Image>
    </View>
  )
}
  render() {
    return (     
      <View> 
       <ScrollView>   
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: 'https://pbs.twimg.com/profile_images/1276569885171159042/rnkf-eUo.jpg'}}/>
                <Text style={styles.name}>Raul Seixas</Text>
                <Text style={styles.userInfo}>1945 - 1989</Text>
            </View>
          </View>

      <View style={styles.body}>
      <TouchableOpacity onPress={() => {const { navigate } = this.props.navigation; navigate('Biografia')}}>
      <Card> 
      <Text style={{marginBottom: 10}}>
            Raul Santos Seixas foi um cantor, compositor, produtor e multi-instrumentista brasileiro, frequentemente considerado um dos pioneiros do rock brasileiro. Também foi produtor musical da CBS, durante sua estada na cidade do Rio de Janeiro e, por vezes, é chamado de Pai do Rock Brasileiro e Maluco Beleza.
      </Text>
      </Card>
      </TouchableOpacity >
      <TouchableOpacity onPress={() => {const { navigate } = this.props.navigation; navigate('Álbuns')}}>
      <Card> 
      <Text style={{ fontSize:25, alignSelf: 'center'}}>Álbuns</Text>
      <Carousel
         layout={'stack'}
         loop
         autoplay
         autoplayInterval={10000}
         ref={ref => this.carousel = ref}
         data={albuns}
         sliderWidth={400}
         itemWidth={300}
         renderItem={this._renderAlbum}
         onSnapToItem = { index => this.setState({activeIndex:index}) } />
      </Card>
      </TouchableOpacity >
      <TouchableOpacity onPress={() => {const { navigate } = this.props.navigation; navigate('Livros')}}>
      <Card> 
      <Text style={{ fontSize:25, alignSelf: 'center'}}>Livros</Text>
      <Carousel
        layout={'stack'}
        loop
        autoplay
        autoplayInterval={10000}
        ref={ref => this.carousel = ref}
        data={livros}
        sliderWidth={400}
        itemWidth={300}
        renderItem={this._renderLivros}
        onSnapToItem = { index => this.setState({activeIndex:index}) } />
      </Card>
      </TouchableOpacity >
      <TouchableOpacity onPress={() => {const { navigate } = this.props.navigation; navigate('Entrevistas')}}>
      <Card> 
      <Text style={{ fontSize:25, alignSelf: 'center'}}>Entrevistas</Text>
      <Carousel
        layout={'stack'}
        loop
        autoplay
        autoplayInterval={10000}
        ref={ref => this.carousel = ref}
        data={entrevistas}
        sliderWidth={400}
        itemWidth={300}
        renderItem={this._renderEntrevistas}
        onSnapToItem = { index => this.setState({activeIndex:index}) } />
      </Card>
      </TouchableOpacity >
      <Card>
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
      <TouchableOpacity  onPress={() => {const { navigate } = this.props.navigation; navigate('Rádio')}}      
        style={styles.roundButton1}>
              <Entypo name="radio" size={34} color="black" />
        <Text>Rádio</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => {const { navigate } = this.props.navigation; navigate('Frases')}}      
        style={styles.roundButton1}>
              <Entypo name="text" size={34} color="black" />
        <Text>Frases</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => {const { navigate } = this.props.navigation; navigate('Documentário')}}      
        style={styles.roundButton1}>
         <Feather name="film" size={34} color="black" />
        <Text>Documentário</Text>
      </TouchableOpacity>
    </View>
</Card>

      </View>
      </ScrollView>
      </View>    
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#DCDCDC",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#778899",
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:5
  },
  iconContent:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:5,
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
  },
  info:{
    fontSize:18,
    marginTop:20,
    color: "#FFFFFF",
  },
  roundButton1: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:105,
    height:105,
    backgroundColor:'#fff',
    borderRadius:100,
    elevation: 20,
  },
  
});
