import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import CurrencyPicker from "react-native-currency-picker";

function TradeDropdown() {
  const [selectedValue, setSelectedValue] = useState();
  const [currency, setCurrency] = useState("USD");
  const [cSymbol, setcSymbol] = useState("$");

  const [value, setValue] = useState();

  const handleChangeText = (text) => {
    setSelectedValue(true);
    setValue(text);
  };
  return (
    <View className="flex-row  border-gray-300 space-x-0 justify-center rounded-lg items-center mt-8 mb-4  ">
      <View className="flex-col w-1/3  ">
        <Text> </Text>
        <View className="flex-row items-center bg-white  border-2 border-gray-300  border-r-0 rounded-l-lg ">
          <TextInput placeholder="Rate" className="p-4 text-xl"></TextInput>
        </View>
      </View>
      <View className="flex-col ">
        <Text>Trade For</Text>
        <TouchableOpacity className=" flex-row space-x-2 bg-white border-2 border-gray-300   p-4 items-center text-sky-600 font-medium uppercase hover:bg-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
          <CurrencyPicker
            withFilter
            currencyCode={selectedValue}
            showFlag
            withAlphaFilter={false}
            withCurrencyButton={false}
            withCurrency={true}
            showCurrencyName={false}
            showCurrencyCode={false}
            showSymbol={false}
            showNativeSymbol={false}
            onSelectCurrency={(currency) => {
              const code = currency.code;
              const symbol = currency.symbol;
              setCurrency(code);
              setcSymbol(symbol);
              setSelectedValue(true);
            }}
          />
          <Text className="font-bold text-lg uppercase">{currency}</Text>
          {/* <ChevronDownIcon color="black" size={20} /> */}
        </TouchableOpacity>
      </View>
      <View className="">
        <Text className="">Est. of expected return</Text>
        <View className="flex-row border-2 border-gray-300  border-l-0 p-4 items-center rounded-r-lg">
          <Text className="font-medium text-xl uppercase w-max  ">
            {cSymbol} Amount
          </Text>
        </View>
      </View>
    </View>
  );
}

export default TradeDropdown;
