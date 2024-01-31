import React from 'react';
import * as SplashScreen from 'expo-splash-screen'
import { AntDesign } from '@expo/vector-icons';
import { useFonts, Lato_400Regular } from '@expo-google-fonts/lato';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, StatusBar, ScrollView} from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const image = require('./resources/img/bg.jpg')

  let [fontsLoaded] = useFonts({
    Lato_400Regular,
  });

  return (

    <ScrollView style={styles.container}>
      <StatusBar hidden/>
      <ImageBackground source={image} style={styles.img}>
        <View style={styles.coverView}>
          <Text style={styles.textHeader}>Lista de Tarefas - Danki Code</Text>
        </View>
      </ImageBackground>

      <View style={styles.tarefaSingle}>
        <View style={{flex:1, width:'100%', padding:10}}>
          <Text>Minha Tarefa número 1.</Text>
        </View>
        <View style={{alignItems:'flex-end',flex:1, padding:10}}>
          <TouchableOpacity>
            <AntDesign name="minuscircleo" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
     

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: '100%',
    height: 80,
    resizeMode: 'cover',
  },
  coverView: {
    width: '100%',
    height: 80,
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  textHeader: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    marginTop: 30,
    fontFamily: 'Lato_400Regular'
  },
  tarefaSingle: {
    marginTop: 30,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    flexDirection: 'row',
    paddingBottom: 10
  }
});
