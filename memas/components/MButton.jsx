import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function MButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={ onPress }>
            <View style={ styles.container }>
                <Text style={ styles.text }>
                    { text }
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        paddingVertical: 13,
        paddingHorizontal: 15,
        marginVertical: 2,
        alignItems: 'center',
    }, 

    text: {
        fontSize: 15
    }
})