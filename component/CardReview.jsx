import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Feather, Ionicons } from '@expo/vector-icons'

const CardReview = (props) => {
    return (
        <View style={[{ width: '100%', borderRadius: 20, minHeight: 100, backgroundColor: 'white', marginVertical: 10 }, styles.shadow]} >
            <View style={[styles.container, { paddingVertical: 15 }]} >
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <View style={{ height: 40, width: 40, backgroundColor: '#F9D9A8', borderRadius: 20 }} >
                    </View>
                    <View style={[styles.colCenter, { marginLeft: 20, marginVertical: 5 }]} >
                        <View style={{ flexDirection: 'row' }} >
                            <Ionicons name="star" size={18} color="black" />
                            <Ionicons name="star" size={18} color="black" />
                            <Ionicons name="star" size={18} color="black" />
                            <Ionicons name="star" size={18} color="black" />
                        </View>
                        <Text style={{ fontSize: 12, color: '#c4c4c4' }} >26, Agustus 2022.</Text>
                    </View>
                </View>
                <Text >Hasil nya keren bro, bikin nagih</Text>
            </View>
        </View>
    )
}

export default CardReview

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

        elevation: 3,
    }
});