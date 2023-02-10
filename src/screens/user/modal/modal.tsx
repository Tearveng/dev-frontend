import {
  Box,
  // FlatList,
  HStack,
  Image,
  Modal,
  Pressable,
  Spacer,
  Text,
  VStack,
  Input,
  View,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

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
  search: string;
  setSearch: any;
  _countries: any[];
};

const PhoneModal = ({
  modalVisible,
  setModalVisible,
  size,
  countryCode,
  setCountryCode,
  search,
  setSearch,
  _countries,
}: ModalPhoneType) => {
  // let data: JSX.Element[] = [];
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    handleFetchData();
  }, []);

  const handleFetchData = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <>
      <Modal isOpen={modalVisible} onClose={setModalVisible} size={size}>
        <Modal.Content maxH="512">
          <Modal.Header>
            <Input
              variant="unstyled"
              color="black"
              type="text"
              size="md"
              w="300px"
              mt="-5px"
              maxLength={50}
              placeholder="Search"
              value={search}
              onChangeText={e => setSearch(e)}
            />
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            {/* <FlatList
                data={mapCountry()}
                renderItem={item => <Item data={item} />}
                keyExtractor={item => item}
              /> */}
            {/* <Text>{JSON.stringify(mapCountry())}</Text> */}
            <View>
              {loading ? (
                <Text>loading...</Text>
              ) : (
                _countries.map((item: any, index: number) => (
                  <Box
                    key={index}
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
                          code: item.code,
                        });
                        setModalVisible(false);
                      }}
                    >
                      <ScrollView>
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
                      </ScrollView>
                    </Pressable>
                  </Box>
                ))
              )}
            </View>
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
