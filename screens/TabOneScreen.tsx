import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity, ScrollView } from "react-native";
import { Button, ListItem } from "react-native-elements";
import LottieView from 'lottie-react-native';
import { Entypo } from '@expo/vector-icons';
import { List, TextInput } from 'react-native-paper';
import Header from "../components/Login/Header";
import LoginForm from "../components/Login/LoginForm";
import ViewWithLoading from "../components/ViewWithLoading";
import axios from "axios";


export default function TabOneScreen() {
  const [num1, setNum1] = useState<string>("0");
  const [num2, setNum2] = useState<string>("0");
  const [result, setResult] = useState<string>("");

  const handleCalculate = () => {
    const addition = Number(num1) + Number(num2);
    setResult(addition.toString())
  }

  const handleFetch = () => {
    fetch('https://fakestoreapi.com/products/1')
      .then(res => res.json())
      .then(json => console.log(json))
  }

  useEffect(() => {
    const addition = Number(num1) + Number(num2);
    setResult(addition.toString());

  }, [num1, num2]);

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <ViewWithLoading loading={false}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text>
            {result}
          </Text>
          <TextInput
            label="Num1 "
            value={num1}
            onChangeText={(text: string) => {
              setNum1(text);
            }}
            autoComplete={false}
            keyboardType={"decimal-pad"}
            mode={"outlined"}
            autoCapitalize={"none"}
            autoCorrect={false}
            autoFocus={true}
            style={{ marginBottom: 20 }}
          />
          <TextInput
            label="Num2"
            value={num2.toString()}
            onChangeText={(text: string) => {
              setNum2(text);
            }}
            autoComplete={false}
            keyboardType={"decimal-pad"}
            mode={"outlined"}
            autoCapitalize={"none"}
            autoCorrect={false}
            autoFocus={true}
            style={{ marginBottom: 20 }}
          />

          <Button
            title={"Calculate"}
            onPress={() => {
              handleCalculate();
            }}
          />
        </View>
      </View>
    </ViewWithLoading>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  inputContainer: {
    flex: 0,
    width: '100%',
  }
});