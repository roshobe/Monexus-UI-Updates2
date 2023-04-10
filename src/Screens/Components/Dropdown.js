import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import CountryPicker from "react-native-country-picker-modal";

const DropDown = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [callingCode, setCallingCode] = useState("");
  const [selected, setSelected] = useState(false);

  const [value, setValue] = useState();

  const handleChangeText = (text) => {
    setSelected(true);
    setValue(text);
  };

  return (
    <View
      className={`p-4 items-start ${
        selected ? "bg-black" : " bg-slate-100"
      } w-fit rounded-xl`}
    >
      <Text
        className={`text-black ${
          selected ? "text-white" : " text-black"
        } mb-2 text-center text-lg px-2`}
      >
        Phone Number
      </Text>
      <View className="flex-row items-center space">
        <View
          className={`flex-row pl-2 pr-1 items-center rounded-full ${
            selected ? "bg-black" : " bg-slate-100"
          }`}
        >
          <CountryPicker
            className="rounded-full"
            withFilter
            countryCode={selectedValue}
            withFlag
            withAlphaFilter={false}
            withCurrencyButton={false}
            withCallingCode
            onSelect={(country) => {
              const { cca2, callingCode } = country;
              setSelectedValue(cca2);
              setCallingCode(callingCode[0]);
              setSelected(true);
            }}
          />
        </View>
        <Text
          className={`font-semibold text-xl  ${
            selected ? "text-white" : " text-black"
          } `}
        >
          +{callingCode}
        </Text>
        <TextInput
          className={` border-slate-300 w-2/3 text-xl font-semibold ${
            selected ? "text-white" : " text-black"
          } `}
          value={value}
          maxLength={10}
          keyboardType="numeric"
          onChangeText={handleChangeText}
          selectionColor={selected ? "white" : "black"}
        />
      </View>
    </View>
  );
};

export default DropDown;
