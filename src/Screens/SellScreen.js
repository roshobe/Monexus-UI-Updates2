import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import BSLGroup from "./Components/BSLGroup";
import CountryFlag from "react-native-country-flag";
import {
  ChevronDownIcon,
  Bars3BottomRightIcon,
} from "react-native-heroicons/outline";
import CurrencyDropdown from "./Components/CurrencyDropdown";
import TradeDropdown from "./Components/TradeDropdown";

function SellScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className=" flex pt-8 bg-white h-full ">
      <View className="  items-center justify-center space-y-8">
        {/* Buy,sell and listings button group */}
        <BSLGroup />

        {/* currency drop down */}
        <View className="  items-center justify-center">
          <TouchableOpacity className=" flex-row space-x-2 rounded-full px-2 py-2 border-2 border-black-300 text-sky-600 font-medium  uppercase hover:bg-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
            <CountryFlag isoCode="de" className="w-5 h-15 rounded-full" />
            <Text className="font-medium  uppercase">$1000000 CAD</Text>
            <ChevronDownIcon color="black" size={20} />
          </TouchableOpacity>
          <Text className="font-medium ">Wallet account balance</Text>
        </View>

        <View className="bg-gray-100 w-screen rounded-lg flex flex-col">
          <Text className="m-2">Selling</Text>
          <CurrencyDropdown />
          <TradeDropdown />
        </View>

        <View className="  justify-start space-y-2 p-2 bg-white w-full">
          <View className="flex-row justify-between ">
            <Text className="font-medium ">Manage your listings</Text>
            <View className="flex-row space-x-2 ">
              <Text className=" font-medium">20 Results</Text>
              <Bars3BottomRightIcon color="black" size={25} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SellScreen;
