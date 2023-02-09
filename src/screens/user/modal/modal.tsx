import {
  Box,
  FlatList,
  HStack,
  Image,
  Modal,
  Pressable,
  Spacer,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {jsonCountry} from './countryJson';
import {CountryCodeList} from '../phone/type';

type ModalPhoneType = {
  modalVisible: boolean;
  setModalVisible: any;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  countryCode: {
    code: string;
    callingCode: string;
    currency: string;
    region: string;
    subregion: string;
    name: {
      common: string;
      fra: string;
    };
  };
  setCountryCode: any;
};

// type CountryData = {
//   currency: string[];
//   callingCode: string[];
//   region: string;
//   subregion: string;
//   flag: string;
//   name: {
//     common: string;
//     fra: string;
//   };
// };
const mapCountry = () => {
  let data: any[] = [];

  Object.keys(jsonCountry).map((_key, index: number) => {
    let newData = {
      code: CountryCodeList[index],
      currency: jsonCountry[CountryCodeList[index]],
      callingCode: jsonCountry[CountryCodeList[index]].callingCode,
      region: jsonCountry[CountryCodeList[index]].region,
      subregion: jsonCountry[CountryCodeList[index]].subregion,
      flag: jsonCountry[CountryCodeList[index]].flag,
      name: {
        common: jsonCountry[CountryCodeList[index]].name.common,
        fra: jsonCountry[CountryCodeList[index]].name.fra,
      },
    };
    data.push(newData);
  });

  return data;
};

// const Item = (data: any) => (
//   <View>
//     <Text>{data}</Text>
//   </View>
// );

const PhoneModal = ({
  modalVisible,
  setModalVisible,
  size,
  countryCode,
  setCountryCode,
}: ModalPhoneType) => {
  return (
    <>
      <Modal isOpen={modalVisible} onClose={setModalVisible} size={size}>
        <Modal.Content maxH="512">
          <Modal.CloseButton />
          <Modal.Header>Return Policy</Modal.Header>
          <Modal.Body>
            {/* <FlatList
                data={mapCountry()}
                renderItem={item => <Item data={item} />}
                keyExtractor={item => item}
              /> */}
            {/* <Text>{JSON.stringify(mapCountry())}</Text> */}
            <ScrollView>
              <FlatList
                data={mapCountry()}
                renderItem={({item}) => (
                  <Box
                    nativeID={item.code}
                    key={item.code}
                    borderBottomWidth="1"
                    _dark={{
                      borderColor: 'muted.50',
                    }}
                    borderColor="muted.800"
                    pl={['0', '4']}
                    pr={['0', '5']}
                    py="2"
                  >
                    <Pressable
                      key={item.code}
                      onPress={() => {
                        console.log(item.callingCode);
                        setCountryCode({
                          ...countryCode,
                          callingCode: item.callingCode,
                        });
                        setModalVisible(false);
                      }}
                    >
                      <HStack
                        space={[2, 3]}
                        justifyContent="space-between"
                        nativeID={item.code}
                        key={item.code}
                      >
                        <Image
                          key={item.code}
                          size="xs"
                          resizeMode="cover"
                          source={{
                            uri: item.flag,
                          }}
                          alt={'Alternate Text ' + size}
                        />
                        <VStack>
                          <Text
                            _dark={{
                              color: 'warmGray.50',
                            }}
                            color="coolGray.800"
                            bold
                          >
                            {item.name.common}
                          </Text>
                          <Text
                            color="coolGray.600"
                            _dark={{
                              color: 'warmGray.200',
                            }}
                          >
                            {item.callingCode}
                          </Text>
                        </VStack>
                        <Spacer />
                        <Text
                          fontSize="xs"
                          _dark={{
                            color: 'warmGray.50',
                          }}
                          color="coolGray.800"
                          alignSelf="flex-start"
                        >
                          {item.timeStamp}
                        </Text>
                      </HStack>
                    </Pressable>
                  </Box>
                )}
                keyExtractor={item => item.code}
              />
            </ScrollView>
          </Modal.Body>
        </Modal.Content>
      </Modal>
      {/* <Center>
        <VStack space={4}>
          {['xs', 'sm', 'md', 'lg', 'xl', 'full'].map(size => {
            return (
              <Button
                onPress={() => handleSizeClick(size)}
                key={size}
              >{`Open ${size} Modal`}</Button>
            );
          })}
        </VStack>
      </Center> */}
    </>
  );
};

export default PhoneModal;
