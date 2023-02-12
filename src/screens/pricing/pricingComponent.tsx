import React, {useEffect, useState} from 'react';
import {
  Box,
  Pressable,
  Center,
  Text,
  Button,
  HStack,
  Spacer,
} from 'native-base';
import {PricingType} from './type';
import AccordionComponent from './accordion/accordionComponent';
import {Dimensions} from 'react-native';
const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

const PricingComponent = ({
  annual,
  include,
  includes,
  title,
  price,
}: PricingType) => {
  const [expand, setExpand] = useState(false);
  const [dimensions, setDimension] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  useEffect(() => {
    const subscriptions = Dimensions.addEventListener(
      'change',
      ({window, screen}) => setDimension({window, screen}),
    );

    return () => subscriptions.remove();
  }, []);

  return (
    <Box w="72" borderTopColor="blue.700" borderTopStyle="solid" mb="20px">
      <Pressable
        onPress={() => console.log("I'm Pressed")}
        overflow="hidden"
        borderWidth="1"
        borderColor="coolGray.300"
        //   shadow="3"
        bg="coolGray.100"
        p="5"
      >
        <Box>
          <Center>
            <Text
              style={{textTransform: 'capitalize'}}
              color="blue.700"
              fontSize="3xl"
            >
              {title}
            </Text>
            <Spacer />

            <HStack
              justifyContent="center"
              alignItems="center"
              alignContent="center"
            >
              <Text fontSize="xl" color="cooGray.800">
                $
              </Text>
              <Text
                color="coolGray.800"
                mt="3"
                fontWeight="medium"
                fontSize="3xl"
              >
                {price}
              </Text>
            </HStack>
            <Text mt="1" fontSize="sm" color="coolGray.700">
              {include}
            </Text>
            <Text fontSize="sm" color="coolGray.700">
              ${annual} annually
            </Text>
            <Button w="200px">BUY NOW</Button>
          </Center>
        </Box>
      </Pressable>
      <Box>
        {dimensions.window.width < 760 ? (
          <AccordionComponent
            title="VIEW FEATURES"
            data={includes}
            expand={expand}
            setExpand={setExpand}
          />
        ) : (
          ''
        )}
        {dimensions.window.width < 760
          ? ''
          : includes.map((item: string, index: number) => (
              <Text
                // rounded="8"
                overflow="hidden"
                p="15px"
                borderWidth="1"
                borderColor="coolGray.300"
                color="black"
                key={index}
              >
                {item}
              </Text>
            ))}
      </Box>
    </Box>
  );
};

export default PricingComponent;
