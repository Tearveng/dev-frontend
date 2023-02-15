import React, {useEffect, useState} from 'react';
import {
  Box,
  HStack,
  VStack,
  Heading,
  Center,
  Button,
  Avatar,
  Text,
  Progress,
  Flex,
} from 'native-base';
import {Layout} from '@src/components/layout';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Action from './Action';
// import {FilePickerWeb} from '@components/commons/file_picker';
import {Dimensions} from 'react-native';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');
const HomeWeb = () => {
  const navigation =
    useNavigation<StackNavigationProp<ParamListBase, string, undefined>>();
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
    <Layout navigation={navigation}>
      <Box mt={8} w="full">
        <Center>
          <VStack space={24}>
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

            <VStack space={12} w={['200px', '600px', '800px']}>
              <Center>
                <Box>
                  <HStack space={12} alignItems="center">
                    {dimensions.window.width > 760 && (
                      <Box>
                        <HStack
                          justifyContent="center"
                          alignItems="center"
                          space={4}
                        >
                          <Avatar
                            size="lg"
                            source={{
                              uri: 'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
                            }}
                          >
                            asd
                          </Avatar>
                          <Text color="black">Username</Text>
                        </HStack>
                      </Box>
                    )}
                    <Action number={0} name="Action Required" />
                    <Action number={0} name="Waiting for Others" />
                    <Action number={0} name="Expiring Soon" />
                    <Action number={0} name="Completed" />
                  </HStack>
                </Box>
              </Center>

              <Center>
                <Box
                  bg="white"
                  w={['200px', '600px', '800px']}
                  h={['100px', '300px', '400px']}
                  p="20px"
                >
                  <Button
                    variant="unstyled"
                    w="full"
                    h="full"
                    borderStyle="dashed"
                    borderWidth={2}
                    borderColor="gray.300"
                    fontSize="2xl"
                    color="blue.600"
                    _hover={{
                      borderColor: 'blue.600',
                      color: 'blue.600',
                    }}
                  >
                    Drop documents here to get started
                    <Center>
                      {/*<Button*/}
                      {/*  w="50%"*/}
                      {/*  mt="15px"*/}
                      {/*  onPress={() => fileRef.current?.click()}*/}
                      {/*>*/}
                      {/*  START NOW*/}
                      {/*</Button>*/}
                      {/*<FilePickerWeb />*/}
                    </Center>
                  </Button>
                </Box>
              </Center>

              <Center>
                <HStack>
                  {/*<CardBox />*/}
                  {/*<CardBox />*/}
                  {/*<CardBox />*/}
                </HStack>
              </Center>
            </VStack>
          </VStack>
        </Center>
      </Box>
    </Layout>
  );
};

export default HomeWeb;
