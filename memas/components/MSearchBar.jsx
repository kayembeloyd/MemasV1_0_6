import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { MaterialIcons } from '@expo/vector-icons';

export default function MSearchBar (){
    return (
        <TouchableOpacity style={{
            width:'100%', 
            maxWidth: 500, 
            marginHorizontal: 16, 
            marginVertical: 7
        }}>
            <View style={styles.container}>
                <MaterialIcons style={ styles.searchIcon } name="search" size={24}  />
                <Text style={ styles.searchText }>Search</Text>
            </View>
        </TouchableOpacity>        
    )
}

const styles = StyleSheet.create({
    container: { 
        width: '100%',
        height: 53,
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
        backgroundColor: 'green',
        fontWeight: "500",
    }
})