import React, { useState, useLayoutEffect } from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { ArrowSmallLeftIcon, EyeIcon } from "react-native-heroicons/outline";
import { SocialIcon } from "react-native-elements";

function EmailSignUp() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-col pt-8  bg-white h-screen">
      <View className="flex-col justify-between pb-10 items-center h-full">
        <View className=" flex-row items-center justify-between pt-4  w-fit ">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <ArrowSmallLeftIcon color="black" size={30} />
          </TouchableOpacity>
          <Text className="text-black  text-center text-lg px-2">
            Enter your recovery Email and Password
          </Text>
        </View>

        {/* Username and password section for verification */}
        <View className="flex-col p-6 items-start space-y-10 bg-white w-fit  rounded-xl  h-fit ">
          <View className="flex-row border-b items-center ">
            <TextInput
              placeholder="Enter your email"
              className=" w-full h-fit text-lg  text-black  "
            ></TextInput>
          </View>
          <View className="flex-row border-b  items-center ">
            <TextInput
              placeholder="Password"
              className=" w-full h-fit text-lg  text-black  "
              secureTextEntry={true}
            ></TextInput>
            <TouchableOpacity>
              <EyeIcon color="black" size={30}></EyeIcon>
            </TouchableOpacity>
          </View>
          <View className="flex-row border-b  items-center ">
            <TextInput
              placeholder="Verify Password"
              className=" w-full h-fit text-lg  text-black  "
              secureTextEntry={true}
            ></TextInput>
            <TouchableOpacity>
              <EyeIcon color="black" size={30}></EyeIcon>
            </TouchableOpacity>
          </View>
        </View>

        {/* or */}
        <View className="items-center">
          <Text className=" text-2xl"> or</Text>
        </View>

        {/* Google and facebook signup */}
        <View className="items-center space-y-4 pt-4 pb-24">
          <TouchableOpacity className="flex-row items-center rounded-full px-4 py-1 border-2 border-black-300 hover:bg-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
            <SocialIcon type="google" className="h-7 w-7" />
            <Text className="text-black h-7 font-semibold text-center text-lg ">
              Continue with Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center rounded-full px-4 py-1 border-2 border-black-300 hover:bg-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
            <SocialIcon type="facebook" className="h-8 w-8  " />
            <Text className="text-black font-semibold h-7  text-center text-lg ">
              Continue with Facebook
            </Text>
          </TouchableOpacity>
        </View>

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

export default EmailSignUp;
