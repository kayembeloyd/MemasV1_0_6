import React, { useState, useEffect } from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function ScanScreen({ navigation }){
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    const [hasPermission, setHasPermission] = useState(null); 

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

    return (
        <View style={styles.container}>
            <Camera 
                style={{height: '100%', width: '100%'}} 
                type={type} 
                barCodeScannerSettings={{ barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr], }}
                onBarCodeScanned = {(d) => {
                    console.log("Barcode scanned")
                    console.log("d: ", d)
               }}>
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