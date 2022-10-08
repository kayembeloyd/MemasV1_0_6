import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

export default function DepartmentItem({ text, fontAwesone5IconName, onPress }) {
    return (
        <TouchableOpacity onPress={ onPress }>
            <View style={styles.container}>
                { fontAwesone5IconName === "" ? null : <FontAwesome5 name={ fontAwesone5IconName } size={72} color="black" style={ styles.icon } /> }
                <Text style={styles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:20,
        alignItems: 'center',
    }, 

    buttonText: {
        fontSize: 16
    },

    icon: {
    },

    
})