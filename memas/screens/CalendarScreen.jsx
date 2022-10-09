import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import MButton from '../components/custom/MButton';
import MCard from '../components/custom/MCard';
import ScheduleDateItem from '../components/ScheduleDateItem';

export default function CalendarScreen(){
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.calendarContainer}>
                    <Calendar style={{marginBottom: 13}}/>
                    <MButton text='Add Equipment Service Schedule'/>
                    <MButton text='Add task'/>
                </View>
                <View style={styles.scheduleContainer}>
                    <MCard cardTitle='Schedule'>
                        <ScheduleDateItem />
                        <ScheduleDateItem />
                        <ScheduleDateItem />
                        <ScheduleDateItem />
                    </MCard>
                </View>
            </View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        padding: 2,
        justifyContent: 'center'
    },

    calendarContainer: {
        width: 360,
    },

    scheduleContainer:{
        flex:1,
        minWidth: 360,
        marginTop: 13,
    }

})