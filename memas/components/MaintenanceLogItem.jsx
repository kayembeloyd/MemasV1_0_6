import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function EquipmentItem () {
    return (
        <View style={styles.container}> 
            <View style={styles.equipmentDescs}>
                <Text style={styles.equipmentMainDesc}>Oxygen Concentrator</Text>
                <Text style={styles.equipmentDesc}>Log Type: Preventive Maintenance</Text>
                <Text style={styles.equipmentDesc}>Dept: Maternity</Text>
                <Text style={styles.equipmentDesc}>Make: Canta</Text>
                <Text style={styles.equipmentDesc}>Model: VN-WS-08</Text>
            </View>
            
        </View>
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