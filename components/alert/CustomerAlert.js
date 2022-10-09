import React, { useEffect, useRef } from "react";
import { View, Animated } from "react-native"
import PropTypes from 'prop-types'
import { VStack, HStack, Text, Alert,} from "native-base"



function CustomeAlert(props) {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 10,
            useNativeDriver: true
        }).start();
        setTimeout(fadeOut, 3000);

    };

    const fadeOut = () => {
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: true
        }).start();

    };

    useEffect(
        () => {
            if (props.isAnimate == true) {
                fadeIn();

            }
        },
        [props.isAnimate],
    );




    return (
        <View>



            <Animated.View
                style={[

                    {
                        // Bind opacity to animated value
                        opacity: fadeAnim
                    }
                ]}
            >
                <Alert
                w="100%" colorScheme="success" status="success">
                    <VStack space={2} flexShrink={1} w="100%">
                        <HStack flexShrink={1} space={2} alignItems="center" justifyContent="center">
                            <HStack space={2} flexShrink={1} alignItems="center">
                                <Alert.Icon />
                                <Text color={props.bgcolor}>
                                    {props.text}
                                </Text>
                            </HStack>
                        </HStack>
                    </VStack>
                </Alert>


            </Animated.View>



        </View>




    )
};

CustomeAlert.propTypes = {
    bgcolor: PropTypes.string,
    isAnimate: PropTypes.bool,
    text: PropTypes.string,
}
export default CustomeAlert;