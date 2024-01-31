
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import {AppLoading} from 'expo';
import { AntDesign } from '@expo/vector-icons';
import { useFonts, Lato_400Regular } from '@expo-google-fonts/lato';

export default function App() {

  const image = require('./resources/img/bg.jpg')

  let [fontsLoaded] = useFonts({
    Lato_400Regular,
  });

  if(!fontsLoaded){
    return <AppLoading/>;
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.img}>
        <View style={styles.coverView}>
          <Text style={styles.textHeader}>Lista de Tarefas - Danki Code</Text>
        </View>
      </ImageBackground>
      <View>
      <AntDesign name="minuscircleo" size={24} color="black" />
      </View>
    </View>
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
    textAlign:'center',
    color:'#FFF',
    fontSize:20,
    marginTop:40,
    fontFamily:'Lato_400Regular'
  }
});
