import React, { useState } from 'react'
import { FlatList, Modal, ScrollView, StyleSheet, Text, View } from 'react-native';

import NetInfo from "@react-native-community/netinfo";

import MButton from '../components/custom/MButton';
import MCard from '../components/custom/MCard';
import MInput from '../components/custom/MInput';
import MInputModal from '../components/custom/MInputModal';
import MiddleMan from '../database/MiddleMan';
import MiddleManV2 from '../database/MiddleManV2';

export default function AddEquipmentScreen(){

    const equipment = {}

    // Equipment variables
    // Automatic
    const [id, setID] = useState(0)
    const [oid, setOID] = useState(0)
    const [createdAt, setCreatedAt] = useState('')
    const [updatedAt, setUpdatedAt] = useState('')
    // manual
    const [name, setName] = useState('')
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')
    const [serialNumber, setSerialNumber] = useState('')
    const [assetTag, setAssetTag] = useState('')
    const [department, setDepartment] = useState('')
    const [commisionDate, setCommisionDate] = useState('')
    const [suppliedBy, setSuppliedBy] = useState('')
    const [technicalSpecifications, setTechnicalSpecifications] = useState([])
    const [equipmentSpecificEditableInfos, setEquipmentSpecificEditableInfos] = useState([])

    const [technicalSpecificationsAddModalVisibility, setTechnicalSpecificationsAddModalVisibility] = useState(false) 
    const [equipmentSpecificEditableInfosAddModalVisibility, setEquipmentSpecificEditableInfosAddModalVisibility] = useState(false) 

    return (
        <View style={styles.container}>
            <Modal visible={technicalSpecificationsAddModalVisibility}>
                <MInputModal 
                    title='Add Specification'
                    onAddPress={({keyI, valueI}) => {
                        setTechnicalSpecifications((prevTechnicalSpecifications) => {
                            prevTechnicalSpecifications.push({
                                id:prevTechnicalSpecifications.length > 0 ? prevTechnicalSpecifications[prevTechnicalSpecifications.length - 1].id + 1 : 0,
                                equipment_id:0,
                                specification_name:keyI,
                                specification_value:valueI
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
                                setName(t)
                            })} />                      

                        <MInput fieldName="Make" fieldInitials="M"
                            onChangeText={((t) => {
                                setMake(t)
                            })} />                                              
                        
                        <MInput fieldName="Model" fieldInitials="M"
                            onChangeText={((t) => {
                                setModel(t)
                            })} />                                              
                        
                        <MInput fieldName="Serial Number" fieldInitials="SN"
                            onChangeText={((t) => {
                                setSerialNumber(t)
                            })} />                                              
                        
                        <MInput fieldName="Asset tag" fieldInitials="AT"
                            onChangeText={((t) => {
                                setAssetTag(t)
                            })} />       
                    </MCard>

                    <MCard cardTitle='Other information'>
                        <MInput fieldName="Department" fieldInitials="EN"
                            onChangeText={((t) => {
                                setDepartment(t)
                            })} />                      

                        <MInput fieldName="Commision Date" fieldInitials="M"
                            onChangeText={((t) => {
                                setCommisionDate(t)
                            })} />                                              
                        
                        <MInput fieldName="Supplied by" fieldInitials="M"
                            onChangeText={((t) => {
                                setSuppliedBy(t)
                            })} />       
                    </MCard>

                    <MCard cardTitle='Technical Specifications'>
                        <FlatList
                            keyExtractor={(item) => (item.id)}
                            data={technicalSpecifications}
                            renderItem={({ item }) => (
                                <MInput fieldName={item.specification_name} fieldInitials="D" fieldValue={item.specification_value} 
                                    onChangeText={((t) => {
                                        setTechnicalSpecifications((prevTechnicalSpecifications) => {
                                            const index = prevTechnicalSpecifications.findIndex(spec => spec.id === item.id);
                                            prevTechnicalSpecifications[index].specification_value = t
                                            return prevTechnicalSpecifications;
                                        });             
                                    })}/> 
                            )}  
                        />                     

                        <MButton text='add specification' onPress={() => {
                            setTechnicalSpecificationsAddModalVisibility(true)
                        }}/> 
                    </MCard>

                    <MCard cardTitle='Equipment Specific editable info'>
                        <MButton text='add info' onPress={() => {

                        }}/> 
                    </MCard>
                </View>

                <View style={styles.buttonContainer}>
                    <MButton text='add equipment' onPress={() => {

                        // 2022-10-26 13:27:00
                        // 2022-10-28T16:08:22.021Z
                        var today = new Date().toISOString()
                        var splitDate = today.split("T")
                        var splitTime = splitDate[1].split(".")
                        var requiredDate = splitDate[0] + " " + splitTime[0]
                    
                        equipment.oid = 0
                        equipment.created_at = requiredDate 
                        equipment.updated_at = requiredDate 

                        equipment.name = name
                        equipment.make = make
                        equipment.model = model
                        equipment.serial_number = serialNumber
                        equipment.asset_tag = assetTag

                        equipment.department = department
                        equipment.commission_date = commisionDate
                        equipment.supplied_by = suppliedBy
                        
                        equipment.technical_specifications = technicalSpecifications
                        // equipment.equipmentSpecificEditableInfos = equipmentSpecificEditableInfos
                        
                        MiddleManV2.LSaveEquipmentsPush(equipment).then((d) => {
                            console.log(d + ": Starting to sync")
                            NetInfo.fetch().then(state => {
                                if (state.type){
                                    MiddleManV2.Sync().then((result) => { /*console.log(result)*/ })
                                }
                            });
                        })
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