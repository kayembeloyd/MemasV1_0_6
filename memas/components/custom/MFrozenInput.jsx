import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function MFrozenInput({title, text}){

    return (
        <View style={styles.container}>
            <Text>{title}</Text>
            <Text style={{fontWeight:'300', marginTop:2}}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#E3E3E3',
        marginVertical: 6,
        paddingVertical: 10,
        paddingHorizontal:17,
        borderRadius: 10,
    }
})