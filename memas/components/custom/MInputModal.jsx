import React, { useState } from "react";
import { StyleSheet, View, Text} from "react-native";
import MButton from "./MButton";
import MInput from "./MInput";

export default function MInputModal({ title, onAddPress, onCancelPress}) {

    const [keyI, setKeyI] = useState('');
    const [valueI, setValueI] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <MInput fieldName='key' fieldInitials='C' onChangeText={(t) => { setKeyI(t) }}/>
                <MInput fieldName='value' fieldInitials='C' onChangeText={(t) => { setValueI(t) }}/>
                <View style={styles.buttons}>
                    <MButton text='add' onPress={() => onAddPress({ keyI, valueI})}/>
                    <MButton text='cancel' onPress={onCancelPress}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'black',
        opacity: 0.7,
        zIndex:0,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    }, 

    content: {
        width: '100%', 
        maxWidth: 400,
        alignContent:'center',
        justifyContent: 'center',
        flexDirection: 'row', 
        backgroundColor: 'grey', 
        flexWrap: 'wrap',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 10,
        elevation: 5
    }, 

    buttons: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        minWidth: 300,
        maxWidth: 600,
        alignSelf: 'center', 
    },

    title:{
        marginHorizontal: 20,
        marginBottom: 20,
        marginTop: 10,
        fontSize: 18
    }
})