import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function EquipmentItem ({ name, department, make, model, tag, status, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}> 
                <View style={styles.equipmentDescs}>
                    <View style={styles.equipmentHeader}>
                        <Text style={styles.equipmentHeaderText}>{tag}</Text>
                        <Text>{status}</Text>
                    </View>

                    <Text style={styles.equipmentMainDesc}>{name}</Text>
                    <Text style={styles.equipmentDesc}>{department}</Text>
                    <Text style={styles.equipmentDesc}>{make}</Text>
                    <Text style={styles.equipmentDesc}>{model}</Text>
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

    equipmentHeader: {
        flexDirection: 'row',
        paddingBottom: 5,
    },

    equipmentHeaderText: {
        flex: 1,
        fontSize:16,
        fontWeight:'400',
        padding:0
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