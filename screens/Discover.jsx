import React,{useLayoutEffect} from 'react'
import { View, Text,Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { flight } from '../assets';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const Discover = () => {
  const navigation  = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown:false,
    });
  }, [])

  return (
    <SafeAreaView className="flex-1  relative">
      <View className="flex-row items-center justify-between px-6">
        <View>
          <Text className="text-4xl font-bold text-[#ffb405a9]">Discover</Text>
          <Text className="text-xl text-[#e285c6]">the beauty today</Text>
        </View>

        <View className="flex items-center w-20">
          <Image
            className="w-16 h-16 object-cover rounded-full shadow-inner"
            source={flight}
          />
        </View>

      </View>

      <View className="flex-row item-center mx-4 rounded-xl py-1 px-4 shadow-inner ">
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          placeholder="Search"
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            console.log(JSON.stringify(details?.geometry?.location));
          }}
          query={{
            key: "AIzaSyAI-3_mUD0DZbUP4NHw_dbMtwK-Rv6vyhE",
             //AIzaSyBKnZr3iS2-uXciT5VhneqSvMktCIOit6A
            language: "en",
          }}
        />
      </View>
      <View>
      <Text onPress={() => navigation.navigate("Detail")}>
          Details screen
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default Discover