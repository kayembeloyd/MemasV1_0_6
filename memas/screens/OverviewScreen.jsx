import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import MButton from '../components/custom/MButton';
import MCard from '../components/custom/MCard';
import MScanButton from '../components/custom/MScanButton';
import MSearchBar from '../components/custom/MSearchBar';
import ReportItem from '../components/ReportItem';
import ToDoItem from '../components/ToDoItem';

import MiddleMan from '../database/MiddleMan';

export default function OverViewScreen({ navigation }){

    const mSearchBarOnPressHandler = () => { navigation.navigate('EquipmentSearchScreen'); }
    const mScanButtonOnPressHandler = () => { navigation.navigate('ScanScreen'); }
    const addEquipmentPressHandler = () => { navigation.navigate('AddEquipmentScreen'); }
    const checkEquipmentPressHandler = () => { navigation.navigate('EquipmentSearchScreen'); }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>Overview Screen</Text>
                <MSearchBar onPress={mSearchBarOnPressHandler}/>
                <MScanButton onPress={mScanButtonOnPressHandler}/>
                <View style={styles.cardsContainer}>
                    <MCard cardTitle='Activities'>
                        <MButton text='add equipment' onPress={addEquipmentPressHandler}/>
                        <MButton text='check equipment' onPress={checkEquipmentPressHandler}/>
                    </MCard>

                    <MCard cardTitle='Todo'>
                        <MButton text='add ToDo'/>
                        <View style={styles.items}>
                            <ToDoItem />
                            <ToDoItem />
                            <ToDoItem />
                        </View>
                    </MCard>

                    <MCard cardTitle='Report'>
                        <MButton text='add report'/>
                        <View style={styles.items}>
                            <ReportItem/>
                            <ReportItem/>
                        </View>
                    </MCard>
                </View>
            </View>
        </ScrollView>
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