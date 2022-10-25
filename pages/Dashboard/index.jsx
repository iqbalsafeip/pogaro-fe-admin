import React, { useEffect, useState } from "react";
import {
  Button,
  TextInput,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Pressable,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  StatusBar,
} from "react-native";
import DateTime from "@react-native-community/datetimepicker";
import MapView from "react-native-maps";
import { Ionicons, Feather, Fontisto } from "@expo/vector-icons";
import CardLayanan from "../../component/CardLayanan";
import * as Location from "expo-location";
import { Link } from "@react-navigation/native";
import { me } from "../../utils/redux/actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

function Dashboard({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState({
    tanggal: new Date(),
    jam: "",
    _tanggal: "",
  });

  const dispatch = useDispatch();
  const user = useSelector((state) => state.mainReducer.user);

  const [isTanggal, setTgl] = useState(false);
  const [isJam, setJm] = useState(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const handleDateChange = (event, date) => {
    // setData({ date: date })

    const current = date || data.tanggal;
    setData({
      ...data,
      tanggal: current,
      _tanggal: new Date(current).toDateString(),
    });
    setTgl(false);
  };

  const handleJam = (event, date) => {
    const current = date || data.tanggal;
    const newDate = new Date(current);
    setData({ ...data, jam: newDate.getHours() + ":" + newDate.getMinutes() });
    setJm(false);
  };

  useEffect(() => {
    dispatch(me());
  }, []);

  const handleLokasi = async () => {
    setLoading(true);
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      Alert.alert("Permission to access location was denied");
      setLoading(false);
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location);
    setLoading(false);

    setLocation(location);
  };

  const handleBooking = () => {
    props.navigation.navigate("Detail");
    setModalVisible(false);
  };

  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <ScrollView
          style={{
            backgroundColor: "white",
            width: width,
            minHeight: height,
          }}
        >
          <View
            style={[
              {
                width: "100%",
                minHeight: 100,
                backgroundColor: "green",
              },
              styles.colCenter,
            ]}
          >
            <View
              style={[
                styles.container,
                {
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: 20,
                  justifyContent: "space-between",
                },
              ]}
            >
              <Text style={[styles.heading, { color: "white" }]}>POGARO</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("Profile")}
                style={[
                  styles.rowCenter,
                  {
                    height: 50,
                    width: 50,
                    backgroundColor: "white",
                    borderRadius: 25,
                  },
                ]}
              >
                <Ionicons name="person-circle" size={32} color="black" />
              </TouchableOpacity>

            </View>
          </View>
          <View
            style={[styles.container, { paddingBottom: 10, marginBottom: 20 }]}
          >
            
            <View>
              <View
                style={[
                  {
                    width: "100%",
                    borderRadius: 20,
                    height: 100,
                    backgroundColor: "white",
                    marginTop: 15,
                  },
                  styles.shadow,
                ]}
              >
                <View
                  style={[
                    {
                      height: "100%",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: 15,
                    },
                  ]}
                >
                  <View
                    style={{
                      height: "100%",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        height: 70,
                        width: 70,
                        backgroundColor: "#F9D9A8",
                        justifyContent: "center",
                        borderRadius: 10,
                        alignItems: "center",
                      }}
                    >
                      <Fontisto name="camera" size={28} color="black" />
                    </View>
                    <View
                      style={[
                        styles.colCenter,
                        { marginLeft: 10, maxWidth: "60%" },
                      ]}
                    >
                      <Text style={[styles.heading, { fontSize: 18 }]}>
                        Lihat Jasa Forografer
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Barber")}
                    style={[
                      styles.rowCenter,
                      {
                        height: 70,
                        width: 70,
                        backgroundColor: "#F9D9A8",
                        borderRadius: 10,
                      },
                    ]}
                  >
                    <Feather name="arrow-right" size={50} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={[
                  {
                    width: "100%",
                    borderRadius: 20,
                    height: 100,
                    backgroundColor: "white",
                    marginTop: 15,
                  },
                  styles.shadow,
                ]}
              >
                <View
                  style={[
                    {
                      height: "100%",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: 15,
                    },
                  ]}
                >
                  <View
                    style={{
                      height: "100%",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        height: 70,
                        width: 70,
                        backgroundColor: "#6fffa9",
                        justifyContent: "center",
                        borderRadius: 10,
                        alignItems: "center",
                      }}
                    >
                      <Fontisto name="history" size={28} color="white" />
                    </View>
                    <View
                      style={[
                        styles.colCenter,
                        { marginLeft: 10, maxWidth: "60%" },
                      ]}
                    >
                      <Text style={[styles.heading, { fontSize: 18 }]}>
                        Lihat Riwayat Transaksi
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Riwayat")}
                    style={[
                      styles.rowCenter,
                      {
                        height: 70,
                        width: 70,
                        backgroundColor: "#6fffa9",
                        borderRadius: 10,
                      },
                    ]}
                  >
                    <Feather name="arrow-right" size={50} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { width: "90%", alignSelf: "center" },
  rowCenter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  colCenter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 24,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: width * 0.9,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
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
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Dashboard;
