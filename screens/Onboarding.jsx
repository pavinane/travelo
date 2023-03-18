import { View, Text, Image } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const DotComponnet = ({selected}) => {
    return(
        <View className={`w-4 h-4 mx-1 flex items-center justify-center rounded-full ${selected ? "border border-red-400":""} p-2`}>
            <View className={`w-2 h-2 ${selected ? "bg-red-400":"bg-red-200"} rounded-full`} ></View>
        </View>
    )
  }

  return (
    <Onboarding
    onSkip={() => navigation.navigate("HomeScreen")}
    onDone={() => navigation.navigate("HomeScreen")}
    DotComponent={DotComponnet}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={{
                uri: "https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb",
              }}
              className="w-72 h-72 object-contain"
            />
          ),
          title: "Solemate",
          subtitle: " Pass Every KM with Friend Together",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={{
                uri: "https://images.pexels.com/photos/3522880/pexels-photo-3522880.jpeg?auto=compress&cs=tinysrgb",
              }}
              className="w-72 h-72 object-contain"
            />
          ),
          title: "Exciting",
          subtitle: "Done a life saw a new Vison of Glory wishes",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={{
                uri: "https://images.pexels.com/photos/2464970/pexels-photo-2464970.jpeg?auto=compress&cs=tinysrgb",
              }}
              className="w-72 h-72 object-contain "
            />
          ),
          title: "Spreading",
          subtitle: "Wishes can make spread a love with nature ",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
