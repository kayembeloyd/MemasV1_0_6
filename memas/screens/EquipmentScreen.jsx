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
                <Text style={{ fontSize: 18}}>{item.name} ({item.assetTag})</Text>
                <Text style={{ marginTop: 5, fontSize: 16}}>Canta (Model: VN-WS-08)</Text>
                <Image source={require('../assets/sample-qr-code.png')} style={{width: 63, height: 63, margin: 10}}/>
                <Text style={{ fontSize: 16}}>M01-0001</Text>
            </View>

            <ScrollView>
                <View style={styles.cardsContainer}>
                    <MCard cardTitle='Actions'>
                        <MButton text='Maintenance Logs' onPress={() => { navigation.navigate('MaintenanceLogsScreen2')}}/>
                        <MButton text='Corrective Maintenance' onPress={() => { navigation.navigate('AddMaintenanceLogScreen', { maintenanceType: 'corrective'}) }}/>
                        <MButton text='Preventive Maintenance' onPress={() => { navigation.navigate('AddMaintenanceLogScreen', { maintenanceType: 'Preventive'}) }}/>
                        <MFrozenInput />
                        <MFrozenInput />
                    </MCard>

                    <MCard cardTitle='Information'>
                        <View style={{marginVertical: 10}}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Information</Text>
                                <MaterialIcons name="edit" size={18} color="black" style={{marginHorizontal: 10}} />
                            </View>
                            <Text style={{fontWeight: '500'}}>Oxygen Concentration: <Text style={{fontWeight:'300'}}>dfewf</Text></Text>
                            <Text style={{fontWeight: '500'}}>Hour meter: <Text style={{fontWeight:'300'}}>dfewf</Text></Text>
                        </View>

                        <View style={{marginVertical: 10}}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Information</Text>
                                <MaterialIcons name="edit" size={18} color="black" style={{marginHorizontal: 10}} />
                            </View>
                            <Text style={{fontWeight: '500'}}>Oxygen Concentration: <Text style={{fontWeight:'300'}}>dfewf</Text></Text>
                            <Text style={{fontWeight: '500'}}>Hour meter: <Text style={{fontWeight:'300'}}>dfewf</Text></Text>
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