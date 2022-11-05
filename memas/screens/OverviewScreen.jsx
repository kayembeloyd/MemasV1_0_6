import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import NetInfo from "@react-native-community/netinfo";

import MButton from '../components/custom/MButton';
import MCard from '../components/custom/MCard';
import MScanButton from '../components/custom/MScanButton';
import MSearchBar from '../components/custom/MSearchBar';
import ReportItem from '../components/ReportItem';
import ToDoItem from '../components/ToDoItem';

import MiddleMan from '../database/MiddleMan';
import MiddleManV2 from '../database/MiddleManV2';

export default function OverViewScreen({ navigation }){

    const mSearchBarOnPressHandler = () => { navigation.navigate('EquipmentSearchScreen'); }
    const mScanButtonOnPressHandler = () => { navigation.navigate('ScanScreen'); }
    const addEquipmentPressHandler = () => { navigation.navigate('AddEquipmentScreen'); }
    const checkEquipmentPressHandler = () => { navigation.navigate('EquipmentSearchScreen'); }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('Overview Screen Opened');
            console.log('Checking internet connection...');

            NetInfo.fetch().then(state => {
                console.log('Done Checking internet connection');
                console.log("Is connected? = ", state.isConnected);
                console.log("Connection type = ", state.type);

                if (state.type){
                    console.log("Syncing with the online database");    
                    MiddleManV2.Sync().then(() => { console.log("Synchronization 1 complete"); })
                    MiddleManV2.Sync2().then(() => { console.log("Synchronization 2 complete"); })

                    // Sync 3
                    MiddleManV2.OLoadMoreDepartments().then((dd) => {
                        console.log('Departments from the web = ', dd)

                        if (dd){
                            MiddleManV2.LSaveDepartmentsReset(dd).then((ddd) => {
                                console.log(ddd)  
                            })
                        }
                    })
                }
            });
        });

        return unsubscribe;
    }, [ navigation ]);

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
                        <MButton text='Add equipment' onPress={addEquipmentPressHandler}/>
                        <MButton text='Check equipment' onPress={checkEquipmentPressHandler}/>
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