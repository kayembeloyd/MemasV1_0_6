import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function DepartmentScreen(){
    return (
        <View style={styles.container}>
            <Text>Department Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
    }
})