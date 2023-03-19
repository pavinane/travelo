import { View, Text,StatusBar,StyleSheet, Image, TouchableOpacity } from 'react-native'
import React,{useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Traveler } from '../assets';
import * as Animatable from 'react-native-animatable';

const HomeScreen = () => {

  const navigation  = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown:false,
    });
  }, [])
  return (
    <SafeAreaView className="flex-1 relative">
      {/* First Section */}
      <View className="flex-row space-x-2 px-6 mt-8 items-center">
        <Text className="text-black text-2xl font-semibold">Travel</Text>
        <View className="bg-black rounded-full p-2 w-14 h-14 flex items-center justify-center">
          <Text className=" text-[#ffc234] font-bold text-5xl ">O</Text>
        </View>
      </View>
      {/* Second View */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-4xl text-[#d4a642]">
          Get Ready to fly with
        </Text>
        <Text className="text-[#e272b7] text-xl font-bold">Unmarakble Moments</Text>
        <Text className="text-[16px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque tenetur non odio, quaerat ullam explicabo, quos quae voluptatum 
        </Text>
      </View>
      {/* circle */}
      <View className=" w-[300px] h-[300px] bg-[#FD1C54] rounded-full absolute bottom-36 -right-36"></View>
      <View className=" w-[300px] h-[300px] bg-[#FFB305] rounded-full absolute -bottom-8 -left-20"></View>
      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
        animation="fadeIn"
        easing="ease-in-out"
        source={Traveler}
        className=" w-full h-full object-cover absolute -bottom-5 left-5"
        />

        
      {/* Go button */}
      <View className="w-24 h-24 rounded-full border border-l-2 border-r-2 border-t-4 border-[#f0416d] absolute bottom-24 items-center justify-center">
       <TouchableOpacity
       onPress={() => navigation.navigate('Discover')}
       >
        <Animatable.View
        animation="pulse"
        easing="ease-in-out"
        iterationCount={"infinite"}
        className="flex items-center justify-center w-20 h-20 bg-[#FD1C54] rounded-full ">
          <Text className="text-3xl font-bold text-white">Go</Text>
        </Animatable.View>
        </TouchableOpacity>
      </View>
      </View>

    </SafeAreaView>
  );
}

// color1:"#FD1C54"
// color2:"#FF4840"
// color3:"#FFB305"
// color4:"f2466e"


// const styles = StyleSheet.create({
//   container: {
//       flex: 1,
//       marginTop:StatusBar.currentHeight

//   }
// })

export default HomeScreen