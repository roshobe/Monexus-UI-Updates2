import React, { useState, useLayoutEffect } from "react";
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { SocialIcon } from "react-native-elements";
import {
  ArrowSmallLeftIcon,
  EyeIcon,
  EyeSlashIcon,
} from "react-native-heroicons/outline";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { firebaseApp } from "../firebase/config";
import { Modal } from "native-base";

function EmailSignIn() {
  const navigation = useNavigation();

  const [emailAddress, setEmailAddress] = useState('');
  const [obfuscatePasswordFlag, setObfuscatePasswordFlag] = useState(true);
  const [password, setPassword] = useState('');
  const [disableContinueFlag, setDisableContinueFlag] = useState(true);
  const [busyFlag, setBusyFlag] = useState(false);


  function onToggleObfuscatePassword() {
    setObfuscatePasswordFlag(!obfuscatePasswordFlag);
  }

  function onEmailChange(value) {
    setEmailAddress(value);
    setDisableContinueFlag(!(value.length > 0 && /(.+)@(.+){2,}\.(.+){2,}/.test(value)));
  }

  function onPasswordChange(value) {
    setPassword(value)
  }

  function onContinuePressed() {
    if (!disableContinueFlag) {
      const auth = getAuth(firebaseApp);
      setBusyFlag(true);
      signInWithEmailAndPassword(auth, emailAddress, password)
        .then((userCredential) => {
          navigation.navigate("VerCodeScreen");
          setBusyFlag(false);
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          setBusyFlag(false);
        });
    }
    else {
      alert('Please enter credentials');
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  if(busyFlag) {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        show={busyFlag}>
        <ActivityIndicator size="large" color="#0000ff" />
      </Modal>
    );
  }

  return (
    <SafeAreaView className="flex-col pt-8 bg-white h-screen">
      <View className="flex-col justify-between pb-10 items-center h-full">
        <View className=" flex-row items-center justify-between pt-4 ">
          <TouchableOpacity
            className="pr-8"
            onPress={() => navigation.navigate("Home")}
          >
            <ArrowSmallLeftIcon color="black" size={30} />
          </TouchableOpacity>
          <Text className="text-black  text-center text-lg px-2">
            Enter your Email and Password
          </Text>
        </View>

        {/* Username and password section for verification */}
        <View className="flex-col p-6 items-start space-y-10 bg-white w-parent rounded-xl  h-fit ">
          <View className="flex-row border-b items-center w-full ">
            <TextInput
              placeholder="Enter your email"
              className=" w-full h-fit text-lg  text-black  "
              selectionColor={"black"}
              onChangeText={onEmailChange}
            >
              {this.email}
            </TextInput>
          </View>
          <View className="flex-row border-b items-center ">
            <TextInput
              placeholder="Password"
              className="w-full h-fit text-lg  text-black  "
              secureTextEntry={this.obfuscatePasswordFlag}
              selectionColor={"black"}
              onChangeText={onPasswordChange}
            >
              {this.password}
            </TextInput>
            <TouchableOpacity onPress={onToggleObfuscatePassword}>
              {this.obfuscatePasswordFlag ?
                <EyeSlashIcon color="black" size={30} /> :
                <EyeIcon color="black" size={30} />
              }
            </TouchableOpacity>
          </View>
        </View>

        {/* or */}
        <View className="items-center">
          <Text className=" text-2xl"> or</Text>
        </View>

        {/* Google and facebook signup */}
        <View className="items-center space-y-4 pt-4">
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
          onPress={onContinuePressed}
          disabled={disableContinueFlag}
          className={`${disableContinueFlag ? "bg-slate-300 border-slate-300" : "bg-black border-black"} space-x-2 rounded-xl px-2 py-2 border-2 uppercase hover:bg-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out`}
        >
          <Text className="text-white h-7 w-60 text-center text-lg uppercase ">
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default EmailSignIn;
