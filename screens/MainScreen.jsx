import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Detail from "./Detail";
import Discover from "./Discover";
import Product from "./Product";
import HomeScreen from "./HomeScreen";
import OnboardingScreen from "./Onboarding";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeName = "HomeScreen"
const DetailName = "Detail";
const DiscoverName = "Discover";
const ProductName = "Product";
const OnboardingName ="OnboardingScreen"

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function MainScreen() {
  const[firstScreen,setFirstScreen] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLanched").then((value) => {
      if (value === null) {
        AsyncStorage.setItem("alreadyLanched", "true");
        setFirstScreen(true);
      } else {
        setFirstScreen(false);
      }
    });
  },[]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName={HomeName}
        // screenOptions={({ route }) => ({
            
        //   tabBarIcon: ({ focused, color, size }) => {
        //     let iconName;
        //     let rn = route.name;

        //     if (rn === HomeName) {
        //       iconName = focused ? "home" : "home-outline";
        //     }else if (rn === DiscoverName) {
        //         iconName = focused ? "airplane" : "airplane-outline";
        //       }  
        //     else if (rn === DetailName) {
        //       iconName = focused ? "list" : "list-outline";
        //     } else if (rn === ProductName) {
        //       iconName = focused ? "cube" : "cube-outline";
        //     }

        //     return <Ionicons name={iconName} size={size} color={color} />;
        //   },
        // })}
        // tabBarOptions={{
        //     activeTintColor:"tomato",
        //     inactiveTintColor:"grey",
        //     labelStyle:{paddingBottom:10,fontSize:10},
        //     style:{padding:10,height:70},
            
        // }}
      >
        {!firstScreen && (
            <Stack.Screen option ={{headerShown:false}}  name={OnboardingName} component={OnboardingScreen} />
          )
        }
      
        <Stack.Screen option ={{headerShown:false}}  name={HomeName} component={HomeScreen} />
        <Stack.Screen name={DiscoverName} component={Discover} />
        <Stack.Screen name={DetailName} component={Detail} />
        <Stack.Screen name={ProductName} component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
