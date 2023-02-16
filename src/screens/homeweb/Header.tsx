import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Progress,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import {ScaledSize} from 'react-native';

interface HeaderDimensions {
  dimensions: {window: ScaledSize};
}

export const Header = ({dimensions}: HeaderDimensions) => {
  return (
    <Heading>
      <Center>
        <Flex
          justifyContent="center"
          direction={dimensions.window.width < 760 ? 'column' : 'row'}
          alignItems="center"
          flexWrap="wrap"
        >
          <VStack space={4} mb={4} mr={8}>
            <HStack fontSize="md" space={12}>
              <Text>Get Started with eSignature</Text>
              <Box>2/6 Completed</Box>
            </HStack>
            <Box w="100%">
              <Progress value={45} />
            </Box>
          </VStack>
          {/*<Box h="5px">*/}
          <Button
            p={0}
            m={0}
            w={24}
            h="25px"
            textTransform="uppercase"
            size="xs"
          >
            Show Me
          </Button>
          {/*</Box>*/}
        </Flex>
      </Center>
    </Heading>
  );
};

export default Header;
