import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function ScheduleDateTaskItem() {
    return (
        <View style={ styles.container }>
            <Text style={styles.taskTime}>Any time</Text>
            <Text style={styles.taskDesc}>Oxygen concentrator, M001-0003 nursergthrhtrht5y ward</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginVertical: 5,
    },
    taskTime:{
        width:70,
    },
    taskDesc:{
        flex:1,
        flexWrap: 'wrap',
        marginLeft: 10,
    },     
})