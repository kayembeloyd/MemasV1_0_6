import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import MFrozenInput from '../components/custom/MFrozenInput';
import { MaterialIcons } from '@expo/vector-icons';

export default function MaintenanceLogScreen(){
    return (
        <View style={{flex:1, backgroundColor: 'white'}}>
            <View style={{maxWidth:360, paddingLeft:10}}><MFrozenInput /></View>
            <ScrollView style={{height:'100%'}}>
                <View style={styles.container}>
                    <View style={styles.calendarContainer}>
                        <View style={{margin: 10,}}>
                            <Text style={{ fontSize: 18}}>Equipment name</Text>
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
                    </View>
                    <View style={styles.scheduleContainer}>
                        <MFrozenInput />  
                    </View>
                </View>
            </ScrollView>
            
        </View>
        
    )
}

const styles = StyleSheet.create({
     container: {
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        padding: 2,
        justifyContent: 'center'
    },

    calendarContainer: {
        width: 360,
    },

    scheduleContainer:{
        flex:1,
        minWidth: 360,
        marginTop: 13,
        paddingHorizontal: 10
    }
})