import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import CurrencyPicker from "react-native-currency-picker";

function CurrencyDropdown() {
  const [selectedValue, setSelectedValue] = useState();
  const [currency, setCurrency] = useState("USD");
  const [cSymbol, setcSymbol] = useState("$");

  const [value, setValue] = useState();

  const handleChangeText = (text) => {
    setSelectedValue(true);
    setValue(text);
  };

  return (
    <View className="flex-row border-2 bg-slate-100 border-slate-400 w-max rounded-lg items-center m-1">
      <TouchableOpacity className=" flex-row space-x-2 rounded-l  p-4 items-center text-sky-600 font-medium uppercase hover:bg-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
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
      <View className="flex-row items-center space-x-1 border-l border-slate-400 h-full">
        <Text className={`font-semibold text-xl ml-1 `}>{cSymbol}</Text>
        <TextInput placeholder="Amount" className="w-6/12 text-lg"></TextInput>
      </View>

      <TouchableOpacity className="border rounded-xl p-2">
        <Text className="text-center">MAX</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CurrencyDropdown;
