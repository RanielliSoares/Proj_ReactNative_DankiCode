import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import { AntDesign } from '@expo/vector-icons';

import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TouchableHighlight, Modal, ScrollView, TextInput } from 'react-native';

export default function App() {

  const image = require('./resources/img/bg.jpg');

  console.disableYellowBox = true;

  const [tarefas, setarTarefas] = useState([
    {
      id: 1,
      tarefa: 'Ver série.'
    },
    {
      id: 2,
      tarefa: 'Estudar JS'
    },
    {
      id: 3,
      tarefa: 'Estudar violão'
    }
  ]);

  const [modal, setModal] = useState(false);
  const [tarefaAtual, setTarefaAtual] = useState('')


  function deletarTarefa(id) {
    alert('Tarefa com id ' + id + ' foi deletada com sucesso!');
    //TODO: Deletar do array/estado a tarefa com id especificado!
    let newTarefas = tarefas.filter(function (val) {
      return val.id != id;
    });

    setarTarefas(newTarefas);
  }

  function addTarefa() {

    setModal(!modal);
    let id = 0;
    if (tarefas.length > 0) {
      id = tarefas[tarefas.length - 1].id + 1;

    }
    let tarefa = { id: id, tarefa: tarefaAtual };
    setarTarefas([...tarefas, tarefa])
    alert(id)
  }

  return (

    <ScrollView style={{ flex: 1 }}>
      <StatusBar hidden />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              autoFocus={true}
              onChangeText={(text) => { setTarefaAtual(text) }}
            ></TextInput>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => { addTarefa() }}
            >
              <Text style={styles.textStyle}>Adicionar Tarefa</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>



      <ImageBackground source={image} style={styles.image}>
        <View style={styles.coverView}>
          <Text style={styles.textHeader}>Lista de Tarefas - Danki Code</Text>
        </View>
      </ImageBackground>



      {
        tarefas.map(function (val) {
          return (<View style={styles.tarefaSingle}>
            <View style={{ flex: 1, width: '100%', padding: 10 }}>
              <Text>{val.tarefa}</Text>
            </View>
            <View style={{ alignItems: 'flex-end', flex: 1, padding: 10 }}>
              <TouchableOpacity onPress={() => deletarTarefa(val.id)}><AntDesign name="minuscircleo" size={24} color="black" /></TouchableOpacity>
            </View>
          </View>);
        })


      }

      <TouchableOpacity style={styles.btnAddTarefa} onPress={() => setModal(true)}><Text
        style={{ textAlign: 'center', color: '#121212', fontWeight: 'bold' }}>Adicionar Tarefa!
      </Text>
      </TouchableOpacity>

    </ScrollView>

  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 80,
    resizeMode: "cover"
  },
  btnAddTarefa: {
    width: 200,
    padding: 8,
    backgroundColor: '#a1c389',
    marginTop: 20,
    width: '100%'
  },
  coverView: {
    width: '100%',
    height: 80,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  textHeader: {
    textAlign: 'center',
    color: 'white',
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
  },
  //Estilos para nossa modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }

});
