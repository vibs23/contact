import React, { useEffect, useState } from 'react'
import {View, Text, Flatlist} from 'react-native';
//import * as Contacts from 'expo-contacts';

export default MainScreen = () =>{
    const [contacts, setContacts] = useState();
    // useEffect(() => {
    //     (async() => {
    //     const {status} = await Contacts.requestPermissionsAsync();
    //     if(status === 'granted'){
    //         const { data } = await Contacts.getContactsAsync({
    //             fields : [Contacts.fields.Phonenumbers]
    //         })
    //         if(data.length>0){
    //             setContacts(data);
    //         }
    //     }
    //     })()
    // })
        return(
            <Flatlist
            style = {{width: '100%', padding: 20, marginTop: 50}}
            data = {contacts}
            keyExtractor = {item => item.id}
            renderItem = {({item}) => {
                return(
                    <View style = {{borderBottomWidth : 2}}>
                    <Text style = {{fontSize : 20, fontWeight : 'bold'}}>{item.name}</Text>
                    <Text style = {{fontSize : 17}}>{item.Phonenumbers && item.Phonenumbers[0] && item.Phonenumbers[0].number}</Text>   
                    </View>
                )
            }}
            />
        )
}




