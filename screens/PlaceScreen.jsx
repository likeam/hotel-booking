import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Octicons, Ionicons, FontAwesome5 } from '@expo/vector-icons';

const PlaceScreen = () => {

  const route = useRoute();
  const navigation = useNavigation();
  const [modalVisibile, setModalVisibile] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState([]);
  console.log(route.params.selectedDates.endDate);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Popular Places",

      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginLeft: 145,
      },
      headerStyle: {
        backgroundColor: "#daa520",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      
    });
  }, []);

  return (
    <View>
      <Pressable   style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          padding: 12,
          backgroundColor: "white",
        }}
      >
        <Pressable
          onPress={() =>setModalVisibile(!modalVisibile)}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Octicons name="arrow-switch" size={24} color="gray" />
          <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 8 }} >Sort</Text>
        </Pressable>
        <Pressable   style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons name="filter" size={24} color="gray" />
        <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 8 }}>
            Filter
          </Text>
        </Pressable>
        <Pressable   style={{ flexDirection: "row", alignItems: "center" }}>
        <FontAwesome5 name="map-marked-alt" size={24} color="gray"  />
        <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 8 }}>
            Map
          </Text>
        </Pressable>
      </Pressable>
      <ScrollView>
        
      </ScrollView>
    </View>
  )
}

export default PlaceScreen

const styles = StyleSheet.create({})