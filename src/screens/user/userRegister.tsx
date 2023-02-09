import React, {useRef, useState} from 'react';
import {
  VStack,
  Center,
  Stack,
  Text,
  Button,
  FormControl,
  // InputGroup,
  // InputLeftAddon,
  // Pressable,
  // InputRightAddon,
  // InputRightAddon,
} from 'native-base';

import {faUser, faEye, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {NavigatorRoute} from '@src/navigation/NavigatorRouteConstant';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {
  Keyboard,
  Platform,
  // Pressable,
  // TouchableOpacity,
  // View,
} from 'react-native';
import {useForm} from 'react-hook-form';
import {registerUser, RegisterUser} from './fetch/handleAuthentication';
import CustomInput from './custominput';
import PhoneModal from './modal/modal';
// import Country from 'react-native-country-picker-modal';
// import {CountryCode} from './phone/type';

const UserRegister = ({navigation}: any) => {
  const [isEyeOn1, setEyeOn1] = useState(false);
  const [isEyeOn2, setEyeOn2] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  // const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState({
    code: '',
    callingCode: '855',
    currency: '',
    region: '',
    subregion: '',
    name: {
      common: '',
      fra: '',
    },
  });
  // const [flag, setFlag] = useState<CountryCode>('KH');

  // if (Platform.OS !== 'web') {
  //   const {CountryPicker} = require('react-native-country-codes-picker');
  //   contryPicker = (
  //     // <View>
  //     //   <TouchableOpacity
  //     //     onPress={() => setShow(true)}
  //     //     style={{
  //     //       width: '80%',
  //     //       height: 60,
  //     //       backgroundColor: 'black',
  //     //       padding: 10,
  //     //     }}
  //     //   >
  //     //     <Text
  //     //       style={{
  //     //         color: 'white',
  //     //         fontSize: 20,
  //     //       }}
  //     //     >
  //     //       {countryCode}
  //     //     </Text>
  //     //   </TouchableOpacity>
  //     //   // For showing picker just put show state to show prop
  //     //   <
  //     // </View>
  //     <CountryPicker
  //       show={show}
  //       // when picker button press you will get the country object with dial code
  //       pickerButtonOnPress={(item: any) => {
  //         // setCountryCode(item.dial_code);
  //         setShow(false);
  //       }}
  //       lang="en"
  //     />
  //   );
  // }

  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm({
    defaultValues: {
      first: '',
      last: '',
      email: '',
      password: '',
      confirm_password: '',
      phone: '',
    },
  });
  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = async (data: RegisterUser) => {
    const response = await registerUser(data);
    console.log(response);
  };

  // @ts-ignore
  return (
    <TouchableWithoutFeedback
      onPress={Platform.OS !== 'web' ? Keyboard.dismiss : () => {}}
      accessible={false}
      style={{overflow: 'hidden'}}
    >
      <Center mt="80px">
        <VStack space={4} alignItems="center">
          <FormControl isInvalid>
            <Stack direction="column">
              <Center w="80" h="20">
                <Text bold fontSize="xl" color="black">
                  Register
                </Text>
              </Center>
              <Center w="80" h="70px" rounded="md">
                <Stack>
                  <CustomInput
                    key_id="register_firstname"
                    base="300px"
                    md="400px"
                    _icon={faUser}
                    errors={errors.first}
                    control={control}
                    message="Firstname is required"
                    type="first"
                    placeholder="Firstname"
                  />
                </Stack>
              </Center>
              <Center w="80" h="70px" rounded="md">
                <Stack>
                  <CustomInput
                    key_id="register_lastname"
                    base="300px"
                    md="400px"
                    _icon={faUser}
                    errors={errors.last}
                    control={control}
                    message="Lastname is required"
                    type="last"
                    placeholder="Lastname"
                  />
                </Stack>
              </Center>

              <Center w="80" h="70px" rounded="md">
                <Stack>
                  <CustomInput
                    key_id="register_email"
                    base="300px"
                    md="400px"
                    _icon={faEnvelope}
                    errors={errors.email}
                    control={control}
                    message="Email is required"
                    type="email"
                    placeholder="Email"
                  />
                </Stack>
              </Center>

              <Center w="80" h="70px" rounded="md">
                <Stack>
                  {/*<Stack>{contryPicker}</Stack>*/}
                  {/* <InputGroup
                  w={{
                    base: '300px',
                    md: '400px',
                  }}
                > */}
                  {/* <Pressable onPress={() => setShow(true)}>
                    <InputLeftAddon bgColor="transparent" key="left-1">
                      {countryCode}
                    </InputLeftAddon>
                  </Pressable> */}
                  <CustomInput
                    key_id="register_phone"
                    base="300px"
                    md="400px"
                    countryCode={countryCode}
                    modal={setModalVisible}
                    _icon={faEnvelope}
                    errors={errors.phone}
                    control={control}
                    message="Phone is required"
                    type="phone"
                    placeholder="Phone"
                  />
                  {/* <InputRightAddon bgColor="transparent" key="left-2">
                    <Country
                      countryCode={flag}
                      onSelect={e => {
                        setCountryCode(e.callingCode[0]);
                        // @ts-ignore
                        setFlag(e.cca2);
                      }}
                      withAlphaFilter={true}
                      // withFlag={true}
                      withModal={true}
                      withCallingCode={true}
                      visible={show}
                      onClose={() => setShow(false)}
                    />
                  </InputRightAddon> */}
                  {/* </InputGroup> */}
                  <PhoneModal
                    size="xl"
                    countryCode={countryCode}
                    setCountryCode={setCountryCode}
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                  />
                </Stack>
              </Center>

              <Center w="80" h="60px" rounded="md">
                <Stack>
                  <CustomInput
                    key_id="register_password"
                    base="300px"
                    md="400px"
                    _icon={faEye}
                    errors={errors.password}
                    control={control}
                    message="Password is required"
                    type="password"
                    placeholder="Password"
                    isEyeOn={isEyeOn1}
                    setEyeOn={setEyeOn1}
                  />
                </Stack>
              </Center>

              <Center w="80" h="60px" rounded="md">
                <Stack>
                  <CustomInput
                    key_id="register_con_password"
                    base="300px"
                    md="400px"
                    _icon={faEye}
                    errors={errors.confirm_password}
                    control={control}
                    message="Confirm Password is required"
                    type="confirm_password"
                    placeholder="Confirm Password"
                    isEyeOn={isEyeOn2}
                    setEyeOn={setEyeOn2}
                    _check_password={password.current}
                  />
                </Stack>
              </Center>

              <Center w="80" h="80px" rounded="md">
                <Button
                  size="sm"
                  variant="link"
                  onPress={() => navigation.navigate(NavigatorRoute.LOGIN2)}
                >
                  Already have an account?
                </Button>

                <Button
                  size="sm"
                  rounded="2xl"
                  px={10}
                  onPress={handleSubmit(onSubmit)}
                >
                  Submit
                </Button>
              </Center>
            </Stack>
          </FormControl>
        </VStack>
      </Center>
    </TouchableWithoutFeedback>
  );
};

export default UserRegister;
