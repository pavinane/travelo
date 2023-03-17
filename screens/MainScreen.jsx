import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Detail from "./Detail";
import Discover from "./Discover";
import Product from "./Product";
import HomeScreen from "./HomeScreen";

const HomeName = "HomeScreen"
const DetailName = "Detail";
const DiscoverName = "Discover";
const ProductName = "Product";

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={HomeName}
        screenOptions={({ route }) => ({
            
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === HomeName) {
              iconName = focused ? "home" : "home-outline";
            }else if (rn === DiscoverName) {
                iconName = focused ? "airplane" : "airplane-outline";
              }  
            else if (rn === DetailName) {
              iconName = focused ? "list" : "list-outline";
            } else if (rn === ProductName) {
              iconName = focused ? "cube" : "cube-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
            activeTintColor:"tomato",
            inactiveTintColor:"grey",
            labelStyle:{paddingBottom:10,fontSize:10},
            style:{padding:10,height:70},
            
        }}
      >
        <Tab.Screen name={HomeName} component={HomeScreen} />
        <Tab.Screen name={DiscoverName} component={Discover} />
        <Tab.Screen name={DetailName} component={Detail} />
        <Tab.Screen name={ProductName} component={Product} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
