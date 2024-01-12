import React, { Component, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Card, Icon } from 'react-native-elements'
import Carousel from 'react-native-snap-carousel';
import albuns from '../componentes/albuns'
import livros from '../componentes/livros'
import entrevistas from '../componentes/entrevistas'
import Admob from '../../admob'

export default class App extends Component {
  _renderAlbum({ item }) {
    return (
      <View>
        <Image style={{ height: 250, width: 250 }}
          source={{ uri: `${item.imagem}` }}></Image>
      </View>

    )
  }
  _renderLivros({ item }) {
    return (
      <View>
        <Image style={{ height: 250, width: 250 }}
          source={{ uri: `${item.imagem}` }}></Image>
      </View>
    )
  }
  _renderEntrevistas({ item, index }) {
    return (
      <View>
        <Image style={{ height: 250, width: 250 }}
          source={{ uri: `${item.imagem}` }}></Image>

      </View>
    )
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <Image style={styles.avatar}
                source={{ uri: 'https://pbs.twimg.com/profile_images/1276569885171159042/rnkf-eUo.jpg' }} />
              <Text style={styles.name}>Raul Seixas</Text>
              <Text style={styles.userInfo}>1945 - 1989</Text>
            </View>
          </View>
          <View style={styles.body}>
            <TouchableOpacity onPress={() => { const { navigate } = this.props.navigation; navigate('Biografia') }}>
              <Card>
                <Text style={{ marginBottom: 10, color: "#000000" }}>
                  Raul Santos Seixas foi um cantor, compositor, produtor e multi-instrumentista brasileiro, frequentemente considerado um dos pioneiros do rock brasileiro. Também foi produtor musical da CBS, durante sua estada na cidade do Rio de Janeiro e, por vezes, é chamado de Pai do Rock Brasileiro e Maluco Beleza.
                </Text>
              </Card>
            </TouchableOpacity >
            <TouchableOpacity onPress={() => { const { navigate } = this.props.navigation; navigate('Álbuns') }}>
              <Card>
                <Text style={{ fontSize: 25, alignSelf: 'center', color: "#000000", }}>Álbuns</Text>
                <Carousel layout={'stack'}
                  loop
                  autoplay
                  autoplayInterval={10000}
                  ref={ref => this.carousel = ref}
                  data={albuns}
                  sliderWidth={400}
                  itemWidth={300}
                  renderItem={this._renderAlbum}
                  onSnapToItem={index => this.setState({ activeIndex: index })} />
              </Card>
            </TouchableOpacity >
            <TouchableOpacity onPress={() => { const { navigate } = this.props.navigation; navigate('Livros') }}>
              <Card>
                <Text style={{ fontSize: 25, alignSelf: 'center', color: "#000000", }}>Livros</Text>
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
                  onSnapToItem={index => this.setState({ activeIndex: index })} />
              </Card>
            </TouchableOpacity >
            <TouchableOpacity onPress={() => { const { navigate } = this.props.navigation; navigate('Entrevistas') }}>
              <Card>
                <Text style={{ fontSize: 25, alignSelf: 'center', color: "#000000", }}>Entrevistas</Text>
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
                  onSnapToItem={index => this.setState({ activeIndex: index })} />
              </Card>
            </TouchableOpacity >
            <Card>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableOpacity onPress={() => { const { navigate } = this.props.navigation; navigate('Rádio') }}
                  style={styles.roundButton1}>
                  <Icon
                    name='radio' size={34} />
                  <Text style={{ color: 'black' }}>Rádio</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { const { navigate } = this.props.navigation; navigate('Frases') }}
                  style={styles.roundButton1}>
                  <Icon
                    name='text' type="entypo" size={34} />
                  <Text style={{ color: 'black' }}>Frases</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { const { navigate } = this.props.navigation; navigate('Documentário') }}
                  style={styles.roundButton1}>
                  <Icon
                    name='film' type="feather" size={34} />
                  <Text style={{ color: 'black' }}>Documentário</Text>
                </TouchableOpacity>
              </View>
            </Card>
          </View>
        </ScrollView>
        <View style={{ bottom: 0 }}>
          <Admob />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#DCDCDC",
    flex: 1
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: '600',
  },
  userInfo: {
    fontSize: 16,
    color: "#778899",
    fontWeight: '600',
  },
  body: {
    backgroundColor: "#778899",
    position: 'relative',
    flex: 1
  },
  item: {
    flexDirection: 'row',
  },
  infoContent: {
    alignItems: 'flex-start',
    paddingLeft: 5
  },
  iconContent: {
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: "#FFFFFF",
  },
  roundButton1: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 100,
    elevation: 20,
  },

});
