import React, { useState } from 'react'
import { FlatList, Modal, ScrollView, StyleSheet, Text, View } from 'react-native';

import MButton from '../components/custom/MButton';
import MCard from '../components/custom/MCard';
import MInput from '../components/custom/MInput';
import MInputModal from '../components/custom/MInputModal';
import MiddleMan from '../database/MiddleMan';
import MiddleManV2 from '../database/MiddleManV2';

export default function AddEquipmentScreen(){

    const equipment = {}

    // Equipment variables
    const [equipmentName, setEquipmentName] = useState('')
    const [equipmentDepartment, setEquipmentDepartment] = useState('')
    const [technicalSpecifications, setTechnicalSpecifications] = useState([])

    const [technicalSpecificationsAddModalVisibility, setTechnicalSpecificationsAddModalVisibility] = useState(false) 
    return (
        <View style={styles.container}>
            <Modal visible={technicalSpecificationsAddModalVisibility}>
                <MInputModal 
                    title='Add Specification'
                    onAddPress={({keyI, valueI}) => {
                        setTechnicalSpecifications((prevTechnicalSpecifications) => {
                            prevTechnicalSpecifications.push({
                                id:prevTechnicalSpecifications.length > 0 ? prevTechnicalSpecifications[prevTechnicalSpecifications.length - 1].id + 1 : 0,
                                name:keyI,
                                value:valueI
                            });
                            return prevTechnicalSpecifications;
                        });

                        setTechnicalSpecificationsAddModalVisibility(false)
                    }}
                    onCancelPress={() => {setTechnicalSpecificationsAddModalVisibility(false)}}/>
            </Modal>

            <ScrollView>
                <View style={styles.cardsContainer}>
                    <MCard cardTitle='General information'>
                        <MInput fieldName="Equipment name" fieldInitials="EN"
                            onChangeText={((t) => {
                                setEquipmentName(t)
                            })} />                      
                        <MInput fieldName="Department" fieldInitials="D"
                            onChangeText={((t) => {
                                setEquipmentDepartment(t)
                            })} />                      
                    </MCard>

                    <MCard cardTitle='Technical Specifications'>
                        <FlatList
                            keyExtractor={(item) => (item.id)}
                            data={technicalSpecifications}
                            renderItem={({ item }) => (
                                <MInput fieldName={item.name} fieldInitials="D" fieldValue={item.value} 
                                    onChangeText={((t) => {
                                        setTechnicalSpecifications((prevTechnicalSpecifications) => {
                                            const index = prevTechnicalSpecifications.findIndex(spec => spec.id === item.id);
                                            prevTechnicalSpecifications[index].value = t
                                            return prevTechnicalSpecifications;
                                        });             
                                    })}/> 
                            )}  
                        />                     

                        <MButton text='add specification' onPress={() => {
                            setTechnicalSpecificationsAddModalVisibility(true)
                        }}/> 
                    </MCard>
                </View>

                <View style={styles.buttonContainer}>
                    <MButton text='add equipment' onPress={() => {
                    
                        equipment.equipmentName = equipmentName
                        equipment.equipmentDepartment = equipmentDepartment
                        equipment.technicalSpecifications = technicalSpecifications
                        
                        MiddleManV2.LSaveEquipmentsPush(equipment) 
                    }}/>
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        backgroundColor: 'white',
    },
    cardsContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
        width: '100%',
        padding: 5,
        marginTop: 5,
    },
    buttonContainer: {
        width: '70%',
        maxWidth: 500,
        alignSelf: 'center',
    }
})