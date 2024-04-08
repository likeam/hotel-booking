import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function StackNavigator() {

    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    function BottomTab(){
        return (
            <Tab.Navigator>
                
            </Tab.Navigator>
        )
    }


  return (
    <View>
      <Text>StackNavigator</Text>
    </View>
  )
}

const styles = StyleSheet.create({})