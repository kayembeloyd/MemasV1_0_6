import React, { useEffect, useState } from 'react'
import { FlatList, Modal, ScrollView, StyleSheet, View } from 'react-native';
import MButton from '../components/custom/MButton';
import MListModal from '../components/custom/MListModal';

import MSearchBar from '../components/custom/MSearchBar';
import EquipmentItem from '../components/EquipmentItem';
import FilterBar from '../components/FilterBar';
import MiddleMan from '../database/MiddleMan';
import MiddleManV2 from '../database/MiddleManV2';

export default function EquipmentsScreen({ navigation }){
    const [filterItems, setFilterItems] = useState([
        { id:1, key:'Department', values:[ 'all' ]},
        { id:2, key:'Make', values:[ 'all' ] },            
        { id:3, key:'Status', values:[ 'all' ] },            
    ])

    const [activeDepartmentFilter, setActiveDepartmentFilter] = useState('all')

    const [departments, setDepartments] = useState([])
    const [equipments, setEquipments] = useState([]) 
    const [departmentsFilterModalVisibility, setDepartmentsFilterModalVisibility] = useState(false)

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

            console.log('Getting local departments')
            MiddleManV2.LGetDepartments().then((d) => {

                var dCopy = [];

                dCopy.push({
                    id: '0',
                    name: 'all',
                    oid: '0'
                })

                d.forEach(element => {
                    dCopy.push(element)
                });

                console.log('dCopy: ', dCopy)
                
                dCopy !== null ? setDepartments(dCopy) : setDepartments([])
            })
        });

        return unsubscribe;
    }, [ navigation ]);

    return (
        <View style={styles.mainContainer}>
            <ScrollView stickyHeaderIndices={[1]} stickyHeaderHiddenOnScroll={true}>
                
                <Modal visible={departmentsFilterModalVisibility}>
                    <MListModal
                        title="Select Department"
                        items={departments}
                        selectPress={(selectedIndex) => {
                            setFilterItems((oldFilterItems) => {
                                var oldFilterItemsCopy = oldFilterItems
                                oldFilterItems[0].values[0] = departments[selectedIndex].name
                                return oldFilterItemsCopy
                            })
                            // setActiveDepartmentFilter(departments[selectedIndex])
                            setDepartmentsFilterModalVisibility(false)
                        }}
                        onCancelPress={()=>{ setDepartmentsFilterModalVisibility(false) }}
                    />
                </Modal>


                <View style={styles.container}>
                    <MSearchBar hint='search equipment'/>
                    <MButton text='add equipment' onPress={addEquipmentOnPressHandler}/>
                </View>
                <FilterBar filterItems={filterItems} onItemPress={(filterItem) => {
                    switch (filterItem.key) {
                        case 'Department':
                            console.log('Loaded departments : ', departments)
                            setDepartmentsFilterModalVisibility(true)
                            break;
                        default:
                            console.log("Other button pressed")
                            break;
s                   } 
                 }}/>

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