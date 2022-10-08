import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import MButton from '../components/custom/MButton';

import MSearchBar from '../components/custom/MSearchBar';
import EquipmentItem from '../components/EquipmentItem';
import FilterBar from '../components/FilterBar';
import MiddleMan from '../database/MiddleMan';

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

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('Equipments Screen opened');
            MiddleMan.getData('equipments').then((d) => {
                console.log(d)
                d !== null ? setEquipments(d) : setEquipments([]);
            })
        });

        return unsubscribe;
    }, [ navigation ]);

    return (
        <View style={styles.mainContainer}>
            <ScrollView stickyHeaderIndices={[1]} stickyHeaderHiddenOnScroll={true}>
                <View style={styles.container}>
                    <MSearchBar/>
                    <MButton text='add equipment' onPress={addEquipmentOnPressHandler}/>
                </View>
                <FilterBar filterItems={filterItems}/>
                <View style={styles.equipments}>
                    <FlatList 
                        data={equipments}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <EquipmentItem 
                                name={item.equipmentName} 
                                department={item.department} 
                                model='model' 
                                tag='tag'
                                status='To be determined' />
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
        backgroundColor: 'red'
    },

    container: {
        flex: 1,
        padding: 5,
        backgroundColor: 'blue',
        alignItems: 'center'
    }
})