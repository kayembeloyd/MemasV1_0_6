import React from "react";
import { StyleSheet, View, Text, TextInput} from "react-native";


export default function MInput({ fieldName, fieldInitials, fieldValue , onChangeText }) {
    return (
        <View style={styles.container}>
            <Text style={styles.fieldName}>{fieldName}</Text>
            <View style={styles.fieldEntry}>
                <Text style={styles.fieldInitials}>{fieldInitials}</Text>
                <TextInput 
                    placeholder="tap to enter" 
                    style={styles.fieldInput} 
                    multiline={true} 
                    onChangeText={onChangeText} 
                    value={fieldValue}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '90%',
        minWidth: 300,
        maxWidth: 600,
        alignSelf: 'center',
        backgroundColor: 'red',
        borderRadius: 10,
        marginVertical: 8,
        paddingVertical: 10,
        paddingLeft: 20,
        paddingRight: 5,
    }, 

    fieldName: {
        marginBottom: 10,
        fontWeight: '500'
    },

    fieldEntry: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    fieldInitials: {
        marginRight: 10,
        fontWeight: '500'
    },
    
    fieldInput: {
        paddingVertical: 5,
        flex: 1
    },
})