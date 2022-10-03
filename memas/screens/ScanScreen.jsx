import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function ScanScreen(){
    return (
        <View style={styles.container}>
            <Text>Scan Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
    }
})