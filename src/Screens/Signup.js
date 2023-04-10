import { useNavigation } from "@react-navigation/native";
import React, { useState, useLayoutEffect } from "react";
import {
  Image,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import Monexus from "../../assets/monexus.svg";
import Logo from "./Components/Logo";

function Signup() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className=" flex pt-12 bg-white h-full">
      <View className="justify-between items-center h-full">
        {/* <Monexus className="h-max" fill={"black"} stroke-width={"10"} /> */}
        <Logo className="h-max" stroke-width={"10"} />

        <View className="items-center space-y-4 pt-4 pb-24">
          <TouchableOpacity
            onPress={() => navigation.navigate("EmailSignIn")}
            className="space-x-2 rounded-xl bg-black px-2 py-2 border-2 border-black-300 uppercase hover:bg-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            <Text className="text-white h-7 w-60 text-center text-lg ">
              SIGN IN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("EnterNumber")}
            className="space-x-2 rounded-xl bg-black px-2 py-2 border-2 border-black-300   uppercase hover:bg-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            <Text className="text-white h-7 w-60 text-center text-lg ">
              GET STARTED
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className=" text-black underline">Trouble Signing in ?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Signup;
