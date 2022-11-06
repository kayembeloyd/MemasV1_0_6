import React, { useEffect } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import QRCode from 'react-native-qrcode-svg';

import MButton from '../components/custom/MButton';
import MFrozenInput from '../components/custom/MFrozenInput';
import MCard from '../components/custom/MCard';

export default function EquipmentScreen({ route, navigation }){
    
    const {item} = route.params;

    return (
        <View style={styles.container}>
            <View style={{margin: 10,}}>
                <Text style={{ fontSize: 18}}>{item.name} ({item.asset_tag})</Text>
                <Text style={{ marginTop: 5, fontSize: 16}}>{item.make} (Model: {item.model})</Text>
                
                <QRCode
                    style={{margin:10, width: 63, height: 63, margin: 10}}
                    value={item.asset_tag} />
                
                <Text style={{ fontSize: 16}}>{item.asset_tag}</Text>
            </View>

            <ScrollView>
                <View style={styles.cardsContainer}>
                    <MCard cardTitle='Actions'>
                        <MButton text='Maintenance Logs' onPress={() => { 
                            navigation.navigate('MaintenanceLogsScreen2', { filtering: 'on', filterEquipment: item })
                        }}/>
                        <MButton text='Corrective Maintenance' onPress={() => { navigation.navigate('AddMaintenanceLogScreen', { equipment: item, maintenanceType: 'corrective'}) }}/>
                        <MButton text='Preventive Maintenance' onPress={() => { navigation.navigate('AddMaintenanceLogScreen', { equipment: item, maintenanceType: 'Preventive'}) }}/>
                        <MFrozenInput title='Serviced on' text='getLastMaintenanceDate()'/>
                        <MFrozenInput title='Next Service on' text='getNextMaintenaceDate()'/>
                    </MCard>

                    <MCard cardTitle='Information'>
                        <View style={{marginVertical: 10}}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>General Information</Text>
                                <MaterialIcons name="edit" size={18} color="black" style={{marginHorizontal: 10}} />
                            </View>
                            <Text style={{fontWeight: '500'}}>Name: <Text style={{fontWeight:'300'}}>{item.name}</Text></Text>
                            <Text style={{fontWeight: '500'}}>Make: <Text style={{fontWeight:'300'}}>{item.make}</Text></Text>
                            <Text style={{fontWeight: '500'}}>Model: <Text style={{fontWeight:'300'}}>{item.model}</Text></Text>
                            <Text style={{fontWeight: '500'}}>Department: <Text style={{fontWeight:'300'}}>{item.department}</Text></Text>
                        </View>

                        <View style={{marginVertical: 10}}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Technical Specifications</Text>
                                <MaterialIcons name="edit" size={18} color="black" style={{marginHorizontal: 10}} />
                            </View>
                            {
                                item.technical_specifications.map((technical_specifcation) => {
                                    return (
                                        <Text key={technical_specifcation.id} style={{fontWeight: '500'}}>
                                            {technical_specifcation.specification_name}: 
                                            <Text style={{fontWeight:'300'}}>{technical_specifcation.specification_value}</Text>
                                        </Text>
                                    )
                                })
                            }
                        </View>
                    </MCard>

                    <MCard cardTitle='Other Infomation'>
                        <MFrozenInput title="Commision Date" text={item.commission_date}/>
                        <MFrozenInput title="Supplied by" text={item.supplied_by}/>
                    </MCard>
                </View>    
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    cardsContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
        width: '100%',
        marginTop: 25,
    }, 
})