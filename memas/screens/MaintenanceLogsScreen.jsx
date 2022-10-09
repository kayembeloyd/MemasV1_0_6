import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import MSearchBar from '../components/custom/MSearchBar'
import FilterBar from '../components/FilterBar';
import MaintenanceLogItem from '../components/MaintenanceLogItem'

export default function MaintenanceLogsScreen({ navigation }){
    const filterItems = [
        { id:1, key:'Department', values:[ 'all', 'dept 1', 'dept 5']},
        { id:2, key:'Make', values:[ 'all', 'working'] },            
        { id:3, key:'Status', values:[ 'all', 'working'] },            
        { id:4, key:'Status', values:[ 'all', 'working'] },            
        { id:4, key:'Status', values:[ 'all', 'working'] },            
        { id:4, key:'Status', values:[ 'all', 'working'] },            
        { id:4, key:'Status', values:[ 'all', 'working'] },            
        { id:5, key:'Status', values:[ 'all', 'working'] },            
    ]

    return (
        <View style={styles.container}>
            <ScrollView stickyHeaderIndices={[1]} stickyHeaderHiddenOnScroll={true}>
                <View style={styles.searchBarContainer}>
                    <MSearchBar 
                    onPress={() => {
                        navigation.navigate('MaintenanceLogSearchScreen');
                        }} 
                    placeHolder={"Search equipment in logs"}/>
                </View>

                <FilterBar filterItems={filterItems}/>
                <View style={styles.maintenanceLogItemsContainer}>
                    <MaintenanceLogItem />
                    <MaintenanceLogItem />
                    <MaintenanceLogItem />
                    <MaintenanceLogItem />
                    <MaintenanceLogItem />
                    <MaintenanceLogItem />
                    <MaintenanceLogItem />
                    <MaintenanceLogItem />
                    <MaintenanceLogItem />
                    <MaintenanceLogItem />
                    <MaintenanceLogItem />
                    <MaintenanceLogItem />
                    <MaintenanceLogItem />
                </View>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green'
    }, 
    maintenanceLogItemsContainer: {

    }, 
    searchBarContainer:{
        backgroundColor: 'gold',
        alignItems: 'center',
        padding: 10
    }
})