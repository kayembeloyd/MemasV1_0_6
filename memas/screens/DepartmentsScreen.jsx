import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native';
import MSearchBar from '../components/custom/MSearchBar';

import DepartmentItem from '../components/DepartmentItem';

export default function DepartmentsScreen({ navigation }){
    return (
        <View style={styles.container}>
            
            <MSearchBar onPress={() => {navigation.navigate('DepartmentSearchScreen');}} placeHolder={"Search department"}/>

            <ScrollView style={styles.scrollView}>
                <View style={styles.departmentscontainer}>
                    <DepartmentItem fontAwesone5IconName="hospital" text="Last one"/>
                    <DepartmentItem fontAwesone5IconName="hospital" text="First one"/>
                    <DepartmentItem fontAwesone5IconName="hospital" text="First one"/>
                    <DepartmentItem fontAwesone5IconName="hospital" text="First one"/>
                    <DepartmentItem fontAwesone5IconName="hospital" text="First one"/>
                    <DepartmentItem fontAwesone5IconName="hospital" text="First one"/>
                    <DepartmentItem fontAwesone5IconName="hospital" text="First one"/>
                    <DepartmentItem fontAwesone5IconName="hospital" text="First one"/>
                    <DepartmentItem fontAwesone5IconName="hospital" text="First one"/>
                    <DepartmentItem fontAwesone5IconName="hospital" text="First one"/>
                    <DepartmentItem fontAwesone5IconName="hospital" text="First one"/>
                    <DepartmentItem fontAwesone5IconName="hospital" text="First one"/>
                    <DepartmentItem fontAwesone5IconName="hospital" text="First one"/>
                    <DepartmentItem fontAwesone5IconName="hospital" text="First one"/>
                    <DepartmentItem fontAwesone5IconName="hospital" text="First one"/>
                    <DepartmentItem fontAwesone5IconName="hospital" text="First one"/>
                    <DepartmentItem fontAwesone5IconName="hospital" text="First one"/>
                    <DepartmentItem fontAwesone5IconName="hospital" text="First one"/>
                    <DepartmentItem fontAwesone5IconName="hospital" text="First one"/>
                    <DepartmentItem fontAwesone5IconName="hospital" text="First one"/>
                    <DepartmentItem fontAwesone5IconName="hospital" text="First one"/>
                    <DepartmentItem fontAwesone5IconName="hospital" text="First one"/>
                    <DepartmentItem fontAwesone5IconName="hospital" text="First one"/>
                    <DepartmentItem fontAwesone5IconName="hospital" text="First one"/>
                    <DepartmentItem fontAwesone5IconName="hospital" text="First one"/>
                    <DepartmentItem fontAwesone5IconName="hospital" text="First one"/>
                    <DepartmentItem fontAwesone5IconName="hospital" text="First one"/>
                    <DepartmentItem fontAwesone5IconName="hospital" text="Last one"/>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },
    
    searchBarContainer: {
        width:'100%',
    },

    departmentscontainer : {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        maxWidth: 900,
        backgroundColor: 'grey',
        alignSelf: 'center'
    },

    scrollView: {
        width: '100%'
    }
})