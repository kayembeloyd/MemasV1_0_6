import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View, ScrollView } from 'react-native';

import MSearchBar from '../components/custom/MSearchBar'
import FilterBar from '../components/FilterBar';
import MaintenanceLogItem from '../components/MaintenanceLogItem'
import MiddleManV2 from '../database/MiddleManV2';

export default function MaintenanceLogsScreen({ navigation }){
    const filterItems = [
        { id:1, key:'Department', values:[ 'all', 'dept 1', 'dept 5']},
        { id:2, key:'Make', values:[ 'all', 'working'] },            
        { id:3, key:'Status', values:[ 'all', 'working'] },            
        { id:4, key:'Status', values:[ 'all', 'working'] },            
        { id:5, key:'Status', values:[ 'all', 'working'] },            
    ]

    const [maintenanceLogs, setMaintenanceLogs] = useState([])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('Getting local maintenance logs...')
            MiddleManV2.LGetMaintenanceLogs().then((d) => {
                console.log('local maintenance logs: ', d)
                console.log('Updating State of mainetnance logs in app...')
                d !== null ? setMaintenanceLogs(d) : setMaintenanceLogs([]);
                console.log('State of maintenance logs updated')

                console.log('Making exceptions for a server request...')
                var exceptions = []
                if (d !== null){
                    d.forEach(element => {
                        exceptions.push(element.oid)
                    });
                }

                console.log("Exceptions = ", exceptions)

                console.log('Loading maintenance logs online...')
                MiddleManV2.OLoadMoreMaintenanceLogs(1, exceptions).then((d) => {
                    console.log('Maintenance Logs from web: ', d)

                    console.log('Adding Maintenance Logs to Local database...')
                    MiddleManV2.LSaveMaintenanceLogsPushRage(d).then((new_maintenance_logs) => {
                        console.log('Maintenance logs added')

                        console.log('New maintenance logs: ', new_maintenance_logs)
                        console.log('Trying to update state...')
                        new_maintenance_logs !== null ? setMaintenanceLogs(new_maintenance_logs) : setMaintenanceLogs([]);
                        console.log('State updated')
                        
                    })
                })

            })

        });

        return unsubscribe;
    }, [ navigation ]);

    return (
        <View style={styles.container}>
            <ScrollView stickyHeaderIndices={[1]} stickyHeaderHiddenOnScroll={true}>
                <View style={styles.searchBarContainer}>
                    <MSearchBar 
                    onPress={() => {
                        navigation.navigate('MaintenanceLogSearchScreen');
                        }} 
                    hint='search equipment in logs'/>
                </View>

                <FilterBar filterItems={filterItems}/>
                <View style={styles.maintenanceLogItemsContainer}>
                    <FlatList 
                        data={maintenanceLogs}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <MaintenanceLogItem 
                                onPress={() => { navigation.navigate('MaintenanceLogScreen')}}
                                equipmentName={item.equipment_name} 
                                type = {item.type}
                                equipmentAssetTag = {item.equipment_asset_tag}
                            />
                        )}
                    /> 
                </View>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }, 

    maintenanceLogItemsContainer: {

    }, 

    searchBarContainer:{
        alignItems: 'center',
        padding: 10
    }
})