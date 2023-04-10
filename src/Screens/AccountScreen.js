import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
  useState,
} from "react-native";

import React, { useLayoutEffect } from "react";
import { UserCircleIcon } from "react-native-heroicons/outline";
import { CheckCircleIcon } from "react-native-heroicons/solid";
import CountryFlag from "react-native-country-flag";
import TransactionData from "../../data/TransactionData";

const AccountScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className=" flex pt-8 bg-white ">
      <View className="flex-row items-center p-3">
        <UserCircleIcon color="black" size={40} />
        <Text className=" text-lg">Hello,</Text>
        <Text className=" text-lg font-bold"> JP</Text>
      </View>
      <View className=" p-4 ">
        <Text className=" text-lg">Your wallet</Text>
        {/* wallet card */}
        <View className=" bg-slate-200 space-x-2 rounded-lg">
          <View className="flex-row items-center p-2 space-x-2">
            <CountryFlag isoCode="de" className="w-7 h-7 rounded-full" />
            <Text className="font-bold text-lg uppercase">CAD</Text>
          </View>
          <Text className=" text-lg ">Account Balance</Text>
          <Text className=" text-lg font-bold ">$500.00</Text>
          <View className="flex-row items-center space-x-2 pt-4 pb-4">
            <TouchableOpacity className="space-x-2 rounded-xl bg-black px-2 py-2 border-2 border-black-300 text-sky-600 font-medium  uppercase hover:bg-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
              <Text className="text-white">ADD FUNDS</Text>
            </TouchableOpacity>
            <TouchableOpacity className="space-x-2 rounded-xl bg-black px-2 py-2 border-2 border-black-300 text-sky-600 font-medium  uppercase hover:bg-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
              <Text className="text-white">WITHDRAW</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className=" p-4 ">
        <Text className=" text-xl">Recent Transactions</Text>
        <View className=" pt-4 ">
          <Text className=" text-sm font-bold">Sat Jan 21, 1:00 PM</Text>
        </View>
        {/* wallet card */}
        <View className="flex  rounded-lg space-y-2">
          {TransactionData.map((item) => (
            <TouchableOpacity
              key={item.id}
              className=" flex-row justify-between rounded-lg p- 2 items-center bg-slate-100 hover:bg-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              <View className=" space-y-0">
                <Text className="font-medium text-lg uppercase">
                  ${item.amount} CAD
                </Text>
                <Text className="text-sm ">{item.type}</Text>
              </View>
              <View className="items-center flex-row">
                <CheckCircleIcon color="black" size={30} />
                <Text className="font-medium text-sm">{item.Status}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;
