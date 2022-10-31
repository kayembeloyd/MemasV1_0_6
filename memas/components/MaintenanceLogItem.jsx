import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function EquipmentItem ({ onPress, equipmentName, type, equipmentAssetTag}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}> 
                <View style={styles.equipmentDescs}>
                    <Text style={styles.equipmentDesc}>09-Sept-2022 14:00</Text>
                    <Text style={styles.equipmentMainDesc}>{equipmentName} ({equipmentAssetTag})</Text>
                    <Text style={styles.equipmentDesc}>Log Type: {type}e</Text>
                    <Text style={styles.equipmentDesc}>Dept: Maternity</Text>
                    <Text style={styles.equipmentDesc}>Make: Canta</Text>
                    <Text style={styles.equipmentDesc}>Model: VN-WS-08</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F8F8F8',
        marginVertical: 1,
        padding:11,
        justifyContent: 'center',
    },

    equipmentDescs:{
        marginLeft:5,
    },

    equipmentMainDesc: {
        color:'#444444',
        fontSize: 18,
        fontWeight: '700',
    },

    equipmentDesc: {
        color:'#444444',
        fontSize: 16,
    }  
})