import React, { useState, useLayoutEffect } from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import CountryFlag from "react-native-country-flag";
import CountryCode from "../../data/CountryCode";
import DropDown from "./Components/Dropdown";
import { useNavigation } from "@react-navigation/native";

import {
  ArrowSmallLeftIcon,
  ChevronDownIcon,
  Bars3BottomRightIcon,
} from "react-native-heroicons/outline";
import { Select } from "native-base";

function EnterNumber() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-col pt-8 bg-white h-screen">
      <View className="flex-col justify-between pb-40 items-center h-full">
        <View className=" flex-row items-center justify-center pt-4 space-x-2 ">
          <ArrowSmallLeftIcon
            onPress={() => navigation.navigate("Home")}
            color="black"
            size={30}
          />
          <Text className="text-black  text-center text-lg px-2">
            Enter your mobile phone number
          </Text>
        </View>

        <DropDown />

        <TouchableOpacity
          onPress={() => navigation.navigate("VerCodeScreen")}
          className="space-x-2 rounded-xl bg-black px-2 py-2 border-2 border-black-300   uppercase hover:bg-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          <Text className="text-white h-7 w-60 text-center text-lg uppercase ">
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default EnterNumber;
