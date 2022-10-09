import React, { useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { NativeBaseProvider, Box, Button, Flex, VStack, Center, HStack, TextArea, Input } from "native-base"

import CustomeAlert from '../components/alert/CustomerAlert';




export default function DeatailsAdd({ navigation }) {

  const[change,setChage]=useState(false);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('')
  const [image, setImage] = useState('');

  const delayChageTime=()=>{
    setChage(false);
}

  const openCamera = () => {
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',

      },
      includeBase64: true,
    }
    launchCamera(options, response => {

      if (response.didCancel) {
        console.log("user cancelld image picker");
      } else {
        let source = {
          uri: 'data:image/jpeg;base64,' + response.assets[0].base64
        };
        setImage(source)
      }
    });

  }

  const openGalarey = () => {
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',

      },
      includeBase64: true,
    }
    launchImageLibrary(options, response => {

      if (response.didCancel) {
        console.log("user cancelld image picker");
      } else {
        let source = {
          uri: 'data:image/jpeg;base64,' + response.assets[0].base64
        };
        setImage(source)
      }
    });

  }

  return (
    <NativeBaseProvider>


      <Box flex={1} mt='3' flexDirection='column' rounded="xl" safeArea>

        <ScrollView>


          <Box height='30%' width="100%" flexDirection='row' alignItems='center' justifyContent='space-around'>

            <Box height='40' flexDirection='column' justifyContent='space-around'>
              <Button
                onPress={async () => {
                  openCamera();
                  //const result = await launchCamera();

                }}
              >Open Camera</Button>
              <Button
                onPress={() => {
                  openGalarey();
                }}

              >Add Image</Button>
            </Box>

            <Box bg='white' rounded='xl' height='100%' width='60%' alignItems='center'>


              <Image

                source={image}

                style={{
                  overflow: 'hidden',
                  height: '100%',
                  width: '100%',
                  borderRadius: 10,
                  //  borderWidth : 2,
                  //  borderColor : 'blue'

                }}

              />




            </Box>
          </Box>


          <Box mt='10' height='30%' width="100%" flexDirection='row' alignItems='center' justifyContent='center'>

            <Box bg='white' rounded='xl' height='90%' width='90%' alignItems='center' justifyContent='space-around'>

              <Input
                onChangeText={text => setTitle(text)}
                value={title}

                mb='4' shadow={2} _light={{
                  bg: "coolGray.100",
                  _hover: {
                    bg: "coolGray.200"
                  },
                  _focus: {
                    bg: "coolGray.200:alpha.70"
                  }
                }} _dark={{
                  bg: "coolGray.800",
                  _hover: {
                    bg: "coolGray.900"
                  },
                  _focus: {
                    bg: "coolGray.900:alpha.70"
                  }
                }} placeholder="Title" />
              <TextArea
                onChangeText={desc => setDesc(desc)}
                value={desc}
                width='100%' height='100%' placeholder="Text Area Placeholder" />

            </Box>
          </Box>

          <Box height='40' flexDirection='column' alignItems='center'  >
            <Button width='60%' mb='4' mt='4' onPress={() => {
              fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                      "title" : {title},
                      "desc" : {desc},
                      "image" : {image}
                })
              })
              .then((response) => response.json())
              .then((json) => {
                        setChage(true)
                        setTimeout(delayChageTime,3000)
                    
               })
               .catch((err)=>{
                   alert(err)
               })
            }}
            >Save Details</Button>

            <Button width='60%' bg='red.500'>Cancelld</Button>

          </Box>
          <Box height='20' flexDirection='column' alignItems='center' >
            <Button width='60%' bg='darkblue' onPress={() => { navigation.navigate("ManageDetailsPage") }} >Manage Details</Button></Box>
        </ScrollView>
        
        <CustomeAlert 
          bgcolor={"green"}
          isAnimate={change}
          text="Details Addedd Completed"
       />

      </Box>
    </NativeBaseProvider>
  )
}