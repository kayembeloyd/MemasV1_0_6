import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function EquipmentScreen({ route, navigation }){
    
    const {item} = route.params;

    return (
        <View style={styles.container}>
            <Text>{item.equipmentName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
    }
})