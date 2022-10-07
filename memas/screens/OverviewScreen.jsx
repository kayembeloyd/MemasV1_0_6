import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import MButton from '../components/custom/MButton';
import MCard from '../components/custom/MCard';
import MScanButton from '../components/custom/MScanButton';
import MSearchBar from '../components/custom/MSearchBar';

import MiddleMan from '../database/MiddleMan';


export default function OverViewScreen(){
    return (
        <View style={styles.container}>
            <Text>Overview Screen</Text>
            <MSearchBar/>
            <MScanButton/>
            <View style={styles.cardsContainer}>
                <MCard cardTitle='Todo'>
                    <MButton text='add ToDo'/>
                </MCard>

                <MCard cardTitle='Report'>
                    <Text>dfefe</Text>
                </MCard>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        backgroundColor: 'red',
        alignItems: 'center'
    },

    cardsContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
        backgroundColor: 'green',
        width: '100%',
        padding: 5,
        marginTop: 5,
    },
})