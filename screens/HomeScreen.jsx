import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Feather } from "@expo/vector-icons";
import Header from "../components/Header";
import DatePicker from "react-native-date-ranges";
import {
  BottomModal,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";

const HomeScreen = () => {
  const navigation = useNavigation();

  const [selectedDates, useSelectedDates] = useState();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [child, setChild] = useState(2);
  const [modalVisibile, setModalVisibile] = useState(false);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "BOOKING'S",

      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginLeft: 95,
      },
      headerStyle: {
        backgroundColor: "#daa520",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 12 }}
        />
      ),
    });
  }, []);

  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: { width: "80%", marginHorizontal: "3%" },
          text: { fontSize: 20 },
        }}
        primary
        title="Submit"
      />
    );
  };
  return (
    <>
      <View>
        <Header />
        <ScrollView>
          <View
            style={{
              margin: 20,
              borderColor: "#FFC72C",
              borderWidth: 3,
              borderRadius: 6,
            }}
          >
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
              <Ionicons name="search" size={24} color="black" />
              <TextInput placeholder="Enter your Destination" />
            </Pressable>
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
              <Feather name="calendar" size={24} color="black" />

              <DatePicker
                style={{
                  width: 350,
                  height: 30,
                  borderRadius: 0,
                  borderWidth: 0,
                  borderColor: "transparent",
                }}
                customStyles={{
                  placeholderText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                  headerStyle: {
                    backgroundColor: "#daa520",
                  },
                  contentText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                }}
                selectedBgColor="#daa520"
                customButton={(onConfirm) => customButton(onConfirm)}
                onConfirm={(startDate, endDate) =>
                  useSelectedDates(startDate, endDate)
                }
                allowFontScaling={false}
                placeholder={"Select Your Dates"}
                mode={"range"}
                placeholderTextColor={"black"}
              />
            </Pressable>
            <Pressable
              onPress={() => setModalVisibile(!modalVisibile)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
              <Ionicons name="person-outline" size={24} color="black" />
              <TextInput
                placeholderTextColor={"red"}
                placeholder={`${rooms} Room ${adults} Adults, ${child} Children`}
              />
            </Pressable>
            <Pressable
              style={{
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
                backgroundColor: "#daa520",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 15,
                  color: "white",
                  fontWeight: "800",
                }}
              >
                Search
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisibile(!modalVisibile)}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              style={{
                marginBottom: 20,
                color: "white",
                backgroundColor: "#daa520",
              }}
              onPress={() => setModalVisibile(!modalVisibile)}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Select rooms and guest" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisibile(!modalVisibile)}
        visible={modalVisibile}
        onTouchOutside={() => setModalVisibile(!modalVisibile)}
      >
        <ModalContent style={{ width: "100%", height: 310 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Rooms</Text>
            <Pressable 
            onPress={() => setRooms(Math.max(1, rooms-1)) }
            style={{
              width:26,
              height:26,
              borderRadius:13,
              borderColor:"#BEBEBE",
              backgroundColor:"#B0B0B0",
            }}
            >
              <Text
                style={{
                  textAlign:"center",
                  fontSize: 20,
                  fontWeight:"600",
                  paddingHorizontal:6,
                }}
              >-</Text>
            </Pressable>
            <Pressable>
              <Text
                style={{
                  textAlign:"center",
                  fontSize: 20,
                  fontWeight:"600",
                  paddingHorizontal:6,
                }}
              >
                {rooms}
              </Text>
            </Pressable>
            <Pressable
               onPress={() => setRooms((c)=> c + 1 )}
               style={{
                 width:26,
                 height:26,
                 borderRadius:13,
                 borderColor:"#BEBEBE",
                 backgroundColor:"#B0B0B0",
               }}
            >
              <Text
                 style={{
                  textAlign:"center",
                  fontSize: 20,
                  fontWeight:"600",
                  paddingHorizontal:6,
                }}
              >+</Text>
            </Pressable>
            
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Adults</Text>
            <Pressable 
            onPress={() => setAdults(Math.max(1, rooms-1)) }
            style={{
              width:26,
              height:26,
              borderRadius:13,
              borderColor:"#BEBEBE",
              backgroundColor:"#B0B0B0",
            }}
            >
              <Text
                style={{
                  textAlign:"center",
                  fontSize: 20,
                  fontWeight:"600",
                  paddingHorizontal:6,
                }}
              >-</Text>
            </Pressable>
            <Pressable>
              <Text
                style={{
                  textAlign:"center",
                  fontSize: 20,
                  fontWeight:"600",
                  paddingHorizontal:6,
                }}
              >
                {adults}
              </Text>
            </Pressable>
            <Pressable
               onPress={() => setAdults((c)=> c + 1 )}
               style={{
                 width:26,
                 height:26,
                 borderRadius:13,
                 borderColor:"#BEBEBE",
                 backgroundColor:"#B0B0B0",
               }}
            >
              <Text
                 style={{
                  textAlign:"center",
                  fontSize: 20,
                  fontWeight:"600",
                  paddingHorizontal:6,
                }}
              >+</Text>
            </Pressable>
            
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Children</Text>
            <Pressable 
            onPress={() => setChild(Math.max(1, rooms-1)) }
            style={{
              width:26,
              height:26,
              borderRadius:13,
              borderColor:"#BEBEBE",
              backgroundColor:"#B0B0B0",
            }}
            >
              <Text
                style={{
                  textAlign:"center",
                  fontSize: 20,
                  fontWeight:"600",
                  paddingHorizontal:6,
                }}
              >-</Text>
            </Pressable>
            <Pressable>
              <Text
                style={{
                  textAlign:"center",
                  fontSize: 20,
                  fontWeight:"600",
                  paddingHorizontal:6,
                }}
              >
                {child}
              </Text>
            </Pressable>
            <Pressable
               onPress={() => setChild((c)=> c + 1 )}
               style={{
                 width:26,
                 height:26,
                 borderRadius:13,
                 borderColor:"#BEBEBE",
                 backgroundColor:"#B0B0B0",
               }}
            >
              <Text
                 style={{
                  textAlign:"center",
                  fontSize: 20,
                  fontWeight:"600",
                  paddingHorizontal:6,
                }}
              >+</Text>
            </Pressable>
            
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
