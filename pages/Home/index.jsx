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
import { Ionicons } from "@expo/vector-icons";
import CardLayanan from "../../component/CardLayanan";
import * as Location from "expo-location";
import { Link } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { getBarberId, transaksi } from "../../utils/redux/actions";
import { useSelector } from "react-redux";
import { base_url, toFormData } from "../../utils/helper";
const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

function Home(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState({
    tanggal: new Date(),
    jam: "",
    _tanggal: "",
  });
  const dispatch = useDispatch();
  const [isTanggal, setTgl] = useState(false);
  const [servis, setServis] = useState(null);
  const [isJam, setJm] = useState(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [detail_alamat, setDetail] = useState("")
  const [result, setRes] = useState({});
  const [ongkir, setOngkir] = useState(0);
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

  const user = useSelector(state => state.mainReducer.user);
  const profile = useSelector(state => state.mainReducer.profile)
  const handleJam = (event, date) => {
    const current = date || data.tanggal;
    const newDate = new Date(current);
    setData({ ...data, jam: newDate.getHours() + ":" + newDate.getMinutes() });
    setJm(false);
  };
  const { id } = props.route.params;

  useEffect(() => {
    handleLokasi();
    dispatch(getBarberId(id)).then((res) => {
      setRes(res.data.data);
    });
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
    const temp = {
      barber_id: id,
      pengguna_id: profile.id,
      tanggal: data.tanggal,
      waktu: data.jam,
      longitude: location?.coords.longitude,
      latitude: location?.coords.latitude,
      servis_id: servis,
      status: 0,
      detail_alamat: detail_alamat,
      ongkir: ongkir
    }
    dispatch(transaksi(temp))
      .then(res => {
        let data = res.data.data;
        props.navigation.navigate("Detail", { id: data.id })
      })
      .catch(err => {
        alert("gagal melakukan transaksi")
      })
    // props.navigation.navigate("Detail");
    setModalVisible(false);
  };

  const handleServis = (id) => {
    setServis(id)
    let temp = calcCrow(parseFloat(result.latitude), parseFloat(result.longitude), location.coords.latitude, location.coords.longitude)
    setOngkir(parseInt(temp * 2000))
    setModalVisible(true);
  }

  function toRad(Value) {
    return Value * Math.PI / 180
  }

  function calcCrow(lat1, lon1, lat2, lon2) {
    var R = 6371 // km
    var dLat = toRad(lat2 - lat1)
    var dLon = toRad(lon2 - lon1)
    var lat1 = toRad(lat1)
    var lat2 = toRad(lat2)

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2)
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    var d = R * c
    return d
  }

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
                minHeight: 250,
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
              <Pressable onPress={() => props.navigation.navigate("Barber")}>
                <Ionicons name="arrow-back" size={30} color="white" />
              </Pressable>
              <Text style={[styles.heading, { color: "white" }]}>POGARO</Text>
            </View>
            <View
              style={[
                styles.container,
                {
                  display: "flex",
                  flexDirection: "row",
                },
              ]}
            >
              <View
                style={{
                  height: 150,
                  width: 150,
                  backgroundColor: "grey",
                  borderRadius: 15,
                }}
              >
                <Image
                  style={{
                    width: 150,
                    height: 150,
                    borderRadius: 15,
                  }}
                  source={{
                    uri: base_url + "/images/" + result.profile,
                  }}
                />
              </View>

              <View style={[styles.colCenter, { marginLeft: 20, maxWidth: "50%" }]}>
                <Text style={[styles.heading, { fontSize: 18, color: "white" }]}>{result?.nama_barber}</Text>
                <Text style={[styles.heading, { fontSize: 16, color: "white" }]}>
                  {result?.nama}
                </Text>
                <View style={{ flexDirection: "row", marginBottom: 5 }}>
                  <Ionicons name="location-outline" size={18} color="white" />
                  <Text style={{ marginLeft: 5, fontSize: 12, color: "white" }}>{result?.alamat}</Text>
                </View>
                {/* <Link to="/Reviews">
                  <Ionicons name="star" size={18} color="black" />
                  <View style={{ width: 5 }}></View>
                  <Text style={{ marginLeft: 5 }}>Lihat Review</Text>
                </Link> */}
              </View>
            </View>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <ScrollView>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.heading}>Detail Booking</Text>

                  <View
                    style={[
                      styles.colCenter,
                      {
                        justifyContent: "flex-start",
                        width: "100%",
                        marginVertical: 15,
                      },
                    ]}
                  >
                    <Text>Tanggal : {data._tanggal}</Text>
                    <Text>Jam : {data.jam}</Text>
                    <Text>Ongkos Transportasi Rp.2000/km : Rp.{ongkir}</Text>
                  </View>
                  <View
                    style={[
                      styles.rowCenter,
                      {
                        width: "100%",
                        justifyContent: "flex-start",
                        marginBottom: 10,
                      },
                    ]}
                  >
                    <Ionicons name="location-outline" size={18} color="black" />
                    <Text>Lokasi</Text>
                  </View>
                  {!isLoading && (
                    <MapView
                      style={{ width: "100%", height: 300 }}
                      initialRegion={{
                        latitude: location?.coords.latitude,
                        longitude: location?.coords.longitude,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                      }}
                    >
                      <MapView.Marker
                        coordinate={location?.coords}
                        title={"Lokasi Kamu Sekarang"}
                      />
                    </MapView>
                  )}

                  <View
                    style={[
                      styles.rowCenter,
                      {
                        width: "100%",
                        justifyContent: "flex-start",
                        marginVertical: 10,
                      },
                    ]}
                  >
                    <Ionicons name="location-outline" size={18} color="black" />
                    <Text>Detail Alamat</Text>
                  </View>
                  <TextInput
                    multiline={true}
                    numberOfLines={4}
                    value={detail_alamat}
                    style={{
                      borderWidth: 1,
                      marginHorizontal: 10,
                      borderRadius: 5,
                      width: "100%",
                      padding: 5,
                    }}
                    placeholder="Masukan Alamat disini..."
                    onChangeText={e => setDetail(e)}
                  />
                  <View style={[styles.rowCenter, { marginTop: 10 }]}>
                    <Pressable
                      style={[styles.button, styles.buttonOpen, { width: "48%" }]}
                      onPress={() => setTgl(true)}
                    >
                      <Text style={styles.textStyle}>Pilih Tanggal</Text>
                    </Pressable>
                    <Pressable
                      style={[
                        styles.button,
                        styles.buttonOpen,
                        { marginLeft: 5, width: "48%" },
                      ]}
                      onPress={() => setJm(true)}
                    >
                      <Text style={styles.textStyle}>Pilih Jam</Text>
                    </Pressable>
                  </View>
                  <Pressable
                    style={[
                      styles.button,
                      styles.buttonOpen,
                      { marginTop: 5, width: "100%" },
                    ]}
                    onPress={handleLokasi}
                  >
                    <Text style={styles.textStyle}>Gunakan Lokasi Sekarang</Text>
                  </Pressable>
                  <Pressable
                    style={[
                      styles.button,
                      styles.buttonClose,
                      ,
                      { marginTop: 15, width: "100%" },
                    ]}
                    onPress={handleBooking}
                  >
                    <Text style={styles.textStyle}>Booking</Text>
                  </Pressable>
                  {isTanggal && (
                    <DateTime value={new Date()} onChange={handleDateChange} />
                  )}
                  {isJam && (
                    <DateTime
                      value={new Date()}
                      onChange={handleJam}
                      mode="time"
                    />
                  )}
                </View>
              </View>
            </ScrollView>
          </Modal>

          <View
            style={[styles.container, { marginTop: 20, marginBottom: 100 }]}
          >
            <Text style={[styles.heading, { fontSize: 18 }]}>Lokasi Fotografer :</Text>
            {
              (result.longitude !== null && result.latitude !== null) && (
                <MapView
                  style={{ width: "100%", height: 300, marginVertical: 4 }}
                  initialRegion={{
                    latitude: parseFloat(result.latitude),
                    longitude: parseFloat(result.longitude),
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                  }}

                >
                  <MapView.Marker

                    coordinate={{
                      latitude: parseFloat(result.latitude),
                      longitude: parseFloat(result.longitude),
                      latitudeDelta: 0.005,
                      longitudeDelta: 0.005,
                    }}
                    title={"Lokasi Transaksi"}
                  />
                </MapView>
              )
            }
            <Text style={[styles.heading, { fontSize: 18 }]}>Layanan</Text>
            <View style={{ marginTop: 20, marginBottom: 20 }}>
              {result?.services?.map((e, i) => (
                <CardLayanan
                  {...e}
                  key={i}
                  onBook={() => handleServis(e.id)}
                />
              ))}
              {/* <CardLayanan onBook={() => setModalVisible(true)} /> */}
              {/* <CardLayanan onBook={() => setModalVisible(true)} /> */}
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

export default Home;
