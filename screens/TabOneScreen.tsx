import React from "react";
import { View, Image, Text, Dimensions, TextInput, StyleSheet, SafeAreaView, Alert } from "react-native";
import {Button} from "react-native-elements";
import LottieView from 'lottie-react-native';


export default function TabOneScreen() {
  return (
    <><View
    style={style.container}
  >

    <View
    style={{
      height: 20,
      width: '100%',
      alignItems: 'center',
    }}
    ></View>
        <Image
          style={{
            height: 50,
            width: 400,
            paddingBottom: '90%',
            alignSelf: 'center',

          }}
          source={{
            uri: 'https://cdn.dribbble.com/users/203547/screenshots/2458792/sign_up.gif'
          }} />

          {/* first name */}
          <View style={{
          marginBottom: 1,
          alignItems: 'center',
        }}>

          <TextInput
            style={style.input}
            placeholder={"First Name"}
            secureTextEntry={true} />
        </View>

          {/* last name */}
          <View style={{
          marginBottom: 1,
          alignItems: 'center',
        }}>

          <TextInput
            style={style.input}
            placeholder={"Last Name"}
            secureTextEntry={true} />
        </View>



        
        <View style={{
          flex: 0,
          alignItems: 'center',
          width: '100%'
        }}>

          <TextInput
            style={style.input}
            placeholder={"Email Address"} />

        </View>

        <Text style={{
          paddingTop: 0,
          color: 'red',
          textAlign: 'left',
          paddingHorizontal: 20,
          paddingBottom: 10
        }}>*Required</Text>

        <View style={{
          marginBottom: 3,
          alignItems: 'center',
        }}>

          <TextInput
            style={style.input}
            placeholder={"Password"}
            secureTextEntry={true} />
        </View>
        <Text style={{
          paddingTop: 0,
          color: 'red',
          textAlign: 'left',
          paddingHorizontal: 20,
          paddingBottom: 10
        }}>*Required</Text>

        <View style={{
          marginBottom: 4,
          alignItems: 'center',
        }}>

          <TextInput
            style={style.input}
            placeholder={"Confirm Password"}
            secureTextEntry={true} />
        </View>
        <Text style={{
          paddingTop: 0,
          color: 'red',
          textAlign: 'left',
          paddingHorizontal: 20,
          paddingBottom: 5
        }}>*Required</Text>

        <View style={{
          paddingTop: 19
        }}>
          <Button
            title={"Sign Up"}
            buttonStyle={{
              backgroundColor: 'green',
              width: '90%',
              alignSelf: "center",
              borderRadius: 30,
            }}
            
          >
          </Button>
          <Text style={{
            color: 'black',
            textAlign: 'right',
            paddingHorizontal: 33,
            paddingTop: 5
          }}
          >Have an Account? Sign in</Text>



        </View>

      </View></>
  )
  }
  
  const style = StyleSheet.create({
    container: {
  
      backgroundColor: 'white',
      justifyContent: 'center',
      paddingHorizontal: 20,
      width: '100%'
    },
    input: {
      height: 45,
      width: '95%',
      margin: 9,
      borderWidth: 1,
      padding: 5,
      backgroundColor: '#fbfbfb',
      borderRadius: 10,
     color: '#062C30'
  
    },
  });