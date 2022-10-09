import React from "react";
import { StyleSheet, View, Text } from "react-native";

import ScheduleDateTaskItem from './ScheduleDateTaskItem'

export default function ScheduleDateItem() {
    return (
        <View style={ styles.container }>
            <Text style={styles.dateHeader}>22 September 2022</Text>
            <View style={styles.taskItemsContainer}>
                <ScheduleDateTaskItem />
                <ScheduleDateTaskItem />
                <ScheduleDateTaskItem />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 15,
    },     
    taskItemsContainer:{
        marginLeft: 10,
    },
    dateHeader:{
        fontSize: 18,
        marginBottom: 15,
    }
})