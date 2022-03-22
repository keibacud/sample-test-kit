import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import LottieView from 'lottie-react-native';
import { Entypo } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import Header from "../components/Login/Header";
import LoginForm from "../components/Login/LoginForm";

export default function TabTwoScreen() {


  return (
    <View
      style={
        [
          styles.container,
          styles.overrideContainer
        ]
      }
    >
      {/* header */}
      <Header />
      {/* login form */}
      <LoginForm />
      {/* footer */}
      <View style={{
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingBottom: 20
      }}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert("Hello World");
          }}
        >
          <Text style={styles.textStyle}>
            Create an account?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  overrideContainer: {
    paddingHorizontal: 50
  },
  headerContainer: {
    flex: 1,
  },
  textStyle: {
    fontSize: 20,
    fontFamily: 'poppins-regular'
  },
  input: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
});