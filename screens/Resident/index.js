import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import { useSelector } from 'react-redux';
import styles from '../../Styles/styles';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useState, useEffect } from 'react';



const Table = () => {
  const [formData, setFormData] = useState([]);
  const navigation = useNavigation();
  const [data, setResidents] = useState('');
  
  useEffect(() => {
    fetchResidents();
    const interval = setInterval(fetchResidents, 1000);

  
    return () => clearInterval(interval);
  }, []);

  const fetchResidents = () => {
    axios
      .get('https://darkrayleh.pythonanywhere.com/api/v1/residents/residents/list')
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleRemoveResident = async (resident) => {
    try {
      const response = await axios.delete(
        `https://darkrayleh.pythonanywhere.com/api/v1/residents/residents/delete/${resident.id}/`
        
      );
      setFormData((prevResidents) =>
        prevResidents.filter((resident) => resident.id !== resident.id)
      );
  
  
      return response.data;
    } catch (error) {
      console.error("Error deleting resident:", error);
      throw error;
    }
  };

  return (


    <SafeAreaView style={{width:'100%', height: '100%', alignContent:'center', marginTop:30}}>

        <TouchableOpacity style = {styles.top_ni}>
        <TouchableOpacity   onPress={() => {
                navigation.navigate('Dashboard');
            }}>
            <Image style={styles.tiny_logo} source={require('../../img/dashnot.png')} />
            </TouchableOpacity>

            <TouchableOpacity   onPress={() => {
                navigation.navigate('Resident');
            }}>
            <Image style={styles.tiny_logo} source={require('../../img/resact.png')} />
            </TouchableOpacity>

            <TouchableOpacity   onPress={() => {
                navigation.navigate('Household');
            }}>
            <Image style={styles.tiny_logo} source={require('../../img/housenot.png')} />
            </TouchableOpacity>

            <TouchableOpacity   onPress={() => {
                navigation.navigate('AddResident');
            }}>
            <Image style={styles.tiny_logo} source={require('../../img/addnot.png')} />
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
        
        <Text style={{ padding: 10, fontWeight: 'bold', backgroundColor: '#e6ebff', elevation: 10}}>Total Resident: {formData.length}</Text>
        
        <TextInput
            style={{borderWidth: 1, 
              borderColor: '#96b2ea', 
              width: '80%', 
              padding: 5, 
              marginTop: 10, 
              fontSize: 15, 
              borderRadius: 15,
              textAlign: 'center',
              alignSelf:'center',
              justifyContent: 'center', 
           
                }} 
                placeholder='Search'
                value={data}
                onChangeText={text => setData(text)}
                />
            
                
 
        <ScrollView horizontal contentContainerStyle={{width: 2580}}>
        <ScrollView vertical={true} >
      
            <View style={styles.tableRow}>
          
                <Text style={styles.gender_ni1}>ID #</Text>
                <Text style={styles.table_ni2}>Last Name</Text>
                <Text style={styles.table_ni1}>First Name</Text>
                <Text style={styles.table_ni2}>Middle Name</Text>
                <Text style={styles.age_ni1}>Age</Text>
                <Text style={styles.gender_ni1}>Gender</Text>
                <Text style={styles.table_ni2}>Birthdate</Text>
                <Text style={styles.table_ni2}>Birthplace</Text>
                <Text style={styles.table_ni1}>Civil Status</Text>
                <Text style={styles.gender_ni1}>Blood Type</Text>
                <Text style={styles.table_ni2}>Religion</Text>
                <Text style={styles.table_ni2}>Total Household Member</Text>
                <Text style={styles.table_ni2}>Occupation</Text>
                <Text style={styles.table_ni2}>Nationality</Text>
                <Text style={styles.table_ni2}>Educational Attainment</Text>
                <Text style={styles.table_ni1}>Household No.</Text>
                

            </View>
    
            
            {formData.map((resident, index) => (


            <View key={index} style={styles.tableRow}>
                
              

                <TouchableOpacity style={styles.gender_ni1}>
                    <Text style={styles.tableCellText}>{index + 1}</Text>  
                </TouchableOpacity>

                <TouchableOpacity style={styles.table_ni2}>
                
                    <Text style={styles.tableCellText}>{resident.lastname}</Text>
                </TouchableOpacity>
                
                    <TouchableOpacity style={styles.table_ni1}>
                
                    <Text style={styles.tableCellText}>{resident.firstname}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.table_ni2}>
                    <Text style={styles.tableCellText}>{resident.middlename}</Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity style={styles.age_ni1}>
                    <Text style={styles.tableCellText}>{resident.age}</Text>
                    </TouchableOpacity>
            
                < TouchableOpacity style={styles.gender_ni1}>
                    <Text style={styles.tableCellText}>{resident.gender}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.table_ni2}>
                    <Text style={styles.tableCellText}>{resident.birthdate}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.table_ni2}>
                    <Text style={styles.tableCellText}>{resident.birthplace}</Text>
                    </TouchableOpacity>

                    < TouchableOpacity style={styles.table_ni1}>
                <Text style={styles.tableCellText}>{resident.civilstatus}</Text>
                </TouchableOpacity>


                    <TouchableOpacity style={styles.gender_ni1}>
                    <Text style={styles.tableCellText}>{resident.bloodtype}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.table_ni2}>
                    <Text style={styles.tableCellText}>{resident.religion}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.table_ni2}>
                    <Text style={styles.tableCellText}>{resident.totalhouseholdmember}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.table_ni2}>
                    <Text style={styles.tableCellText}>{resident.occupation}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.table_ni2}>
                    <Text style={styles.tableCellText}>{resident.nationality}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.table_ni2}>
                    <Text style={styles.tableCellText}>{resident.educationalattainment}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{borderrightWidth: 1,
                                        borderrightColor: '#d3d3d3',
                                        width: 100,
                                        height: 35, 
                                        padding: 5, 
                                        borderBottomWidth: 1,
                                        borderBottomColor: 'black' ,
                                        fontWeight: 'bold',}}>
                    <Text style={styles.tableCellText}>{resident.householdno}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.delete}
                        onPress={() => handleRemoveResident(resident)}>
                  
                  <Text style = {styles.button_text}>Delete</Text>
                    </TouchableOpacity>

            </View>
            
            ))}
            </ScrollView>
            </ScrollView>

            

            <View style={{flexDirection: 'row', justifyContent:'center', marginBottom:45 }}>
                        <TouchableOpacity style = {styles.add} 
                        onPress={() => {
                            navigation.navigate('AddResident');
                        }}>
                        <Text style = {styles.button_text}>Add Resident</Text>
                        </TouchableOpacity>
                        
                       
            </View>
   
    </SafeAreaView>
  );
    
};

export default Table;