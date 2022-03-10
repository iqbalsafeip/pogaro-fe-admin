import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, Dimensions, ScrollView, Pressable, Image, TouchableOpacity, Alert, Modal, StatusBar } from "react-native";


import { Ionicons } from '@expo/vector-icons'
import CardLayanan from "../../component/CardLayanan";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height

function Home(props) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        
        <ScrollView style={{
          backgroundColor: 'white',
          width: width,
          minHeight: height
        }} >
          <View style={[{
            width: '100%',
            minHeight: 250,
            backgroundColor: 'pink',
            borderBottomStartRadius: 25,
            borderBottomEndRadius: 25
          }, styles.colCenter]} >
            <View style={[styles.container, {
              display: 'flex',
              flexDirection: 'row',
              marginBottom: 20,
              justifyContent: 'space-between'
            }]}>
              <Pressable  >
                <Ionicons name="arrow-back" size={30} color="black" />
              </Pressable>
              <Text style={[styles.heading, { color: 'white' }]} >BARON</Text>
            </View>
            <View style={[styles.container, {
              display: 'flex',
              flexDirection: 'row',

            }]} >
              <View style={{ height: 150, width: 100, backgroundColor: 'grey', borderRadius: 15 }} >

              </View>

              <View style={[styles.colCenter, { marginLeft: 20 }]}>
                <Text style={styles.heading} >Alex Rudrigo</Text>
                <View style={{ flexDirection: 'row' }} >
                  <Ionicons name="location-outline" size={18} color="black" />
                  <Text style={{ marginLeft: 5 }} >Garut, Cibatu</Text>
                </View>
              </View>
            </View>
          </View>
            <Modal
              animationType="slide"
              transparent={false}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Hello World!</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          <View style={[{ width: '95%', height: 140, backgroundColor: 'white', marginTop: 30, borderTopRightRadius: 20, borderBottomEndRadius: 20 }, styles.shadow]} >
            <View style={[styles.container]} >
              <View style={[styles.colCenter, { height: '100%' }]} >
                <Text style={styles.heading} >Jam Kerja</Text>
                <Text>10:00AM - 06:00PM</Text>
              </View>
            </View>
          </View>

          <View style={[styles.container, { marginTop: 20 }]} >
            <Text style={styles.heading}>
              Layanan
            </Text>
            <View style={{ marginTop: 20, marginBottom: 20 }} >
              <CardLayanan onBook={() => setModalVisible(true)} />
              <CardLayanan onBook={() => setModalVisible(true)} />
              <CardLayanan onBook={() => setModalVisible(true)} />
            </View>
            <TouchableOpacity style={[styles.shadow, styles.rowCenter, { width: '100%', height: 60, backgroundColor: '#F9D9A8', marginBottom: 100, borderRadius: 5 }]} >
              <Text style={[styles.heading, { color: 'black' }]} >Review</Text>
            </TouchableOpacity>
          </View>
          
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { width: '90%', alignSelf: 'center' },
  rowCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  colCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 24,

  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
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

export default Home;
