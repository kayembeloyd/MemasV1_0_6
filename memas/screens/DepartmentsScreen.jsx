import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, View, FlatList } from 'react-native';
import MSearchBar from '../components/custom/MSearchBar';

import DepartmentItem from '../components/DepartmentItem';
import MiddleManV2 from '../database/MiddleManV2';

export default function DepartmentsScreen({ navigation }){

    const[departments, setDepartments] = useState([])

    const fxn = () => {
        if (2 == 2){
            return <DepartmentItem fontAwesone5IconName='hospital' text='zinthu zake'/>
        }
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('Departments screen loaded')

            console.log('Getting local departments...')
            MiddleManV2.LGetDepartments().then((d) => {
                console.log('Local departments = ', d)

                // set departments
                d !== null ? setDepartments(d) : setDepartments([])

                console.log('Getting departments from the web...')

                MiddleManV2.OLoadMoreDepartments().then((dd) => {
                    console.log('Departments from the web = ', dd)

                    if (dd){
                        MiddleManV2.LSaveDepartmentsReset(dd).then((ddd) => {
                            console.log(ddd)  
                        })

                        // set departments
                        dd !== null ? setDepartments(dd) : setDepartments([])
                    }
                })
            })
        });

        return unsubscribe;
    }, [ navigation ]);

    return (
        <View style={styles.container}> 
            <ScrollView style={styles.scrollView}>
                <View style={{alignSelf:'center', width: '100%', alignItems: 'center'}}>
                    <MSearchBar hint='search departments' onPress={() => {navigation.navigate('DepartmentSearchScreen');}} placeHolder={"Search department"}/>
                </View>
                <View style={styles.departmentscontainer}>
                    {
                        departments.map((department) => {
                            return (
                                <View key={department.id}>
                                    <DepartmentItem fontAwesone5IconName='hospital' text={department.name}/>
                                </View>
                            )
                        })
                    }
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