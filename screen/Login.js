import { View, Text,StyleSheet,} from 'react-native'
import React,{useState} from 'react'
import { NativeBaseProvider, Box ,Stack ,Input, Button ,Center,Heading,VStack,FormControl,HStack,Link } from "native-base";
import { color } from 'native-base/lib/typescript/theme/styled-system';

export default function Login({navigation}) {
     const[status,setStatus]=useState('');
     const[token,setToken]=useState('');
     const[username,setUserName]=useState('');
     const[password, setPassword]=useState('')

  return (
    <NativeBaseProvider>
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Welcome
        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input
             onChangeText={(text)=>{
                     setUserName(text)
                }}
                value={username}/>
          </FormControl>


          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input

            onChangeText={(pass)=>{
              setPassword(pass)
         }}
         value={password}

            type="password" />
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo"
           onPress={()=>{
            
            if(username != " " && password !=""){

              var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                
                var raw = JSON.stringify({
                  "username": username,
                  "password":  password
                });
                
                var requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: raw,
                  redirect: 'follow'
                };
                
                fetch("https://fakestoreapi.com/auth/login", requestOptions)
                  .then(response => response.json())
           
                  
                .then(result =>{
                    console.log(result)
                    navigation.navigate("DeatailsAdd")
                 
                })
                  .catch(error => alert('error', error));
            }else{
              alert("Enter the User and Password")
            }
            
            
            
            }}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center" >
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              I'm a new user.{ }
            </Text>
            <Link style={{color:'#f9c2ff'}}
             onPress={()=>{navigation.navigate("Register") }} >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
    
    </NativeBaseProvider>
  )
}

const style=StyleSheet.create({
  Link:{
    color:'#f9c2ff',
    fontWeight:'300',
    fontSize:'5%'
  }
})