import React from 'react';
import { Image, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import {  DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
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
import musicas from'./src/telas/musicas'
import livro2 from './src/telas/livro2'
import player from './src/telas/player'
// setTimeout(()=> {
//   async function loadAd(){
//     await AdMobInterstitial.setAdUnitID('ca-app-pub-4654651969138945/3813711877');
//      InterstitalAd();
//   }
//      loadAd(); 
//    [];
// }, 25000) 

//  async function InterstitalAd(){   
//   await AdMobInterstitial.requestAdAsync()
//   await AdMobInterstitial.showAdAsync()
//  }		

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

function Albuns({navigation}) {
  return (
    <Stack.Navigator >
         <Stack.Screen name="albuns" component={album}   options={{
            headerLeft: () => (
              <FontAwesome name="bars" size={24} color="black"  onPress={() => navigation.openDrawer()} />            
          ),
          headerRight: () => (            
            <TouchableOpacity >
            <Image source={{uri:'https://res.cloudinary.com/dib0twra5/image/upload/v1631563329/Raul%20imagens/RaulIcon_hjazqi.png'}} style={{width: 50, height:50, alignSelf:'center'}}></Image> 
            </TouchableOpacity>
            ),
          title:''          
        }}/>
         <Stack.Screen name="musicas" component={musicas}  options={{
           headerRight: () => (            
            <TouchableOpacity >
            <Image source={{uri:'https://res.cloudinary.com/dib0twra5/image/upload/v1631563329/Raul%20imagens/RaulIcon_hjazqi.png'}} style={{width: 50, height:50, alignSelf:'center'}}></Image> 
            </TouchableOpacity>
            ),
          title:''          
        }}/>
         <Stack.Screen name="player" component={player} options={{
          headerRight: () => (            
            <TouchableOpacity >
            <Image source={{uri:'https://res.cloudinary.com/dib0twra5/image/upload/v1631563329/Raul%20imagens/RaulIcon_hjazqi.png'}} style={{width: 50, height:50, alignSelf:'center'}}></Image> 
            </TouchableOpacity>
            ),
          title:''          
        }}/>
    </Stack.Navigator>
  );
}
function Livros({navigation}) {
  return (
    <Stack.Navigator >
         <Stack.Screen name="livros" component={livro}  options={{
            headerLeft: () => (
              <FontAwesome name="bars" size={24} color="black"  onPress={() => navigation.openDrawer()} />            
          ),
          headerRight: () => (            
            <TouchableOpacity >
            <Image source={{uri:'https://res.cloudinary.com/dib0twra5/image/upload/v1631563329/Raul%20imagens/RaulIcon_hjazqi.png'}} style={{width: 50, height:50, alignSelf:'center'}}></Image> 
            </TouchableOpacity>
            ),
          title:''          
        }}/>
         <Stack.Screen name="livro2" component={livro2} options={{
          headerRight: () => (            
            <TouchableOpacity>
            <Image source={{uri:'https://res.cloudinary.com/dib0twra5/image/upload/v1631563329/Raul%20imagens/RaulIcon_hjazqi.png'}} style={{width: 50, height:50, alignSelf:'center'}}></Image> 
            </TouchableOpacity>
            ),
          title:''          
        }}/>
    </Stack.Navigator>
  );
}
function Entrevistas({navigation}) {
  return (
    <Stack.Navigator >
         <Stack.Screen name="entrevistas" component={entrevista}  options={{
            headerLeft: () => (
              <FontAwesome name="bars" size={24} color="black"  onPress={() => navigation.openDrawer()} />            
          ),
          headerRight: () => (            
            <TouchableOpacity>
            <Image source={{uri:'https://res.cloudinary.com/dib0twra5/image/upload/v1631563329/Raul%20imagens/RaulIcon_hjazqi.png'}} style={{width: 50, height:50, alignSelf:'center'}}></Image> 
            </TouchableOpacity>
            ),
          title:''          
        }}/>
         <Stack.Screen name="entrevista2" component={entrevista2} options={{
          headerRight: () => (            
            <TouchableOpacity >
            <Image source={{uri:'https://res.cloudinary.com/dib0twra5/image/upload/v1631563329/Raul%20imagens/RaulIcon_hjazqi.png'}} style={{width: 50, height:50, alignSelf:'center'}}></Image> 
            </TouchableOpacity>
            ),
          title:''          
        }}/>
    </Stack.Navigator>
  );
}
function Documentario({navigation}) {
  return (
    <Stack.Navigator >
         <Stack.Screen name="documentario" component={documentario}  options={{
            headerLeft: () => (
              <FontAwesome name="bars" size={24} color="black"  onPress={() => navigation.openDrawer()} />            
          ),
          headerRight: () => (            
            <TouchableOpacity>
            <Image source={{uri:'https://res.cloudinary.com/dib0twra5/image/upload/v1631563329/Raul%20imagens/RaulIcon_hjazqi.png'}} style={{width: 50, height:50, alignSelf:'center'}}></Image> 
            </TouchableOpacity>
            ),
          title:''          
        }}/>
    </Stack.Navigator>
  );
}
function Home({navigation}) {
  return (
    <Stack.Navigator >
         <Stack.Screen name="home" component={home}  options={{
            headerLeft: () => (
              <FontAwesome name="bars" size={24} color="black"  onPress={() => navigation.openDrawer()} />            
          ),
          headerRight: () => (            
            <TouchableOpacity>
            <Image source={{uri:'https://res.cloudinary.com/dib0twra5/image/upload/v1631563329/Raul%20imagens/RaulIcon_hjazqi.png'}} style={{width: 50, height:50, alignSelf:'center'}}></Image> 
            </TouchableOpacity>
            ),
          title:''          
        }}/>
    </Stack.Navigator>
  );
}
function Frases({navigation}) {
  return (
    <Stack.Navigator >
         <Stack.Screen name="frases" component={frase}  options={{
            headerLeft: () => (
              <FontAwesome name="bars" size={24} color="black"  onPress={() => navigation.openDrawer()} />            
          ),
          headerRight: () => (            
            <TouchableOpacity>
            <Image source={{uri:'https://res.cloudinary.com/dib0twra5/image/upload/v1631563329/Raul%20imagens/RaulIcon_hjazqi.png'}} style={{width: 50, height:50, alignSelf:'center'}}></Image> 
            </TouchableOpacity>
            ),
          title:''          
        }}/>
    </Stack.Navigator>
  );
}

function Radio({navigation}) {
  return (
    <Stack.Navigator >
         <Stack.Screen name="radio" component={radio}  options={{
            headerLeft: () => (
              <FontAwesome name="bars" size={24} color="black"  onPress={() => navigation.openDrawer()} />            
          ),
          headerRight: () => (            
            <TouchableOpacity>
            <Image source={{uri:'https://res.cloudinary.com/dib0twra5/image/upload/v1631563329/Raul%20imagens/RaulIcon_hjazqi.png'}} style={{width: 50, height:50, alignSelf:'center'}}></Image> 
            </TouchableOpacity>
            ),
          title:''          
        }}/>
    </Stack.Navigator>
  );
}
function Social({navigation}) {
  return (
    <Stack.Navigator >
         <Stack.Screen name="social" component={social}  options={{
            headerLeft: () => (
              <FontAwesome name="bars" size={24} color="black"  onPress={() => navigation.openDrawer()} />            
          ),
          headerRight: () => (            
            <TouchableOpacity>
            <Image source={{uri:'https://res.cloudinary.com/dib0twra5/image/upload/v1631563329/Raul%20imagens/RaulIcon_hjazqi.png'}} style={{width: 50, height:50, alignSelf:'center'}}></Image> 
            </TouchableOpacity>
            ),
          title:''          
        }}/>
    </Stack.Navigator>
  );
}
function Biografia({navigation}) {
  return (
    <Stack.Navigator >
         <Stack.Screen name="biografia" component={biografia}  options={{
            headerLeft: () => (
              <FontAwesome name="bars" size={24} color="black"  onPress={() => navigation.openDrawer()} />            
          ),
          headerRight: () => (            
            <TouchableOpacity>
            <Image source={{uri:'https://res.cloudinary.com/dib0twra5/image/upload/v1631563329/Raul%20imagens/RaulIcon_hjazqi.png'}} style={{width: 50, height:50, alignSelf:'center'}}></Image> 
            </TouchableOpacity>
            ),
          title:''          
        }}/>
    </Stack.Navigator>
  );
}
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="splash" screenOptions={{headerShown:false}}      
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
      
      <Drawer.Screen name="Home" component={Home}  options={{ drawerActiveTintColor: 'black', drawerLabel: 'Tela inicial',  drawerIcon: () => (       
      <FontAwesome name="home" size={34} color="black" />
    )}}/>
      <Drawer.Screen name="Álbuns" component={Albuns} options={{ drawerActiveTintColor: 'black', drawerIcon: () => (
     <Ionicons name="albums" size={34} color="black" />
    )}}/>
        <Drawer.Screen name="Rádio" component={Radio} options={{ drawerActiveTintColor: 'black', drawerIcon: () => (
      <Entypo name="radio" size={34} color="black" />
    )}}/>
        <Drawer.Screen name="Livros" component={Livros} options={{ drawerActiveTintColor: 'black', drawerIcon: () => (
     <MaterialCommunityIcons name="bookshelf" size={34} color="black" />
    )}}/>
        <Drawer.Screen name="Frases" component={Frases} options={{ drawerActiveTintColor: 'black', drawerIcon: () => (
    <Entypo name="text" size={34} color="black" />
    )}}/>
        <Drawer.Screen name="Entrevistas" component={Entrevistas} options={{ drawerActiveTintColor: 'black', drawerIcon: () => (
      <FontAwesome5 name="microphone-alt" size={34} color="black" />
    )}}/>
        <Drawer.Screen name="Documentário" component={Documentario}  options={{ drawerActiveTintColor: 'black', drawerIcon: () => (
      <Feather name="film" size={34} color="black" />
    )}}/>
        <Drawer.Screen name="Biografia" component={Biografia} options={{ drawerActiveTintColor: 'black', drawerIcon: () => (
     <Entypo name="text-document" size={34} color="black" />
    )}}/>
        <Drawer.Screen name="Social" component={Social} options={{ drawerActiveTintColor: 'black', drawerIcon: () => (
     <Foundation name="social-500px" size={34} color="black" />
    )}}/>
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
    paddingTop:20
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