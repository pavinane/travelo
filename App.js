import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text,View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Discover from './screens/Discover';
import Detail from './screens/Detail';
import Product from './screens/Product';
import MainScreen from './screens/MainScreen';

const Stack = createNativeStackNavigator();

// function HomeScreen() {
//   return (
//     <View style={{  alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

export default function App() {
  return (
    <TailwindProvider>
      <MainScreen/>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="Discover" component={Discover} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Product" component={Product} />
        </Stack.Navigator>
      </NavigationContainer> */}
    </TailwindProvider>
  );
}


