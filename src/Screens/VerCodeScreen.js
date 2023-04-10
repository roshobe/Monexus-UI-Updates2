import React, { useState, useLayoutEffect } from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { ArrowSmallLeftIcon } from "react-native-heroicons/outline";
import { Select } from "native-base";

function VerCodeScreen() {
  const navigation = useNavigation();

  const [selected, setSelected] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);
  const [selected4, setSelected4] = useState(false);

  const [textInputValues, setTextInputValues] = useState([]);

  const handleTextInputChange = (text, index) => {
    if (index === 0) {
      setSelected(true);
    } else if (index === 1) {
      setSelected2(true);
    } else if (index === 2) {
      setSelected3(true);
    } else if (index === 3) {
      setSelected4(true);
    }

    const newValues = [...textInputValues];
    newValues[index] = text;
    setTextInputValues(newValues);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-col pt-8 bg-white h-screen">
      <View className="flex-col justify-between pb-40 items-center h-full">
        <View className=" flex-row items-center justify-center pt-4 space-x-2 space-y-4 ">
          <ArrowSmallLeftIcon
            onPress={() => navigation.navigate("Home")}
            color="black"
            size={30}
          />
          <Text className="text-black  text-center text-lg px-2">
            Enter your verification code
          </Text>
        </View>
        <Text className="text-black  text-center text-sm px-2">
          We sent you a 4 digit verification code to the phone number you
          provided
        </Text>

        <View className="flex-row p-4 items-start bg-white w-fit rounded-xl space-x-3 h-fit ">
          <TextInput
            maxLength={1}
            keyboardType="numeric"
            className={`${
              selected ? "bg-black" : " bg-slate-100"
            } rounded-lg w-14 h-14 text-lg text-white text-center`}
            onChangeText={(text) => handleTextInputChange(text, 0)}
          ></TextInput>
          <TextInput
            maxLength={1}
            keyboardType="numeric"
            className={`${
              selected2 ? "bg-black" : " bg-slate-100"
            } rounded-lg w-14 h-14 text-lg text-white text-center`}
            onChangeText={(text) => handleTextInputChange(text, 1)}
          ></TextInput>
          <TextInput
            maxLength={1}
            keyboardType="numeric"
            className={`${
              selected3 ? "bg-black" : " bg-slate-100"
            } rounded-lg w-14 h-14 text-lg text-white text-center`}
            onChangeText={(text) => handleTextInputChange(text, 2)}
          ></TextInput>
          <TextInput
            maxLength={1}
            keyboardType="numeric"
            className={`${
              selected4 ? "bg-black" : " bg-slate-100"
            } rounded-lg w-14 h-14 text-lg text-white text-center`}
            onChangeText={(text) => handleTextInputChange(text, 3)}
          ></TextInput>
        </View>
        <TouchableOpacity>
          <Text className=" text-black underline">
            I didn't receive a code. Resend Code?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("HomeScreen")}
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

export default VerCodeScreen;
