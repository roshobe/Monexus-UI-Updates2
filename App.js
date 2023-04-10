import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/Screens/HomeScreen";
import BSLScreen from "./src/Screens/BSLScreen";
import Signup from "./src/Screens/Signup";
import EnterNumber from "./src/Screens/EnterNumber";
import VerCodeScreen from "./src/Screens/VerCodeScreen";
import EmailSignUp from "./src/Screens/EmailSignUp";
import EmailSignIn from "./src/Screens/EmailSignIn";
import SellScreen from "./src/Screens/SellScreen";
import Preferences from "./src/Screens/Preferences";
import { NativeBaseProvider } from "native-base";
import { NativeWindStyleSheet } from "nativewind";

const Stack = createNativeStackNavigator();

export default function App() {
  NativeWindStyleSheet.setOutput({
    default: "native",
  });
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Signup} />
          <Stack.Screen name="EmailSignIn" component={EmailSignIn} />
          <Stack.Screen name="EmailSignUp" component={EmailSignUp} />
          <Stack.Screen name="EnterNumber" component={EnterNumber} />
          <Stack.Screen name="VerCodeScreen" component={VerCodeScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="BSLScreen" component={BSLScreen} />
          <Stack.Screen name="SellScreen" component={SellScreen} />
          <Stack.Screen name="Preferences" component={Preferences} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
