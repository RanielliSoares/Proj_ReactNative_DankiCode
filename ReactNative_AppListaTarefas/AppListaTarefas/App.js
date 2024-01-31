import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {

  const image = require('./resources/img/bg.jpg')

  return (
    <View style={styles.container}>

      <ImageBackground source={image} style={styles.img}>
        <View style={styles.coverView}>
          <Text style={styles.textHeader}>Lista de Tarefas - Danki Code</Text>
        </View>
      </ImageBackground>

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
    marginTop:20
  }
});
