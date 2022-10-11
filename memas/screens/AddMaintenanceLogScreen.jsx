import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import MCard from '../components/custom/MCard';
import MInput from '../components/custom/MInput';
import MButton from '../components/custom/MButton';

export default function AddMaintenanceLogScreen({ route, navigation }){
    const { maintenanceType } = route.params;

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>Add Maintenance Log Screen  @{ maintenanceType }</Text>
                <View style={styles.cardsContainer}>
                    <MCard cardTitle="Information">
                        <View style={{margin: 10,}}>
                            <Text style={{ fontSize: 18}}>item.equipmentName (item.equipmentDepartment)</Text>
                            <Text style={{ marginTop: 5, fontSize: 16}}>Canta (Model: VN-WS-08)</Text>
                            <Image source={require('../assets/sample-qr-code.png')} style={{width: 63, height: 63, margin: 10}}/>
                            <Text style={{ fontSize: 16}}>M01-0001</Text>
                        </View>

                        <View style={{marginVertical: 10,}}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Information</Text>
                                <MaterialIcons name="edit" size={18} color="black" style={{marginHorizontal: 10}} />
                            </View>
                            <Text style={{fontWeight: '500'}}>Oxygen Concentration: <Text style={{fontWeight:'300'}}>dfewf</Text></Text>
                            <Text style={{fontWeight: '500'}}>Hour meter: <Text style={{fontWeight:'300'}}>dfewf</Text></Text>
                        </View>
                    </MCard>
                    <MCard cardTitle='Maintenance description'>
                        <MInput fieldName='Description' fieldInitials='MD'/> 
                    </MCard>
                </View>
                <MButton text='Done'/>
            </View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },

    cardsContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
        width: '100%',
        marginTop: 42,
    },
})