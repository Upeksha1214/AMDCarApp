import {SafeAreaView, StyleSheet, TextInput} from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box ,Stack ,Input, Button } from "native-base";
import * as Animatable from 'react-native-animatable';

export default function Register({navigation}) {

  return (
    
    <NativeBaseProvider>

        <Stack space={4} w="75%" maxW="300px" mx="auto"  style={{marginTop:'10%', radius:'40%'}}>
        <Animatable.Text animation="slideInDown" iterationCount={5} direction="alternate"
        style={{backgroundColor:'red',textAlign:'center',}}>
          Up and down you go</Animatable.Text>
        {/* <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center' }}>
          ❤️</Animatable.Text> */}
          </Stack> 
        
        <Stack space={4} w="75%" maxW="300px" mx="auto" style={{marginTop:'5%',}}>
        <TextInput style={styles.input} placeholder="Gmail"keyboardType="email-address"/>
        </Stack> 
        <Stack space={4} w="75%" maxW="300px" mx="auto" style={{marginTop:'5%'}}>
        <TextInput style={styles.input} placeholder="User Name"keyboardType="default"/>
        </Stack>
        <Stack space={4} w="75%" maxW="300px" mx="auto" style={{marginTop:'5%'}}>
        <TextInput style={styles.input} placeholder="Passeword"keyboardType="visible-password"/>
        </Stack>
        <Stack space={4} w="75%" maxW="300px" mx="auto" style={{marginTop:'5%'}}>
        <TextInput style={styles.input} placeholder="Confirom"keyboardType="visible-password"/>
        </Stack>

        <Stack space={4} w="75%" maxW="300px" mx="auto" style={{marginTop:'5%' ,}}>
        <Button styles={styles.button} colorScheme="success" onPress={()=>{navigation.navigate("Login")}}>
          Register</Button>
        </Stack>
          
    </NativeBaseProvider>
    
  )
}

const styles = StyleSheet.create({
  input:{
    borderStyle:'solid',
    backgroundColor:'blue',
    borderRadius:100,
    borderWidth: 1,
    padding: 10,
    color:'#ffffff'
    
  },

  button:{
    borderRadius:100,
    borderWidth: 1,
    padding: 10,
    borderStyle:'solid',
  }
})