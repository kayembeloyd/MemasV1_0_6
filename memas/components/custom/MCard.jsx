import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function MCard(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.cardTitle}>{props.cardTitle}</Text>
            <View style={styles.cardContent}>
                { props.children }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        minWidth:300,
        backgroundColor: '#D9D9D9',
        padding: 15,
        marginBottom: 20,
        marginHorizontal: 10,
        borderRadius: 10,
        elevation: 1,
    },

    cardContent: {
        backgroundColor:'blue'
    },

    cardTitle: {
        fontSize: 18,
        marginBottom: 13,
    }
})