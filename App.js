import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from './src/telas/home'
import album from './src/telas/album'
import radio from './src/telas/radio'
import livro from './src/telas/livro'
import frase from './src/telas/frase'
import entrevista from './src/telas/entrevista'
import entrevista2 from './src/telas/entrevista2'
import documentario from './src/telas/documentario'
import social from './src/telas/social'
import biografia from './src/telas/biografia'
import musicas from './src/telas/musicas'
import livro2 from './src/telas/livro2'
import player from './src/telas/player'
import 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'

const Stack = createNativeStackNavigator();
const CustomSidebarMenu = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631563329/Raul%20imagens/RaulIcon_hjazqi.png' }}
            style={styles.sideMenuProfileIcon}
          />
        </TouchableOpacity>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

function Albuns({ navigation }) {
  return (
    <Stack.Navigator >
      <Stack.Screen name="albuns" component={album} options={{
        headerLeft: () => (         
          <Icon
          name='bars' type="font-awesome" onPress={() => navigation.openDrawer()}/>
        ),
        headerRight: () => (
          <TouchableOpacity >
            <Image source={{ uri: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631563329/Raul%20imagens/RaulIcon_hjazqi.png' }} style={{ width: 50, height: 50, alignSelf: 'center' }}></Image>
          </TouchableOpacity>
        ),
        title: ''
      }} />
      <Stack.Screen name="musicas" component={musicas} options={{
        headerRight: () => (
          <TouchableOpacity >
            <Image source={{ uri: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631563329/Raul%20imagens/RaulIcon_hjazqi.png' }} style={{ width: 50, height: 50, alignSelf: 'center' }}></Image>
          </TouchableOpacity>
        ),
        title: ''
      }} />
      <Stack.Screen name="player" component={player} options={{
        headerRight: () => (
          <TouchableOpacity >
            <Image source={{ uri: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631563329/Raul%20imagens/RaulIcon_hjazqi.png' }} style={{ width: 50, height: 50, alignSelf: 'center' }}></Image>
          </TouchableOpacity>
        ),
        title: ''
      }} />
      
    </Stack.Navigator>
  );
}
function Livros({ navigation }) {
  return (
    <Stack.Navigator >
      <Stack.Screen name="livros" component={livro} options={{
        headerLeft: () => (
          <Icon
  name='bars' type="font-awesome" onPress={() => navigation.openDrawer()}/>
        ),
        headerRight: () => (
          <TouchableOpacity >
            <Image source={{ uri: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631563329/Raul%20imagens/RaulIcon_hjazqi.png' }} style={{ width: 50, height: 50, alignSelf: 'center' }}></Image>
          </TouchableOpacity>
        ),
        title: ''
      }} />
      <Stack.Screen name="livro2" component={livro2} options={{
        headerRight: () => (
          <TouchableOpacity>
            <Image source={{ uri: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631563329/Raul%20imagens/RaulIcon_hjazqi.png' }} style={{ width: 50, height: 50, alignSelf: 'center' }}></Image>
          </TouchableOpacity>
        ),
        title: ''
      }} />
    </Stack.Navigator>
  );
}
function Entrevistas({ navigation }) {
  return (
    <Stack.Navigator >
      <Stack.Screen name="entrevistas" component={entrevista} options={{
        headerLeft: () => (
          <Icon
  name='bars' type="font-awesome" onPress={() => navigation.openDrawer()}/>
        ),
        headerRight: () => (
          <TouchableOpacity>
            <Image source={{ uri: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631563329/Raul%20imagens/RaulIcon_hjazqi.png' }} style={{ width: 50, height: 50, alignSelf: 'center' }}></Image>
          </TouchableOpacity>
        ),
        title: ''
      }} />
      <Stack.Screen name="entrevista2" component={entrevista2} options={{
        headerRight: () => (
          <TouchableOpacity >
            <Image source={{ uri: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631563329/Raul%20imagens/RaulIcon_hjazqi.png' }} style={{ width: 50, height: 50, alignSelf: 'center' }}></Image>
          </TouchableOpacity>
        ),
        title: ''
      }} />
    </Stack.Navigator>
  );
}
function Documentario({ navigation }) {
  return (
    <Stack.Navigator >
      <Stack.Screen name="documentario" component={documentario} options={{
        headerLeft: () => (
          <Icon
  name='bars' type="font-awesome" onPress={() => navigation.openDrawer()}/>
        ),
        headerRight: () => (
          <TouchableOpacity>
            <Image source={{ uri: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631563329/Raul%20imagens/RaulIcon_hjazqi.png' }} style={{ width: 50, height: 50, alignSelf: 'center' }}></Image>
          </TouchableOpacity>
        ),
        title: ''
      }} />
    </Stack.Navigator>
  );
}
function Home({ navigation }) {
  return (
    <Stack.Navigator >
      <Stack.Screen name="home" component={home} options={{
        headerLeft: () => (
          <Icon
          name='bars' type="font-awesome" onPress={() => navigation.openDrawer()}/>
        ),
        headerRight: () => (
          <TouchableOpacity>
            <Image source={{ uri: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631563329/Raul%20imagens/RaulIcon_hjazqi.png' }} style={{ width: 50, height: 50, alignSelf: 'center' }}></Image>
          </TouchableOpacity>
        ),
        title: ''
      }} />       
    </Stack.Navigator>
  );
}
function Frases({ navigation }) {
  return (
    <Stack.Navigator >
      <Stack.Screen name="frases" component={frase} options={{
        headerLeft: () => (
          <Icon
          name='bars' type="font-awesome" onPress={() => navigation.openDrawer()}/>
        ),
        headerRight: () => (
          <TouchableOpacity>
            <Image source={{ uri: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631563329/Raul%20imagens/RaulIcon_hjazqi.png' }} style={{ width: 50, height: 50, alignSelf: 'center' }}></Image>
          </TouchableOpacity>
        ),
        title: ''
      }} />
    </Stack.Navigator>
  );
}

function Radio({ navigation }) {
  return (
    <Stack.Navigator >
      <Stack.Screen name="radio" component={radio} options={{
        headerLeft: () => (
          <Icon
          name='bars' type="font-awesome" onPress={() => navigation.openDrawer()}/>
        ),
        headerRight: () => (
          <TouchableOpacity>
            <Image source={{ uri: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631563329/Raul%20imagens/RaulIcon_hjazqi.png' }} style={{ width: 50, height: 50, alignSelf: 'center' }}></Image>
          </TouchableOpacity>
        ),
        title: ''
      }} />
    </Stack.Navigator>
  );
}
function Social({ navigation }) {
  return (
    <Stack.Navigator >
      <Stack.Screen name="social" component={social} options={{
        headerLeft: () => (
          <Icon
          name='bars' type="font-awesome" onPress={() => navigation.openDrawer()}/>
        ),
        headerRight: () => (
          <TouchableOpacity>
            <Image source={{ uri: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631563329/Raul%20imagens/RaulIcon_hjazqi.png' }} style={{ width: 50, height: 50, alignSelf: 'center' }}></Image>
          </TouchableOpacity>
        ),
        title: ''
      }} />
    </Stack.Navigator>
  );
}
function Biografia({ navigation }) {
  return (
    <Stack.Navigator >
      <Stack.Screen name="biografia" component={biografia} options={{
        headerLeft: () => (
          <Icon
  name='bars' type="font-awesome" onPress={() => navigation.openDrawer()}/>
        ),
        headerRight: () => (
          <TouchableOpacity>
            <Image source={{ uri: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631563329/Raul%20imagens/RaulIcon_hjazqi.png' }} style={{ width: 50, height: 50, alignSelf: 'center' }}></Image>
          </TouchableOpacity>
        ),
        title: ''
      }} /> 
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="splash" screenOptions={{ headerShown: false }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>

        <Drawer.Screen name="Home" component={Home} options={{
          drawerActiveTintColor: 'black', drawerLabel: 'Tela inicial', drawerIcon: () => (
<Icon type="material-community" name="home" />
          )
        }} />
        <Drawer.Screen name="Álbuns" component={Albuns} options={{
          drawerActiveTintColor: 'black', drawerIcon: () => (       
            <Icon
  name='albums' type="ionicon" />
          )
        }} />
        <Drawer.Screen name="Rádio" component={Radio} options={{
          drawerActiveTintColor: 'black', drawerIcon: () => (        
            <Icon
  name='radio' />
          )
        }} />
        <Drawer.Screen name="Livros" component={Livros} options={{
          drawerActiveTintColor: 'black', drawerIcon: () => (        
            <Icon
  name='bookshelf' type="material-community" />
          )
        }} />
        <Drawer.Screen name="Frases" component={Frases} options={{
          drawerActiveTintColor: 'black', drawerIcon: () => (          
            <Icon
  name='text'  type="entypo"/>
          )
        }} />
        <Drawer.Screen name="Entrevistas" component={Entrevistas} options={{
          drawerActiveTintColor: 'black', drawerIcon: () => (         
            <Icon
  name='microphone-alt' type="font-awesome-5"/>
          )
        }} />
        <Drawer.Screen name="Documentário" component={Documentario} options={{
          drawerActiveTintColor: 'black', drawerIcon: () => (    
            <Icon
  name='film' type="feather"/>
  
          )
        }} 
        />
        <Drawer.Screen name="Biografia" component={Biografia} options={{
          drawerActiveTintColor: 'black', drawerIcon: () => (        
            <Icon
  name='text-document'  type="entypo"/>
          )
        }} />
        <Drawer.Screen name="Social" component={Social} options={{
          drawerActiveTintColor: 'black', drawerIcon: () => (  
            <Icon
  name='share-social-sharp' type="ionicon"/>
          )
        }} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    alignSelf: 'center',
    paddingTop: 20
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});