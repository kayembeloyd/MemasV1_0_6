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
            MiddleManV2.LGetEquipments().then((d) => {
                d !== null ? setEquipments(d) : setEquipments([]);
            })

            // MiddleManV2.OTest();
            MiddleManV2.OLoadMoreEquipment(1).then((d) => {
                console.log({ d });
            })
            
            /* 
            MiddleMan.getData('equipments').then((d) => {
                d !== null ? setEquipments(d) : setEquipments([]);
            }) */
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