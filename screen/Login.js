import { View, Text } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box ,Stack ,Input, Button } from "native-base";

export default function Login() {
  return (
    <NativeBaseProvider>
        <Stack space={4} w="75%" maxW="300px" mx="auto" style={{marginTop:'10%'}}>
        <Input style={{backgroundColor:'red', }} size="xl" placeholder="User Name" />
        </Stack>
        <Stack space={4} w="75%" maxW="300px" mx="auto" style={{marginTop:'10%'}}>
        <Input style={{backgroundColor:'red', }} size="xl" placeholder="Password" />
        </Stack>
        
        <Stack space={4} w="75%" maxW="300px" mx="auto" style={{marginTop:'5%' ,}}>
        <Button colorScheme="success">Register</Button>
        </Stack>
    </NativeBaseProvider>
    
    
  )
}