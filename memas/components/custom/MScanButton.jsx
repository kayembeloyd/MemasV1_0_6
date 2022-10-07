import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { MaterialIcons } from '@expo/vector-icons';

export default function MScanButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialIcons name="qr-code-scanner" size={52} color="#3533B6" style={styles.qrCodeIcon}/>
                <Text style={styles.scanText}>SCAN</Text>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'center',
    }, 

    qrCodeIcon:{
        color: "#3533B6",
    },

    scanText: {
        color: "#3533B6",
        fontWeight: "bold",
        fontSize: 18,
    }
})