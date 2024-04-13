import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import SavedScreen from "./screens/SavedScreen";
import BookingsScreen from "./screens/BookingsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SearchScreen from "./screens/SearchScreen";
import { NavigationContainer } from "@react-navigation/native";

export default function StackNavigator() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottomTab() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#daa520" />
              ) : (
                <AntDesign name="home" size={24} color="#daa520"/>
              ),
                            
          }}
        />

<Tab.Screen
          name="Saved"
          component={SavedScreen}
          options={{
            tabBarLabel: "Saved",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="heart" size={24} color="#daa520" />
              ) : (
                <AntDesign name="hearto" size={24} color="#daa520" />
              ),
          }}
        />

<Tab.Screen
          name="Bookings"
          component={BookingsScreen}
          options={{
            tabBarLabel: "Bookings",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="notifications-sharp" size={24} color="#daa520" />
              ) : (
                <Ionicons name="notifications-outline" size={24} color="#daa520" />
              ),
          }}
        />

<Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person-add" size={24} color="#daa520" />
              ) : (
                <Ionicons name="person-outline" size={24} color="#daa520" />
              ),
          }}
        />

      </Tab.Navigator>

      
    );
  }

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Main" component={BottomTab} options={{headerShown:false}} />
      <Stack.Screen name="Search" component={SearchScreen} options={{headerShown:false}} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
