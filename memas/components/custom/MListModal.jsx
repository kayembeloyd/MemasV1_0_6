import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, FlatList} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MButton from "./MButton";

export default function MListModal({ title, items, selectPress, onCancelPress }) {

    const [selectedItemIndex, setSelectedItemIndex] = useState(-1)

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.content}>
                    <View>
                        <FlatList 
                            data={items}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={ () => { selectPress(item.id) }}>        
                                    <View style={{paddingVertical: 15, paddingHorizontal: 5, marginVertical: 5, borderBottomWidth: 1, borderBottomColor: 'grey'}}><Text> {item.name} </Text></View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                    
                    <View style={styles.buttons}>
                        <MButton text='Cancel' onPress={onCancelPress}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'black',
        opacity: 0.7,
        zIndex:0,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    }, 

    content: {
        width: '100%', 
        maxWidth: 600,
        minWidth: 350,
        alignContent:'center',
        justifyContent: 'center',
        flexDirection: 'row', 
        backgroundColor: 'grey', 
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 10,
        elevation: 5,
        flexDirection:'column',
    }, 

    buttons: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        minWidth: 300,
        maxWidth: 600,
        alignSelf: 'center', 
        marginTop: 10,
    },

    title:{
        marginHorizontal: 20,
        marginBottom: 20,
        marginTop: 10,
        fontSize: 18
    }
})