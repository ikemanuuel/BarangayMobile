import { useState } from "react";
import { Image, TouchableOpacity, TextInput, ScrollView, View, Text, Alert} from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "../../../Styles/styles";
import axios from "../../../plugins/axios";

export default function Registration() {
    const navigation = useNavigation();
    const [data, setData] = useState({
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    });
    return (
      <ScrollView contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
      }}>
        <View style={styles.container}>
        <Text ></Text>
        <Text ></Text>
          <Image style={styles.window_logo_mini} source={require('../../../img/bimsLogo.png')} />
          
          <Text style={styles.lable}></Text>
          
          <TextInput
          style={styles.input} 
          placeholder='First Name' 
          value={data.first_name}
          onChangeText={text => {setData({...data,first_name: text})}}/>
          
          <TextInput
          style={styles.input} 
          placeholder='Last Name' 
          value={data.last_name}
          onChangeText={text => {setData({...data,last_name: text})}}/>
          
          <TextInput
          style={styles.input} 
          placeholder='Email Address' 
          value={data.email}
          onChangeText={text => {setData({...data,email: text})}}/>

          <TextInput
          style={styles.input} 
          placeholder='username' 
          value={data.username}
          onChangeText={text => {setData({...data,username: text})}}/> 

          <TextInput 
          secureTextEntry = {true}
          style={styles.input} 
          placeholder='Password' 
          value={data.password}
          onChangeText={text => {setData({...data,password: text})}}/>
          
          <TextInput 
          secureTextEntry = {true}
          style={styles.input} 
          placeholder='Confirm Password' 
          value={data.confirm_password}
          onChangeText={text => {setData({...data,confirm_password: text})}}/>

        <TouchableOpacity style = {styles.button_ni} 
            
          onPress={() => {
            
            if (data.first_name!=''&&data.last_name!=''&&data.email!=''&&data.username!=''&&data.password!=''&&data.confirm_password!=''){
              if (data.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){         
                if (data.password==data.confirm_password){
                  if (data.password.length>8 && data.password.length>8){
                    axios
                    .post("accounts/users/", data )
                    .then((response) => {
                      console.log(response.data);
                      setData("");
                      alert("Successfully Registered!")
                      // setSuccess(
                      //   "Successfully Registered!\nplease check your email\n  for activation!"
                      // );
                    })
                    .catch((error) => {
                      console.log(error);
                      alert('error')
                    });
                    
                    // global.firstName = data.firstName
                    // global.lastName = data.lastName
                    // global.email = data.email
                    // global.password = data.password
                    // global.logged_in = true
                    // setData({
                    //   name1: '',
                    //   name2: '',
                    //   username: '',
                    //   email: '',
                    //   password1: '',
                    //   password2: '',
                    // })
                    // navigation.replace('Dashboard');
                    // alert("Account Logged in")
                    // alert("Account Registered")
                  }else{
                    alert("Password too weak")
                  }              
                }else{
                  alert("Password not match")
                }
              }else{
                alert("Invalid Email")
              }
            }else{
              if (data.first_name==''&&data.lastName!=''&&data.email!=''&&data.username!=''&&data.password!=''&&data.confirm_password!=''){
                alert("Please Input Firstname")
              }else if (data.first_name!=''&&data.last_name!==''&&data.email!=''&&data.username!=''&&data.password!=''&&data.confirm_password!=''){
                alert("Please Input Lastname")
              }else if (data.first_name!=''&&data.last_name!=''&&data.email==''&&data.username!=''&&data.password!=''&&data.confirm_password!=''){
                alert("Please Input Valid email")
              }else if (data.first_name==''&&data.lastName!=''&&data.email!=''&&data.username!=''&&data.password!=''&&data.confirm_password!=''){
                  alert("Please Input username")  
              }else if (data.first_name!=''&&data.last_name!=''&&data.email!=''&&data.username!=''&&data.password==''&&data.confirm_password!=''){
                alert("Please Input Password")
              }else if (data.first_name!=''&&data.last_name!=''&&data.email!=''&&data.username!=''&&data.password!=''&&data.confirm_password==''){
                alert("Please Confirm password")
              }else if (data.first_name==''||data.last_name==''||data.email==''&&data.username!=''||data.password==''||data.confirm_password==''){
                  alert("Please Input Credentials")
              
                }
            }        
          } }>
            <Text style = {styles.button_text}>Register</Text>
            </TouchableOpacity>
            <Text ></Text>
        <Text ></Text>
        <Text ></Text>
        <Text ></Text>
            </View>
        </ScrollView>
      );
    }