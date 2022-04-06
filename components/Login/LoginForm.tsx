import * as React from "react";
import { View, Image, Text, Dimensions, TextInput, StyleSheet, SafeAreaView, Alert } from "react-native";
import { Button } from "react-native-elements";


export default function LoginForm() {
    const [email, SetEmailText] = React.useState<string>("");
    const [Password, SetPasswordText] = React.useState<string>("");

    function Login() {
    const EmailAddress = "bacudkei@gmail.com";
    const Password = "444";

    if (email === EmailAddress && Password === Password) {
      Alert.alert("Login", "Successfully Login");
    } else {
      Alert.alert("Login Error", "Wrong Email and Password");
    }
  }
    
      return (
        <View style={{
            flex: 100,
            paddingTop: 200,
          }}>
            <View style={{
              flex: 0,
              alignItems: 'center',
              width: '100%'
            }}>
              
            <TextInput 
            style={style.input}
            onChangeText={SetEmailText}
            value={email}
            placeholder={"Enter your Email Address"}
            />
      
            </View>
    
            <View style={{
              marginBottom: 4,
              alignItems: 'center',
              
              
            }}>
             
             <TextInput 
            style={style.input}
            onChangeText={SetPasswordText}
            value={Password}
            placeholder={"Enter your Password"}
            secureTextEntry={true}
          />
            </View>
              <View style={{
    
              }}>
              <Text style={{ 
                fontSize: 15, 
                textAlign: 'right', 
                color: 'black',
                paddingHorizontal: 10,
                marginBottom: 40
                 }}>
            Forgot Password?
          </Text>
              </View>
    
              <Button
                 title={"Login"}
                 buttonStyle={{
                 backgroundColor: 'green'
                 
                }}
                
              
                onPress={()=>Login()}
                >
    
    </Button>
    </View>
    );
    }

    const style = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#498fdd',
          justifyContent: 'center',
          paddingHorizontal: 20,
          width: '100%'
        },
        input: {
          height: 50,
          width: '100%',
          margin: 12,
          borderWidth: 1,
          padding: 10,
          backgroundColor: 'white',
          borderRadius: 10
        },
      })