import { View, Text,StyleSheet ,} from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box ,Stack ,Input, Button ,Center,Heading,VStack,FormControl,HStack,Link } from "native-base";
import { color } from 'native-base/lib/typescript/theme/styled-system';

export default function Login({navigation}) {
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
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={()=>{navigation.navigate("DeatailsAdd")}}>
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