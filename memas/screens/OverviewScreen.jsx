import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function OverViewScreen(){
    return (
        <View style={styles.container}>
            <Text>Overview Screen</Text>            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
    },
})