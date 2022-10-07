import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 

export default function ToDoItem() {
    return (
        <View style={styles.container}>
            <View style={styles.toDoHeader}>
                <Text style={styles.toDoHeaderText}> PPM Oxygen Concentrator</Text>
                <MaterialIcons name="done" size={24} color="black" />
            </View>
            <View style={styles.toDoDescs}>
                <Text style={styles.toDoDesc}>M001-00003</Text>
                <Text style={styles.toDoDesc}>Maternity ward</Text>
                <Text style={styles.toDoDesc}>Due: Today 13:30</Text>
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

    toDoHeader: {
        flexDirection: 'row',
        paddingBottom: 5,
    },

    toDoHeaderText: {
        flex: 1,
        fontSize:16,
        fontWeight:'400',
        padding:0
    },

    toDoDescs:{
        marginLeft:5,
    },

    toDoDesc: {
        color:'#444444',
        fontSize: 16,
    }
})