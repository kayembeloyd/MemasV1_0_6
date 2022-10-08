import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function MFrozenInput(){

    return (
        <View style={styles.container}>
            <Text>Serviced on</Text>
            <Text>22-09-2022</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin: 2,
        backgroundColor: 'yellow'
    }
})