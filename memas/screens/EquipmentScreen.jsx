import React, { useEffect } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import MButton from '../components/custom/MButton';
import MFrozenInput from '../components/custom/MFrozenInput';
import MCard from '../components/custom/MCard';

export default function EquipmentScreen({ route, navigation }){
    
    const {item} = route.params;

    return (
        <View style={styles.container}>
            <View style={{margin: 10,}}>
                <Text style={{ fontSize: 18}}>{item.equipmentName} ({item.equipmentDepartment})</Text>
                <Text>Canta (Model: VN-WS-08)</Text>
                <Image source={require('../assets/sample-qr-code.png')} style={{width: 63, height: 63, margin: 10}}/>
                <Text>M01-0001</Text>
            </View>

            <ScrollView>
                <View style={styles.cardsContainer}>
                    <MCard cardTitle='Actions'>
                        <MButton text='Corrective Maintenance'/>
                        <MButton text='Preventive Maintenance'/>
                        <MFrozenInput />
                        <MFrozenInput />
                    </MCard>

                    <MCard cardTitle='Information'>
                        <View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{ fontWeight: 'bold' }}>Information</Text>
                                <MaterialIcons name="edit" size={24} color="black" />
                            </View>
                            <Text>Oxygen Concentration</Text>
                            <Text>Hour meter</Text>
                        </View>

                        <View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{ fontWeight: 'bold' }}>Information</Text>
                                <MaterialIcons name="edit" size={24} color="black" />
                            </View>
                            <Text>Oxygen Concentration</Text>
                            <Text>Hour meter</Text>
                        </View>
                    </MCard>

                    <MCard cardTitle='Other Infomation'>
                        <MFrozenInput />
                        <MFrozenInput />
                    </MCard>
                </View>    
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    cardsContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
        backgroundColor: 'green',
        width: '100%',
        padding: 5,
        marginTop: 5,
    }, 
})