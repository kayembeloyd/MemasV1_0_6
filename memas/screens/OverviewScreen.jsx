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
                <View style={{width:'100%', alignItems:'center', paddingHorizontal: 16, paddingVertical:7}}>
                    <MSearchBar onPress={mSearchBarOnPressHandler} hint='search equipment'/>
                </View>
                <View style={{width:'100%', alignItems:'center', marginTop: 13,}}>
                    <MScanButton onPress={mScanButtonOnPressHandler}/>
                </View>
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
        backgroundColor: 'white',
        alignItems: 'center'
    },

    cardsContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
        width: '100%',
        marginTop: 42,
    },
})