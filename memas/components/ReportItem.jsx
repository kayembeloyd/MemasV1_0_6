import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 

export default function ReportItem() {
    return (
        <View style={styles.container}>
            <Text style={styles.reportItemHeaderText}> Oxygen Concentrator not wo</Text>
            <View style={styles.reportItemDescs}>
                <Text style={styles.reportItemDesc}>Male Ward</Text>
                <Text style={styles.reportItemDesc}>10-09-2022</Text>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#E3E3E3',
        margin:10,
        padding:11,
        justifyContent: 'center',
        borderRadius: 10,
    }, 

    reportItemHeaderText: {
        flex: 1,
        fontSize:16,
        fontWeight:'400',
        padding:0
    },

    reportItemDescs:{
        marginLeft:5,
    },

    reportItemDesc: {
        color:'#444444',
        fontSize: 16,
    }
})