import React, { useState, useEffect } from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import MiddleManV2 from '../database/MiddleManV2';

export default function ScanScreen({ navigation }){
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    const [hasPermission, setHasPermission] = useState(null); 
    const [scanned, setScanned] = useState(false)

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };
    
        getBarCodeScannerPermissions();

        const unsubscribe = navigation.addListener('focus', () => {
            console.log('Scan Screen Opened'); 
            console.log('checking camera permissions')
            requestPermission()
        });

        return unsubscribe;
    }, [ navigation ]);

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
        console.log('Changed camera type to', type)
    } 

    const handleBarCodeScanned = (d) => {
        console.log("Barcode scanned")
        console.log("d: ", d)

        // Open the equipment screen 

        // Get the equipment

        // Check the code
        const scanned_code = d.data

        if (scanned_code.startsWith("MEMASCODE:")){
            const codes = scanned_code.split(':');
            const machine_code = codes[1]

            MiddleManV2.LGetEquipments().then((equipments) => {
                console.log('Scanned machine code: ', machine_code)
                
                const original_equipment_index = equipments.findIndex(original_equipment => original_equipment.asset_tag === machine_code)

                if (original_equipment_index === -1){
                    console.log('Search on the internet')

                    MiddleManV2.OLoadEquipmentAssetTag(machine_code).then((d) => {
                        const equipment = d;

                        console.log('Equipment loaded = ', equipment)

                        if (equipment){
                            console.log('detected an equipment')
                            console.log('Add to Local database')
                            MiddleManV2.LSaveEquipmentsPush(equipment).then((d) => {
                                console.log('resolve message: ', d)
                                
                                const item = equipment

                                navigation.navigate('EquipmentScreen', { item });
                            })
                        } else {
                            console.log('null equipment')
                        }

                    })
                } else {
                    console.log('Machine name = ', equipments[original_equipment_index].name)

                    const item = equipments[original_equipment_index]

                    navigation.navigate('EquipmentScreen', { item });
                }
            })
        } else {
            console.log('Invalid qr code')
        }

        setScanned(true)
    }

    return (
        <View style={styles.container}>
            <Camera 
                style={{height: '100%', width: '100%'}} 
                type={type} 
                barCodeScannerSettings={{ barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr], }}
                onBarCodeScanned = {scanned ? undefined : handleBarCodeScanned}>
            </Camera> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    }
})