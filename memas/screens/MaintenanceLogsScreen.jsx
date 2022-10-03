import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function MaintenanceLogsScreen(){
    return (
        <View style={styles.container}>
            <Text>Maintenance Logs Screen</Text>            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
    },
})