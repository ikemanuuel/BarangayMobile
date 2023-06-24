import { useState } from "react";
import { Image, Text, View, TextInput, Button, SafeAreaView, TouchableOpacity  } from 'react-native';
import styles from "../../../Styles/styles";
import axios from "../../../plugins/axios";



export default function Login({navigation}) {
    const [data, setData] = useState({
      username: '',
      password: '',
    })

    
    return (

        <View style={styles.container}>
        <Image style={styles.window_logo_mini} source={require('../../../img/bimsLogo.png')} />

        <TextInput
        style={styles.input} 
        placeholder='Username' 
        value={data.email}
        onChangeText={text => {setData({...data,username: text})}}/>
        
        <TextInput 
        secureTextEntry = {true}
        style={styles.input} 
        placeholder='Password' 
        value={data.password}
        onChangeText={text => {setData({...data,password: text})}}
        />
  
  <TouchableOpacity style = {styles.button_ni} 
        
        onPress={() => {

          axios.post("accounts/token/login", data )
                    .then((response) => {
                      setData("");
                      navigation.replace('Dashboard')
                      // setSuccess(
                      //   "Successfully Registered!\nplease check your email\n  for activation!"
                      // );
                    })
                    .catch((error) => {
                      console.log(error);
                      alert('Invalid Credentials!\nor your account may not be activated\nplease check your email for activation')
                    });
        } }>
          <Text style = {styles.button_text}>Login</Text>
            </TouchableOpacity>


        <Text style={styles.hyper} onPress={() => {
          setData({
            email: '',
            password: '',
            })
            navigation.navigate('Forgot Password'); }}>Forgot Password?</Text>
        <Text style={styles.hyper} onPress={() => {
          setData({
            email: '',
            password: '',
            })
           navigation.navigate('Register'); }}>Don't have an account? Register</Text>
        
      </View>

    );
  }