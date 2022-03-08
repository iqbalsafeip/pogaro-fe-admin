import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function Home(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <View style={styles.rect4Row}>
            <View style={styles.rect4}></View>
            <View style={styles.alexRudrigoColumn}>
              <Text style={styles.alexRudrigo}>Alex Rudrigo</Text>
              <View style={styles.iconRow}>
                <EntypoIcon
                  name="location-pin"
                  style={styles.icon}
                ></EntypoIcon>
                <Text style={styles.cibatuGarut}>Cibatu, Garut</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.rect3}></View>
        <View style={styles.rect2}></View>
        <View style={styles.rect5}>
          <Text style={styles.jamKerja}>Jam Kerja</Text>
          <View style={styles.icon2Row}>
            <FontAwesomeIcon
              name="clock-o"
              style={styles.icon2}
            ></FontAwesomeIcon>
            <Text style={styles.loremIpsum}>10:00AM - 06:00PM</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start"
  },
  rect: {
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(100,133,222,1)",
    right: 68,
    height: 163,
    borderBottomLeftRadius: 35
  },
  rect4: {
    width: 89,
    height: 117,
    backgroundColor: "#E6E6E6",
    borderRadius: 21
  },
  alexRudrigo: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 24
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 27,
    height: 29,
    width: 27
  },
  cibatuGarut: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    marginLeft: 1,
    marginTop: 7
  },
  iconRow: {
    height: 29,
    flexDirection: "row",
    marginTop: 15,
    marginRight: 28
  },
  alexRudrigoColumn: {
    width: 138,
    marginLeft: 19,
    marginTop: 19,
    marginBottom: 26
  },
  rect4Row: {
    height: 117,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 22,
    marginRight: 92
  },
  rect3: {
    left: 291,
    position: "absolute",
    backgroundColor: "rgba(100,133,222,1)",
    right: 0,
    top: 108,
    bottom: 90
  },
  rect2: {
    top: 163,
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderTopRightRadius: 35,
    bottom: 90,
    right: 68
  },
  rect5: {
    top: 190,
    left: 0,
    height: 117,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 0
    },
    elevation: 30,
    shadowOpacity: 0.09,
    shadowRadius: 10,
    right: 96
  },
  jamKerja: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 24,
    marginTop: 19,
    marginLeft: 22
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 18,
    height: 18,
    width: 15
  },
  loremIpsum: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginLeft: 10,
    marginTop: 1
  },
  icon2Row: {
    height: 18,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 22,
    marginRight: 157
  },
  rectStack: {
    flex: 1,
    marginRight: -68,
    marginTop: 23,
    marginBottom: 410
  }
});

export default Home;
