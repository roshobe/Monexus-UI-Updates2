import {
  ArrowSmallLeftIcon,
  UserIcon,
  ChevronRightIcon,
  KeyIcon,
  DocumentIcon,
  ChatBubbleLeftRightIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";

import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";

export default function Preferences() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      footerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-col pt-8 bg-white h-screen">
      <View className="flex-col justify-between pb-40 items-center h-full">
        <View className=" flex-row p-4 justify-between w-full">
          <ArrowSmallLeftIcon
            onPress={() => navigation.navigate("HomeScreen")}
            color="black"
            size={30}
          />
          <Text className="text-black  text-center text-lg px-2">
            Preferences
          </Text>
          <Text className="text-black  text-center text-lg px-2"> </Text>
        </View>

        <View className="w-full">
          <TouchableOpacity className="flex-row justify-between w-full p-3">
            <View className="flex-row ">
              <UserIcon color="black" size={30} />
              <Text className="text-black  text-center text-lg px-2">
                Profile Information{" "}
              </Text>
            </View>
            <ChevronRightIcon color="black" size={30} />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row justify-between w-full p-3">
            <View className="flex-row ">
              <KeyIcon color="black" size={30} />
              <Text className="text-black  text-center text-lg px-2">
                Pasword and Biometrics{" "}
              </Text>
            </View>
            <ChevronRightIcon color="black" size={30} />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row justify-between w-full p-3">
            <View className="flex-row ">
              <DocumentIcon color="black" size={30} />
              <Text className="text-black  text-center text-lg px-2">
                Terms and Conditions{" "}
              </Text>
            </View>
            <ChevronRightIcon color="black" size={30} />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row justify-between w-full p-3">
            <View className="flex-row ">
              <ChatBubbleLeftRightIcon color="black" size={30} />
              <Text className="text-black  text-center text-lg px-2">
                Support{" "}
              </Text>
            </View>
            <ChevronRightIcon color="black" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
