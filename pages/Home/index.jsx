import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, View, Text, SafeAreaView, Dimensions, ScrollView, Pressable, Image } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import { Ionicons } from '@expo/vector-icons'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height

function Home(props) {
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
          <View style={[{ width: '95%', height: 140, backgroundColor: 'white', marginTop: 30, borderTopRightRadius: 20, borderBottomEndRadius: 20 }, styles.shadow]} >
            <View style={[styles.container]} >
              <View style={[styles.colCenter, { height: '100%' }]} >
                <Text style={styles.heading} >Jam Kerja</Text>
                <Text>10:00AM - 06:00PM</Text>
              </View>
              <Image source={require('../../assets/img/barber.svg')} style={{width: 60, height: 60, backgroundColor: 'black'}} />

            </View>
          </View>
          
          <View style={[styles.container, { marginTop: 20 }]} >
            <Text style={styles.heading}>
              Layanan
            </Text>
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
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
  }
});

export default Home;
