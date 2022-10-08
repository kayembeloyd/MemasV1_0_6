import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, FlatList } from "react-native";

export default function FilterBar({ filterItems }) {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.filterItems}>
                    <FlatList 
                        keyExtractor={(item) => (item.id)}
                        data={filterItems}
                        renderItem={({ item }) => (
                            <TouchableOpacity>
                                <View style={styles.filterItem}>
                                    <Text style={styles.filterItemKey}>{item.key}</Text>
                                    <Text style={styles.filterItemValue}>{item.values[0]}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        horizontal={true}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#D9D9D9',
        width: '100%',
        alignItems: 'center',
        height:52,
    },

    filterItems: {
        flexDirection: 'row',
        backgroundColor: 'yellow',
        width: '100%',
        alignItems:'center',
        paddingLeft: 10,
    },

    filterItem: {
        backgroundColor: 'red',
    },

    scrollView:{
        height:52,
    },

    // FilterBar Item
    filterItem: {
        width: 110,
        alignItems: 'center'
    },

    filterItemKey: {
        fontSize:16,
        fontWeight: '400'
    },

    filterItemValue: {
        color: '#7B7B7B', 
        fontSize: 14,
    }
})