import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Detail from "./Detail";
import Discover from "./Discover";
import Product from "./Product";
import HomeScreen from "./HomeScreen";
import CustomTabBarBottom from "../components/CustomTabBarBottom";
import { StyleSheet, Text, View } from 'react-native'

const HomeName = "Home";
const DetailName = "Detail";
const DiscoverName = "Discover";
const ProductName = "Product";

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    <Tab.Navigator
    // tabBar= {props => <CustomTabBar {...props} />}
      initialRouteName={HomeScreen}
    
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "orange",
        // tabBarShowLabel:false,
        tabBarStyle: styles.tabBarStyle,
        tabBarInactiveTintColor: "red",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === HomeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === DiscoverName) {
            iconName = focused ? "airplane" : "airplane-outline";
          } else if (rn === DetailName) {
            iconName = focused ? "list" : "list-outline";
          } else if (rn === ProductName) {
            iconName = focused ? "cube" : "cube-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}

      // tabBarOptions={{
      //     activeTintColor:"tomato",
      //     inactiveTintColor:"grey",
      //     labelStyle:{paddingBottom:10,fontSize:10},
      //     style:{padding:10,height:70},
      // }}
    >
      <Tab.Screen
        name={HomeName}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarButton: props => <CustomTabBarBottom route="home" {...props} />,
          // tabBarButton: props => <CustomTabBarBottom {...props}/>
        }}
      />
      <Tab.Screen
        name={DiscoverName}
        component={Discover}
        options={{
          headerShown: false,
          tabBarButton: (props) => <CustomTabBarBottom {...props} />,
        }}
      />
      <Tab.Screen
        name={DetailName}
        component={Detail}
        options={{
          headerShown: false,
          tabBarButton: (props) => <CustomTabBarBottom {...props} />,
        }}
      />
      <Tab.Screen
        name={ProductName}
        component={Product}
        options={{
          headerShown: false,
          tabBarButton: (props) => <CustomTabBarBottom {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  tabBarStyle:{
    position:"absolute",
    backgroundColor:"pink",
    borderTopWidth:0,
    bottom:10,
    right:10,
    left:10,
    height:58
  }
})