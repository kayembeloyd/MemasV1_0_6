import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import MButton from '../components/custom/MButton';

import MSearchBar from '../components/custom/MSearchBar';
import EquipmentItem from '../components/EquipmentItem';
import FilterBar from '../components/FilterBar';
import MiddleMan from '../database/MiddleMan';
import MiddleManV2 from '../database/MiddleManV2';

export default function EquipmentsScreen({ navigation }){
    const filterItems = [
        { id:1, key:'Department', values:[ 'all', 'dept 1', 'dept 5']},
        { id:2, key:'Make', values:[ 'all', 'working'] },            
        { id:3, key:'Status', values:[ 'all', 'working'] },            
        { id:4, key:'Status', values:[ 'all', 'working'] },            
        { id:5, key:'Status', values:[ 'all', 'working'] },            
    ]

    const [equipments, setEquipments] = useState([]) 

    const addEquipmentOnPressHandler = () => { navigation.navigate('AddEquipmentScreen'); }
    const equipmentItemOnPressHandler = (item) => {
        navigation.navigate('EquipmentScreen', {item}); 
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('Getting local equipments...')
            MiddleManV2.LGetEquipments().then((d) => {
                console.log('Local equipments = ', d)
                console.log('Updating State of equipments in app...')
                d !== null ? setEquipments(d) : setEquipments([]);
                console.log('State of equipments updated')
                
                console.log('Making exceptions for a server request...')
                var exceptions = []
                if (d !== null){
                    d.forEach(element => {
                        exceptions.push(element.oid)
                    });
                }
                
                console.log("Exceptions = ", exceptions)

                console.log('Loading equipments online...')

                MiddleManV2.OLoadMoreEquipment(1, exceptions).then((d) => {
                    console.log('Equipments from web: ', d)

                    console.log('Adding equipments to Local database...')
                    if (d){
                        MiddleManV2.LSaveEquipmentsPushRange(d).then((newEquips) => {
                            console.log('Equipments added')
    
                            console.log('New equipments: ', newEquips)
                            console.log('Trying to update state...')
                            newEquips !== null ? setEquipments(newEquips) : setEquipments([]);
                            console.log('State updated')
                            
                        })
                    }

                    
                })
            })
        });

        return unsubscribe;
    }, [ navigation ]);

    return (
        <View style={styles.mainContainer}>
            <ScrollView stickyHeaderIndices={[1]} stickyHeaderHiddenOnScroll={true}>
                <View style={styles.container}>
                    <MSearchBar hint='search equipment'/>
                    <MButton text='add equipment' onPress={addEquipmentOnPressHandler}/>
                </View>
                <FilterBar filterItems={filterItems}/>
                <View style={styles.equipments}>
                    <FlatList 
                        data={equipments}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <EquipmentItem 
                                name={item.name} 
                                department='department' 
                                model='model' 
                                make='make'
                                tag={item.asset_tag}
                                status='To be determined'
                                onPress={() => equipmentItemOnPressHandler(item)} />
                        )}
                    /> 
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },

    container: {
        flex: 1,
        padding: 5,
        alignItems: 'center'
    }
})