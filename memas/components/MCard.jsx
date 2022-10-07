import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function MCard(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.cardTitle}>CardTitle</Text>
            <View style={styles.cardContent}>
                { props.children }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        maxWidth:500,
        minWidth:300,
        backgroundColor: 'yellow',
        padding: 15,
        margin:5,
    },

    cardContent: {
    },

    cardTitle: {
        fontSize: 18,
        marginBottom: 13,
    }
})