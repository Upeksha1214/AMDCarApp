import {SafeAreaView, StyleSheet, TextInput} from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box ,Stack ,Input, Button,Center,Heading,VStack,FormControl, } from "native-base";
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
        
          <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="medium" size="xs">
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={()=>{navigation.navigate("Login")}}>
            Sign up
          </Button>
        </VStack>
      </Box>
    </Center>
          
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