import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function CalendarScreen(){
    return (
        <View style={styles.container}>
            <Text>Calendar Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
    }
})