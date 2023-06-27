import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ScrollView, SafeAreaView, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import styles from '../../Styles/styles';

const Form = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [householdno, sethouseholdno] = useState('');
  const [firstname, setfirstname] = useState('');
  const [middlename, setmiddlename] = useState('');
  const [lastname, setlastname] = useState('');
  const [birthdate, setbirthdate] = useState('');
  const [birthplace, setbirthplace] = useState('');
  const [age, setage] = useState('');
  const [civilstatus, setcivilstatus] = useState('');
  const [gender, setgender] = useState('');
  const [bloodtype, setbloodtype] = useState('');
  const [religion, setreligion] = useState('');
  const [educationalattainment, seteducationalattainment] = useState('');
  const [totalhouseholdmember, settotalhouseholdmember] = useState('');
  const [occupation, setoccupation] = useState('');
  const [nationality, setnationality] = useState('');

  const handleSubmit = () => {
    if (
      householdno !== '' &&
      firstname !== '' &&
      lastname !== '' &&
      middlename !== '' &&
      gender !== '' &&
      birthdate !== '' &&
      birthplace !== '' &&
      civilstatus !== '' &&
      age !== '' &&
      bloodtype !== '' &&
      religion !== '' &&
      educationalattainment !== '' &&
      totalhouseholdmember !== '' &&
      occupation !== '' &&
      nationality !== ''
    ) {
      const residentInfo = {
        householdno,
        firstname,
        middlename,
        lastname,
        birthdate,
        birthplace,
        age,
        gender,
        civilstatus,
        bloodtype,
        religion,
        occupation,
        nationality,
        educationalattainment,
        totalhouseholdmember,
      };

      axios
        .post('https://darkrayleh.pythonanywhere.com/api/v1/residents/residents/', residentInfo)
        .then(response => {
          
          sethouseholdno('');
          setfirstname('');
          setmiddlename('');
          setlastname('');
          setbirthdate('');
          setbirthplace('');
          setage('');
          setgender('');
          setcivilstatus('');
          setbloodtype('');
          setreligion('');
          setoccupation('');
          setnationality('');
          seteducationalattainment('');
          settotalhouseholdmember('');
          alert('Submitted');
        })
        .catch(error => {
          console.log('Error submitting form:', error);
        });
    } else {
      alert('Please complete the form');
    }
  };

  const handleTextInputFocus = fieldName => {
    setFocused(prevState => ({ ...prevState, [fieldName]: true }));
  };

  const handleTextInputBlur = fieldName => {
    setFocused(prevState => ({ ...prevState, [fieldName]: false }));
  };

  

  const [focused, setFocused] = useState({
    householdno: false,
    firstname: false,
    middlename: false,
    lastname: false,
    age: false,
    birthdate: false,
    birthplace: false,
    civilstatus: false,
    gender: false,
    bloodtype: false,
    religion: false,
    educationalattainment: false,
    totalhouseholdmember: false,
    occupation: false,
    nationality: false,
  });
    return (
    <SafeAreaView style={styles.form_container}>
       <TouchableOpacity style = {styles.top_ni}>
           <TouchableOpacity   onPress={() => {
                navigation.navigate('Dashboard');
            }}>
            <Image style={styles.tiny_logo} source={require('../../img/dashnot.png')} />
            </TouchableOpacity>

            <TouchableOpacity   onPress={() => {
                navigation.navigate('Resident');
            }}>
            <Image style={styles.tiny_logo} source={require('../../img/resnot.png')} />
            </TouchableOpacity>

            <TouchableOpacity   onPress={() => {
                navigation.navigate('householdno');
            }}>
            <Image style={styles.tiny_logo} source={require('../../img/housenot.png')} />
            </TouchableOpacity>

            <TouchableOpacity   onPress={() => {
                navigation.navigate('AddResident');
            }}>
            <Image style={styles.tiny_logo} source={require('../../img/addact.png')} />
            </TouchableOpacity>

            <TouchableOpacity   onPress={() => {
                navigation.navigate('Report');
            }}>
            <Image style={styles.tiny_logo} source={require('../../img/reportnot.png')} />
            </TouchableOpacity>

            <TouchableOpacity   onPress={() => {
                navigation.navigate('Map');
            }}>
            <Image style={styles.tiny_logo} source={require('../../img/mapnot.png')} />
            </TouchableOpacity>

            <TouchableOpacity   onPress={() => {
                navigation.navigate('Profile');
            }}>
            <Image style={styles.tiny_logo} source={require('../../img/profnot.png')} />
            </TouchableOpacity>
         </TouchableOpacity>
         
    <ScrollView scontentContainerStyle={{
      width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
    }}>

    <View style={styles.container3}>
    <Text>householdno :</Text>
    <TextInput 
    value={householdno}
    onChangeText={text => sethouseholdno(text)}
    style={focused.householdno ? styles.textInputFocused : styles.textInput}
    onFocus={() => setFocused({householdno: true, firstname: false, middlename:false, lastname: 
      false, age: false, birthdate:false,   civilstatus:false, gender: false})}
    onBlur={() => setFocused({householdno: false, firstname: false, middlename:false, lastname: 
      false, age: false, birthdate:false, birthplace:false,  
      civilstatus:false, gender: false,  bloodtype: false, religion:false, educationalattainment: false,totalhouseholdmember: false,occupation:false,nationality:false,})}
    />

    <Text> First Name:</Text>
    <TextInput 
    value={firstname}
    onChangeText={text => setfirstname(text)}
    style={focused.firstname ? styles.textInputFocused : styles.textInput}
    onFocus={() => setFocused({householdno: false, firstname: true, middlename:false, lastname: 
      false, age: false, birthdate:false,  gender:false, civilstatus:false, })}
      onBlur={() => setFocused({householdno: false, firstname: false, middlename:false, lastname: 
        false, age: false, birthdate:false, birthplace:false,  
        civilstatus:false, gender: false,  bloodtype: false, religion:false,educationalattainment: false,totalhouseholdmember: false,occupation:false,nationality:false,})}
      />
    
    <Text> Middle Name:</Text>
    <TextInput 
      value={middlename}
    onChangeText={text => setmiddlename(text)}
    style={focused.middlename ? styles.textInputFocused : styles.textInput}
    onFocus={() => setFocused({householdno: false, firstname: false, middlename:true, lastname: 
      false, age: false, birthdate:false, gender:false, civilstatus:false, })}
      onBlur={() => setFocused({householdno: false, firstname: false, middlename:false, lastname: 
        false, age: false, birthdate:false, birthplace:false, 
        civilstatus:false, gender: false,  bloodtype: false, religion:false,educationalattainment: false,totalhouseholdmember: false,occupation:false,nationality:false,})}
      />

    <Text> Last Name:</Text>
    <TextInput 
    value={lastname}
    onChangeText={text => setlastname(text)}
    style={focused.lastname ? styles.textInputFocused : styles.textInput}
    onFocus={() => setFocused({householdno: false, firstname: false, middlename:false, lastname: 
      true, age: false, birthdate:false,  civilstatus:false, })}
      onBlur={() => setFocused({householdno: false, firstname: false, middlename:false, lastname: 
        false, age: false, birthdate:false, birthplace:false,  
        civilstatus:false, gender: false,  bloodtype: false, religion:false,educationalattainment: false,totalhouseholdmember: false,occupation:false,nationality:false,})}
      />
    <Text> birthdate:</Text>
      <TextInput
        value={birthdate}
        onChangeText={text => setbirthdate(text)}
        style={styles.textInput}
        onFocus={() => setFocused({householdno: false, firstname: false, middlename:false, lastname: 
          false, age: false, birthdate:true,   civilstatus:false, })}
          onBlur={() => setFocused({householdno: false, firstname: false, middlename:false, lastname: 
            false, age: false, birthdate:false, birthplace:false, 
            civilstatus:false, gender: false,  bloodtype: false, religion:false,educationalattainment: false,totalhouseholdmember: false,occupation:false,nationality:false,})}
          />
      
    

    <Text> birthplace:</Text>
    <TextInput 
    value={birthplace}
    onChangeText={text => setbirthplace(text)}
    style={focused.birthplace ? styles.textInputFocused : styles.textInput}
    onFocus={() => setFocused({householdno: false, firstname: false, middlename:false, lastname: 
      false, age: false, birthdate:false, birthplace:true,  civilstatus:false, gender: false})}
      onBlur={() => setFocused({householdno: false, firstname: false, middlename:false, lastname: 
        false, age: false, birthdate:false, birthplace:false,  
        civilstatus:false, gender: false,  bloodtype: false, religion:false,educationalattainment: false,totalhouseholdmember: false,occupation:false,nationality:false,})}
      />
    <Text> Age:</Text>
    <TextInput 
    value={age}
    onChangeText={text => setage(text)}
    style={focused.age ? styles.textInputFocused : styles.textInput}
    onFocus={() => setFocused({householdno: false, firstname: false, middlename:false, lastname: 
      false, age: true, birthdate:false,   civilstatus:false, gender: false})}
      onBlur={() => setFocused({householdno: false, firstname: false, middlename:false, lastname: 
        false, age: false, birthdate:false, birthplace:false,  
        civilstatus:false, gender: false,  bloodtype: false, religion:false,educationalattainment: false,totalhouseholdmember: false,occupation:false,nationality:false,})}
      />
    <Text> Gender:</Text>
    <TextInput 
    value={gender}
    onChangeText={text => setgender(text)}
    style={focused.gender ? styles.textInputFocused : styles.textInput}
    onFocus={() => setFocused({householdno: false, firstname: false, middlename:false, lastname: 
      false, age: false, birthdate:false,   civilstatus:false, gender:true})}
      onBlur={() => setFocused({householdno: false, firstname: false, middlename:false, lastname: 
        false, age: false, birthdate:false, birthplace:false,  
        civilstatus:false, gender: false,  bloodtype: false, religion:false,educationalattainment: false,totalhouseholdmember: false,occupation:false,nationality:false,})}
      />

    <Text> Civil Status:</Text>
    <TextInput 
    value={civilstatus}
    onChangeText={text => setcivilstatus(text)}
    style={focused.civilstatus ? styles.textInputFocused : styles.textInput}
    onFocus={() => setFocused({householdno: false, firstname: false, middlename:false, lastname: 
      false, age: false, birthdate:false,   civilstatus:true, gender:false})}
      onBlur={() => setFocused({householdno: false, firstname: false, middlename:false, lastname: 
        false, age: false, birthdate:false, birthplace:false,  
        civilstatus:false, gender: false,  bloodtype: false, religion:false,educationalattainment: false,totalhouseholdmember: false,occupation:false,nationality:false,})}
      />

    <Text> Blood Type:</Text>
    <TextInput 
    value={bloodtype}
    onChangeText={text => setbloodtype(text)}
    style={focused.bloodtype ? styles.textInputFocused : styles.textInput}
    onFocus={() => setFocused({bloodtype: true,householdno: false, firstname: false, middlename:false, lastname: 
      false, age: false, birthdate:false,  civilstatus:false, gender: false})}
      onBlur={() => setFocused({householdno: false, firstname: false, middlename:false, lastname: 
        false, age: false, birthdate:false, birthplace:false, gender:false, 
        civilstatus:false,   bloodtype: false, religion:false,educationalattainment: false,totalhouseholdmember: false,occupation:false,nationality:false,})}
      />

    <Text> Religion:</Text>
    <TextInput 
    value={religion}
    onChangeText={text => setreligion(text)}
    style={focused.religion ? styles.textInputFocused : styles.textInput}
    onFocus={() => setFocused({religion:true, bloodtype: false,householdno: false, firstname: false, middlename:false, lastname: 
      false, age: false, birthdate:false, gender:false, civilstatus:false, })}
      onBlur={() => setFocused({householdno: false, firstname: false, middlename:false, lastname: 
        false, age: false, birthdate:false, birthplace:false,  
        civilstatus:false, gender: false,  bloodtype: false, religion:false,educationalattainment: false,totalhouseholdmember: false,occupation:false,nationality:false,})}
      />

    <Text> Totalhousehold Member:</Text>
    <TextInput 
    value={totalhouseholdmember}
    onChangeText={text => settotalhouseholdmember(text)}
    style={focused.totalhouseholdmember ? styles.textInputFocused : styles.textInput}
    onFocus={() => setFocused({totalhouseholdmember: true, religion:false, bloodtype: false,householdno: false, firstname: false, middlename:false, lastname: 
      false, age: false, birthdate:false,  civilstatus:false, gender: false})}
      onBlur={() => setFocused({householdno: false, firstname: false, middlename:false, lastname: 
        false, age: false, birthdate:false, birthplace:false, 
        civilstatus:false, gender: false,  bloodtype: false, religion:false,educationalattainment: false,totalhouseholdmember: false,occupation:false,nationality:false,})}
      />

    <Text> Occupation:</Text>
    <TextInput 
    value={occupation}
    onChangeText={text => setoccupation(text)}
    style={focused.occupation ? styles.textInputFocused : styles.textInput}
    onFocus={() => setFocused({occupation: true, totalhouseholdmember: false, religion:false, bloodtype: false,householdno: false, firstname: false, middlename:false, lastname: 
      false, age: false, birthdate:false, gender:false, civilstatus:false, nationality:false })}
      onBlur={() => setFocused({householdno: false, firstname: false, middlename:false, lastname: 
        false, age: false, birthdate:false, birthplace:false, 
        civilstatus:false, gender: false,  bloodtype: false, religion:false,educationalattainment: false,totalhouseholdmember: false,occupation:false,nationality:false,})}
      />

    <Text> Nationality:</Text>
    <TextInput 
    value={nationality}
    onChangeText={text => setnationality(text)}
    style={focused.nationality ? styles.textInputFocused : styles.textInput}
    onFocus={() => setFocused({nationality: true, occupation: false, totalhouseholdmember: false, religion:false, bloodtype: false,householdno: false, firstname: false, middlename:false, lastname: 
      false, age: false, birthdate:false, gender:false, civilstatus:false, })}
    onBlur={() => setFocused({householdno: false, firstname: false, middlename:false, lastname: 
      false, age: false, birthdate:false, birthplace:false, 
      civilstatus:false, gender: false,  bloodtype: false, religion:false,educationalattainment: false,totalhouseholdmember: false,occupation:false,nationality:false,})}
    />  


    <Text> Educational Attainment:</Text>
    <TextInput 
    value={educationalattainment}
    onChangeText={text => seteducationalattainment(text)}
    style={focused.educationalattainment ? styles.textInputFocused : styles.textInput}
    onFocus={() => setFocused({nationality: false, occupation: false, totalhouseholdmember: false, religion:false, bloodtype: false,householdno: false, firstname: false, middlename:false, lastname: 
      false, age: false, birthdate:false, gender:false, civilstatus:false, educationalattainment:true })}
    onBlur={() => setFocused({householdno: false, firstname: false, middlename:false, lastname: 
      false, age: false, birthdate:false, birthplace:false, 
      civilstatus:false, gender: false,  bloodtype: false, religion:false,educationalattainment: false,totalhouseholdmember: false,occupation:false,nationality:false,})}
    />  

        <Text></Text>
    <TouchableOpacity style={styles.button_ni}
      onPress={() => handleSubmit()}
      >
      <Text style={styles.button_text}>Submit</Text>
    </TouchableOpacity>

    </View>
    </ScrollView>
    </SafeAreaView>
    );
};

    
    export default Form;