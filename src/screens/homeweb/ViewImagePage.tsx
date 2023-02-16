import React, {useState} from 'react';
import {View, VStack, Center, Pressable, HStack, Text, Box} from 'native-base';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Layout} from '@src/components/layout';
import AddDocument from '@screens/homeweb/AddDocument';
import {ExpandArr} from '@screens/homeweb/type';
import AddRecipient from '@screens/homeweb/AddRecipient';
import AddMessage from '@screens/homeweb/AddMessage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons';
export const ViewImagePage = () => {
  const navigation =
    useNavigation<StackNavigationProp<ParamListBase, string, undefined>>();
  // const {route} = props;
  const [expand, setExpand] = useState<ExpandArr>({
    addDocument: false,
    addRecipient: false,
    addMessage: false,
  });

  return (
    <Layout navigation={navigation}>
      <View justifyContent={'center'} w={'full'} mt={'5%'}>
        <Center>
          <VStack w={['100%', '100%', '80%', '50%']} space={5} px={6}>
            <Pressable
              onPress={() =>
                setExpand({...expand, addDocument: !expand.addDocument})
              }
              borderBottomColor={'gray-600'}
              borderBottomWidth={1}
            >
              {/*<Center>*/}
              <HStack
                space={10}
                w={'full'}
                bg={'amber.500'}
                alignItems={'center'}
                justifyContent={'space-between'}
                p={'20px'}
              >
                <Text
                  fontSize={'25px'}
                  fontWeight={'medium'}
                  color={'black'}
                  selectable={false}
                >
                  Add documents
                </Text>
                <FontAwesomeIcon
                  icon={expand.addDocument ? faCaretDown : faCaretUp}
                  size={20}
                />
              </HStack>
              <Box p={'10px'}>{expand.addDocument && <AddDocument />}</Box>
              {/*</Center>*/}
            </Pressable>
            <Pressable
              onPress={() =>
                setExpand({...expand, addRecipient: !expand.addRecipient})
              }
              borderBottomColor={'gray-600'}
              borderBottomWidth={1}
            >
              <Center>
                <HStack
                  space={10}
                  w={'full'}
                  bg={'amber.500'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  p={'20px'}
                >
                  <Text
                    fontSize={'25px'}
                    color={'black'}
                    fontWeight={'medium'}
                    selectable={false}
                  >
                    Add recipients
                  </Text>
                  <FontAwesomeIcon
                    icon={expand.addRecipient ? faCaretDown : faCaretUp}
                    size={20}
                  />
                </HStack>
                <AddRecipient />
              </Center>
            </Pressable>
            <Pressable
              onPress={() =>
                setExpand({...expand, addMessage: !expand.addMessage})
              }
              borderBottomColor={'gray-600'}
              borderBottomWidth={1}
            >
              <Center>
                <HStack
                  space={10}
                  w={'full'}
                  bg={'amber.500'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  p={'20px'}
                >
                  <Text
                    fontSize={'25px'}
                    fontWeight={'medium'}
                    color={'black'}
                    selectable={false}
                  >
                    Add Message
                  </Text>
                  <FontAwesomeIcon
                    icon={expand.addMessage ? faCaretDown : faCaretUp}
                    size={20}
                  />
                </HStack>
                <AddMessage />
              </Center>
            </Pressable>
          </VStack>
        </Center>
      </View>
    </Layout>
  );
};
