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
        backgroundColor: '#E3E3E3',
        paddingVertical: 13,
        paddingHorizontal: 15,
        marginVertical: 2,
        marginHorizontal: 2,
        alignItems: 'center',
        borderRadius: 10,
        }, 

    text: {
        fontSize: 15
    }
})