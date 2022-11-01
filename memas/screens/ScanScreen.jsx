import React, { useState, useEffect } from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera';

export default function ScanScreen({ navigation }){
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('Scan Screen Opened'); 
            console.log('checking camera permissions')
            requestPermission()
        });

        return unsubscribe;
    }, [ navigation ]);

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
        console.log('Changed camera type to', type)
    }

    return (
        <View style={styles.container}>
            {Platform.OS === 'web' ? 
                <Camera style={{height: '100%'}} type={type}>
                    <Text style={{color: 'white'}}>Scan Screen</Text>
                    <Text style={{color: 'white'}}>Platform = { Platform.OS }</Text>
                    <TouchableOpacity onPress={toggleCameraType}>
                        <Text style={{color: 'white'}}>Flip Camera</Text>
                    </TouchableOpacity>
                </Camera>

                : 
                
                <Camera style={{height: '100%'}} type={type}>
                    <Text style={{color: 'white'}}>Scan Screen</Text>
                    <Text style={{color: 'white'}}>Platform = { Platform.OS }</Text>
                    <TouchableOpacity onPress={toggleCameraType}>
                        <Text style={{color: 'white'}}>Flip Camera</Text>
                    </TouchableOpacity>
                </Camera>    
            }


            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
    }
})