import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";

const CardLayanan = (props) => {
  return (
    <View
      style={[
        {
          width: "100%",
          borderRadius: 20,
          height: 100,
          backgroundColor: "white",
          marginVertical: 7,
        },
        styles.shadow,
      ]}
    >
      <View
        style={[
          styles.container,
          {
            height: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          },
        ]}
      >
        <View
          style={{ height: "100%", flexDirection: "row", alignItems: "center" }}
        >
          <View
            style={{
              height: 70,
              width: 70,
              backgroundColor: "#F9D9A8",
              borderRadius: 10,
              justifyContent: "center",
              alignItems :"center"
            }}
          >
            <MaterialIcons name="home-repair-service" size={32} color="white" />
          </View>
          <View style={[styles.colCenter, { marginLeft: 20 }]}>
            <Text style={[styles.heading, { fontSize: 18 }]}>
              {props?.nama_servis}
            </Text>
            <Text>Rp. {props?.harga_servis}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={props.onBook}
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
  );
};

export default CardLayanan;

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
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 3,
  },
});
