import React, { useLayoutEffect } from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Detail = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1  relative">
      <View>
        <Text onPress={() => navigation.navigate("Product")}>
          Details screen
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Detail;
