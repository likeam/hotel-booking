import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons, AntDesign, FontAwesome5 } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={{
        backgroundColor: "#daa520",
        height: 65,
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-around"

    }}>
      <Pressable
        style={{
            flexDirection:"row",
            alignItems:"center",
            borderColor:"white",
            borderWidth:2,
            borderRadius:20,
            padding:6,
        }}
      >
      <Ionicons name="bed-outline" size={24} color="white" />
      <Text
         style={{
            marginRight:8,
            fontWeight:"bold",
            color:"white",
            fontSize: 15,
            marginLeft:2
        }}
      >Stays</Text>
      </Pressable>
      <Pressable
        style={{
            flexDirection:"row",
            alignItems:"center",
           
        }}
      >
      <Ionicons name="airplane-outline" size={24} color="white" />
      <Text
         style={{
            marginRight:8,
            fontWeight:"bold",
            color:"white",
            fontSize: 15,
            marginLeft:2
        }}
      >Flights</Text>
      </Pressable>
      <Pressable
        style={{
            flexDirection:"row",
            alignItems:"center",
           
        }}
      >
      <AntDesign name="car" size={24} color="white" />
      <Text
         style={{
            marginRight:8,
            fontWeight:"bold",
            color:"white",
            fontSize: 15,
            marginLeft:2
        }}
      >Car Rental</Text>
      </Pressable>
      <Pressable
        style={{
            flexDirection:"row",
            alignItems:"center",
            
        }}
      >
      <FontAwesome5 name="uber" size={24} color="white" />
      <Text
         style={{
            marginRight:8,
            fontWeight:"bold",
            color:"white",
            fontSize: 15,
            marginLeft:2
        }}
      >Taxi</Text>
      </Pressable>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})