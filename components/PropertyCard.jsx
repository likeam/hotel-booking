import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'




const PropertyCard = ({rooms, children,  property, adults, selectedDates, availableRooms}) => {

    const navigation = useNavigation();
    const {height, width} = Dimensions.get("window");

    console.log(rooms);
    

  return (
    <View>
      <Text>PropertyCard</Text>
    </View>
  )
}

export default PropertyCard

const styles = StyleSheet.create({})