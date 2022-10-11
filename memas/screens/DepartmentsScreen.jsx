import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native';
import MSearchBar from '../components/custom/MSearchBar';

import DepartmentItem from '../components/DepartmentItem';

export default function DepartmentsScreen({ navigation }){
    return (
        <View style={styles.container}> 

            <ScrollView style={styles.scrollView}>
                <View style={{alignSelf:'center', width: '100%', alignItems: 'center'}}>
                    <MSearchBar hint='search departments' onPress={() => {navigation.navigate('DepartmentSearchScreen');}} placeHolder={"Search department"}/>
                </View>
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
        backgroundColor: 'white',
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
        alignSelf: 'center'
    },

    scrollView: {
        width: '100%'
    }
})