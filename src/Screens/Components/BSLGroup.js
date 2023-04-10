import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function BSLGroup() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState();

  const handleMenu = (index) => {
    setSelected(index);

    if (index === 0) {
      navigation.navigate("BSLScreen");
    } else if (index === 1) {
      navigation.navigate("SellScreen");
    }
  };
  return (
    <View className="flex-row " role="group">
      <TouchableOpacity
        onPress={() => handleMenu(0)}
        className={`rounded-l px-6 py-2 border-2 border-black-300 text-sky-600 font-medium  uppercase ${
          selected === 0 ? "bg-black" : " bg-white"
        } focus:outline-none focus:ring-0 transition duration-150 ease-in-out`}
      >
        <Text
          className={`font-medium ${
            selected === 0 ? "text-white" : " text-black"
          }  uppercase`}
        >
          Buy
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleMenu(1)}
        className={`${
          selected === 1 ? "bg-black" : " bg-white"
        } px-6 py-2 border-t-2 border-b-2 border-black-300 text-sky-600  hover:bg-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out`}
      >
        <Text
          className={`font-medium ${
            selected === 1 ? "text-white" : " text-black"
          }  uppercase`}
        >
          Sell
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleMenu(2)}
        className={` ${
          selected === 2 ? "bg-black" : " bg-white"
        } rounded-r px-6 py-2 border-2 border-black-300 text-sky-600 font-medium  uppercase hover:bg-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out`}
      >
        <Text
          className={`font-medium ${
            selected === 2 ? "text-white" : " text-black"
          }  uppercase`}
        >
          Listings
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default BSLGroup;
