import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, StatusBar, ScrollView } from 'react-native';

export default function App() {

  const image = require('./resources/img/bg.jpg')
  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      tarefa: 'Estudar JS'
    },
    {
      id: 2,
      tarefa: 'Estudar ReactNative'
    },
    {
      id: 3,
      tarefa: 'Criar App Orçamentos'
    },
    {
      id: 4,
      tarefa: 'Lavar a roupa'
    },
    {
      id: 5,
      tarefa: 'Fazer a janta'
    },
    {
      id: 6,
      tarefa: 'Dormir'
    },
    {
      id: 7,
      tarefa: 'Estudar a música'
    },
    {
      id: 8,
      tarefa: 'Dar aulas de música'
    },
  ])

  function deletarTarefa(id) {
    alert('Tarefa com ID ' + id + ' foi deletad')
    let newTarefa = tarefas.filter((val)=>{
      return val.id != id;
    })
    setTarefas(newTarefa)
  }

  return (

    <View style={styles.container}>
      <StatusBar hidden />
      <ImageBackground source={image} style={styles.img}>
        <View style={styles.coverView}>
          <Text style={styles.textHeader}>Lista de Tarefas - Danki Code</Text>
        </View>
      </ImageBackground>
      <ScrollView>
        {
          tarefas.map((val) => {
            return (
              <View style={styles.tarefaSingle}>
                <View style={{ flex: 1, width: '100%', padding: 10 }}>
                  <Text>{val.tarefa}</Text>
                </View>
                <View style={{ alignItems: 'flex-end', flex: 1, padding: 10 }}>
                  <TouchableOpacity onPress={() => { deletarTarefa(val.id) }}>
                    <AntDesign name="minuscircleo" size={24} color="black" />
                  </TouchableOpacity>
                </View>

              </View>
            )
          })

        }
      </ScrollView>

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
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    marginTop: 30,
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
