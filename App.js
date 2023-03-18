import React, { useEffect, useState } from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./screens/MainScreen";
import OnboardingScreen from "./screens/Onboarding";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function App() {
  const [firstScreen, setFirstScreen] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLanched").then((value) => {
      if (value === null) {
        AsyncStorage.setItem("alreadyLanched", "true");
        setFirstScreen(true);
      } else {
        setFirstScreen(false);
      }
    });
  }, []);

  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {!firstScreen && (
            <Stack.Screen
              options={{ headerShown: false }}
              name="OnboardingScreen"
              component={OnboardingScreen}
            />
          )}
          <Stack.Screen  options={{ headerShown: false }} name="MainScreen" component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
