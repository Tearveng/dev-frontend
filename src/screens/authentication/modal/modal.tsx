import {
  Modal,
  Spacer,
  VStack,
  Input,
  View,
  Text,
  HStack,
  Image,
  Pressable,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

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
            <View>
              {loading ? (
                <Text>loading...</Text>
              ) : (
                <FlatList
                  data={_countries}
                  renderItem={({item}) => (
                    // <Box
                    //   key={item.code}
                    //   // borderBottomWidth="1"
                    //   // _dark={{
                    //   //   borderColor: 'muted.50',
                    //   // }}
                    //   // borderColor="muted.800"
                    //   // pl={['0', '4']}
                    //   // pr={['0', '5']}
                    //   // py="2"
                    // >
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
                      </HStack>
                    </Pressable>
                  )}
                  keyExtractor={(_: any, index: any) => index}
                />

                //   mapCountry().map((item: any, index: number) => (
                //     <Box
                //       key={index}
                //       // borderBottomWidth="1"
                //       // _dark={{
                //       //   borderColor: 'muted.50',
                //       // }}
                //       // borderColor="muted.800"
                //       // pl={['0', '4']}
                //       // pr={['0', '5']}
                //       // py="2"
                //     >
                //       <Pressable
                //         key={item.code}
                //         onPress={() => {
                //           console.log(item.callingCode);
                //           setCountryCode({
                //             ...countryCode,
                //             callingCode: item.callingCode,
                //             code: item.code,
                //           });
                //           setModalVisible(false);
                //         }}
                //       >
                //         <ScrollView>
                //           <HStack
                //             space={[2, 3]}
                //             justifyContent="space-between"
                //             nativeID={item.code}
                //             key={item.code}
                //           >
                //             <Image
                //               key={item.code}
                //               size="xs"
                //               resizeMode="cover"
                //               source={{
                //                 uri: item.flag,
                //               }}
                //               alt={'Alternate Text ' + size}
                //             />
                //             <VStack>
                //               <Text
                //                 _dark={{
                //                   color: 'warmGray.50',
                //                 }}
                //                 color="coolGray.800"
                //                 bold
                //               >
                //                 {item.name.common}
                //               </Text>
                //               <Text
                //                 color="coolGray.600"
                //                 _dark={{
                //                   color: 'warmGray.200',
                //                 }}
                //               >
                //                 {item.callingCode}
                //               </Text>
                //             </VStack>
                //             <Spacer />
                //           </HStack>
                //         </ScrollView>
                //       </Pressable>
                //     </Box>
                //   ))
                // )}
              )}
              {/* {loading ? (
                <Text>loading...</Text>
              ) : (
                _countries.map((item: any, index) => (
                  <Box key={index}>{item.callingCode}</Box>
                ))
              )} */}
            </View>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default PhoneModal;
