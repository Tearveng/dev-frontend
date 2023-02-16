import React, {useEffect, useState} from 'react';
import {Box, HStack, VStack, Center, Avatar, Text} from 'native-base';
import {Layout} from '@src/components/layout';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Action from './Action';
import {Dimensions, ScaledSize} from 'react-native';
import Dropzone from './DropZone';
import Header from './Header';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');
const HomeWeb = () => {
  const navigation =
    useNavigation<StackNavigationProp<ParamListBase, string, undefined>>();
  const [dimensions, setDimension] = useState<{
    window: ScaledSize;
    screen: ScaledSize;
  }>({
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
            <VStack space={12} w={['200px', '600px', '800px']}>
              <Header dimensions={dimensions} />
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
                <Dropzone />
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
