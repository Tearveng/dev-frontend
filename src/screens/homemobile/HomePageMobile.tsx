import React from 'react';
import {VStack, Heading, Text, HStack, Box} from 'native-base';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Layout} from '@src/components/layout';
import SelectOption from '@screens/homemobile/SelectOption';
import {faUser, faUsers, faPen} from '@fortawesome/free-solid-svg-icons';

const HomePageMobile = () => {
  const navigation =
    useNavigation<StackNavigationProp<ParamListBase, string, undefined>>();
  return (
    <Layout navigation={navigation}>
      <Box w={'100%'} h={'100%'}>
        <VStack h={'100%'}>
          <Heading bg="amber.300" h={'10%'} p={5}>
            <VStack w={'10%'}>
              <Text fontSize="sm" fontWeight="bold" color="black">
                Upgrade Your Account
              </Text>
              <Text fontSize="xs" flex={1} flexWrap="wrap">
                Send more envelopes and enjoy additional premium features
              </Text>
            </VStack>
          </Heading>
          <HStack p="20px" space={4} justifyContent="center">
            <Box bg="white" h="100px">
              <VStack w="150px" alignItems="center">
                <Text color="black" fontSize="4xl">
                  0
                </Text>
                <Text color="black">Action Required</Text>
              </VStack>
            </Box>
            <Box bg="white" h="100px">
              <VStack w="150px" alignItems="center">
                <Text color="black" fontSize="4xl">
                  0
                </Text>
                <Text color="black">Waiting for Others</Text>
              </VStack>
            </Box>
          </HStack>
          <VStack
            justifyContent="center"
            w="full"
            // alignItems="center"
            alignContent="center"
          >
            <SelectOption icon={faUser} option="Create/Edit your profile" />
            <SelectOption icon={faUsers} option="Request Signatures" />
            <SelectOption icon={faPen} option="Sign Document" />
          </VStack>
        </VStack>
      </Box>
    </Layout>
  );
};

export default HomePageMobile;
