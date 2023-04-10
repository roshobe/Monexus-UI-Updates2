import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CountryFlag from "react-native-country-flag";
import {
  ChevronDownIcon,
  Bars3BottomRightIcon,
} from "react-native-heroicons/outline";
import PricingData from "../../data/PricingData";
import BSLGroup from "./Components/BSLGroup";

const BSLScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className=" flex pt-8 bg-white h-screen ">
      <View className="  items-center justify-center space-y-8">
        {/* Buy,sell and listings button group */}
        <BSLGroup />

        {/* currency drop down */}
        <View className="  items-center justify-center ">
          <TouchableOpacity className=" flex-row space-x-2 rounded-full px-2 py-2 border-2 border-black-300 text-sky-600 font-medium  uppercase hover:bg-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
            <CountryFlag isoCode="de" className="w-5 h-15 rounded-full" />
            <Text className="font-medium  uppercase">$1000000 CAD</Text>
            <ChevronDownIcon color="black" size={20} />
          </TouchableOpacity>
          <Text className="font-medium ">Wallet account balance</Text>
        </View>
      </View>

      {/* Currency dropdown and price input  */}
      <View className="  justify-start space-y-2 p-4 bg-slate-100">
        <Text className="font-medium ">Buying</Text>
        <View className="flex-row border-2 bg-white border-slate-300 w-max rounded-lg ">
          <TouchableOpacity className=" flex-row space-x-2 rounded-l  p-4 items-center text-sky-600 font-medium  uppercase hover:bg-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
            <CountryFlag isoCode="de" className="w-6 h-6 rounded-full" />
            <Text className="font-bold text-lg uppercase">CAD</Text>
            <ChevronDownIcon color="black" size={20} />
          </TouchableOpacity>

          <TextInput
            placeholder="Amount"
            className="border-l border-slate-300  w-1/2 p-2"
          ></TextInput>
        </View>
      </View>

      <View className="  justify-start space-y-2 p-2 bg-white">
        <View className="flex-row justify-between ">
          <Text className="font-medium ">Rates in your Region</Text>
          <View className="flex-row space-x-2 ">
            <Text className=" font-medium">20 Results</Text>
            <Bars3BottomRightIcon color="black" size={25} />
          </View>
        </View>
        <View className="flex w-full space-y-2 rounded-lg ">
          {PricingData.map((item) => (
            <TouchableOpacity
              key={item.id}
              className=" flex-row justify-between p-4 space-x-2 rounded-l  items-center bg-slate-100 hover:bg-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              <View className="items-center w-1/3">
                <Text className="font-medium text-lg uppercase">
                  ${item.amount} CAD
                </Text>
                <Text className="text-sm ">Up to</Text>
              </View>
              <View className="items-center w-1/3">
                <Text className="font-medium text-lg uppercase">
                  ${item.rate} CAD
                </Text>
                <Text className="text-sm ">Rate</Text>
              </View>
              <View className="items-center w-1/3">
                <Text className="font-medium text-xs ">
                  50 Completed Transactions
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BSLScreen;
