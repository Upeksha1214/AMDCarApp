import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet,  StatusBar} from "react-native"


import {Text, Box, Heading, AspectRatio, Image, Center, HStack, Stack, NativeBaseProvider } from "native-base";

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    }
    
    
  ];

  
  
  const Example = () => {
    return <Box alignItems="center">
        <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700"
      }} _web={{
        shadow: 2,
        borderWidth: 0
      }} _light={{
        backgroundColor: "gray.50"
      }}>
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image source={{
              uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
            }} alt="image" />
            </AspectRatio>
            <Center bg="violet.500" _dark={{
            bg: "violet.400"
          }} _text={{
            color: "warmGray.50",
            fontWeight: "700",
            fontSize: "xs"
          }} position="absolute" bottom="0" px="3" py="1.5">
              PHOTOS
            </Center>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                The Garden City
              </Heading>
              <Text fontSize="xs" _light={{
              color: "violet.500"
            }} _dark={{
              color: "violet.400"
            }} fontWeight="500" ml="-0.5" mt="-1">
                The Silicon Valley of India.
              </Text>
            </Stack>
            <Text fontWeight="400">
              Bengaluru (also called Bangalore) is the center of India's high-tech
              industry. The city is also known for its parks and nightlife.
            </Text>
            <HStack alignItems="center" space={4} justifyContent="space-between">
              <HStack alignItems="center">
                <Text color="coolGray.600" _dark={{
                color: "warmGray.200"
              }} fontWeight="400">
                  6 mins ago
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </Box>
      </Box>;
  };



  const Item = ({ title }) => (
    <View style={styles.item}>
         <Example/>
    </View>
  );



function ManageDetailsPage(){
    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );

   return (

    <NativeBaseProvider>
                <SafeAreaView>
                    
                <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                />
                </SafeAreaView>
    </NativeBaseProvider>

    

      
   )
}
export default ManageDetailsPage


const styles = StyleSheet.create({
   xx : {
       backgroundColor : 'blue',
       width : 100,
       height : 100

   },

    container: {
      flex: 1,
      alignItems : 'center'
    //   marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      margin : 20,
    
       
    //   marginVertical: 8,
    //   marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
