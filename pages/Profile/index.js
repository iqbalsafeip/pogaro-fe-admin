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
    ImageBackground,
} from "react-native";
import DateTime from "@react-native-community/datetimepicker";
import MapView from "react-native-maps";
import { Ionicons, Feather, Fontisto, AntDesign } from "@expo/vector-icons";
import CardLayanan from "../../component/CardLayanan";
import * as Location from "expo-location";
import { Link } from "@react-navigation/native";
import { getBarber, logout, me } from "../../utils/redux/actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { base_url } from "../../utils/helper";
const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

function Profile({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [data, setData] = useState([]);

    const dispatch = useDispatch();
    const user = useSelector((state) => state.mainReducer.user);
    const profile = useSelector(state => state.mainReducer.profile)
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

    const handleLogout = () => {
        dispatch(logout()).then(res => {
            alert("Berhasil Logout")
        })
    }

    const handleJam = (event, date) => {
        const current = date || data.tanggal;
        const newDate = new Date(current);
        setData({ ...data, jam: newDate.getHours() + ":" + newDate.getMinutes() });
        setJm(false);
    };

    useEffect(() => {
        dispatch(getBarber()).then((res) => {
            setData(res.data.data);
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
        navigation.navigate("Detail");
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
                            <Pressable onPress={() => navigation.navigate("Dashboard")}>
                                <Ionicons name="arrow-back" size={30} color="white" />
                            </Pressable>
                            <Text style={[styles.heading, { color: "white" }]}>Profile</Text>
                        </View>
                    </View>
                    <View
                        style={[styles.container, { paddingVertical: 10, marginBottom: 20 }]}
                    >
                        
                        <Text>Nama :</Text>
                        <TextInput style={styles.input} value={profile.nama} onChangeText={e => setForm({ ...form, nama_metode: e })} placeholder="Nama" />
                        <Text>Alamat :</Text>
                        <TextInput style={styles.input} value={profile.alamat} onChangeText={e => setForm({ ...form, nama_metode: e })} placeholder="Alamat" />
                        <Text>Nomor HP :</Text>
                        <TextInput style={styles.input} value={profile.no_hp} onChangeText={e => setForm({ ...form, nama_metode: e })} placeholder="Nomor HP" />
                        <TouchableOpacity
                            style={[
                                styles.rowCenter,
                                {
                                    height: 40,
                                    width: "100%",
                                    backgroundColor: "green",
                                    borderRadius: 10,
                                    marginTop: 10,
                                },
                                styles.shadow
                            ]}
                        >
                            <Text style={{ color: "white", fontWeight: "bold", marginRight: 10 }} >Simpan Perubahan</Text>
                            <AntDesign name="save" size={18} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={handleLogout}
                            style={[
                                styles.rowCenter,
                                {
                                    height: 40,
                                    width: "100%",
                                    backgroundColor: "red",
                                    borderRadius: 10,
                                    marginTop: 10,
                                },
                                styles.shadow
                            ]}
                        >
                            <Text style={{ color: "white", fontWeight: "bold", marginRight: 10 }} >Log Out</Text>
                            <AntDesign name="logout" size={18} color="white" />
                        </TouchableOpacity>
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
    input: { marginVertical: 4, backgroundColor: "white", width: "100%", borderRadius: 5, borderWidth: 2, borderColor: "gray", paddingHorizontal: 8 }
});

export default Profile;
