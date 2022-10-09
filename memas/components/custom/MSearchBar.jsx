import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { MaterialIcons } from '@expo/vector-icons';

export default function MSearchBar ({ onPress, hint }){
    return (
        <TouchableOpacity style={{
            width:'100%', 
            maxWidth: 500, 
            marginVertical: 7
        }} onPress={onPress}>
            <View style={styles.container}>
                <MaterialIcons style={ styles.searchIcon } name="search" size={20}  />
                <Text style={ styles.searchText }>{hint}</Text>
            </View>
        </TouchableOpacity>        
    )
}

const styles = StyleSheet.create({
    container: { 
        width: '100%',
        height: 43,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth:500,
    },

    searchIcon:{
        color: "#888888",
        marginHorizontal: 15,
    },

    searchText: {
        flex: 1,
        color: "#888888",
        fontWeight: "500",
    }
})