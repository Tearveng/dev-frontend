import React, {useRef, useState} from 'react';
import {VStack, Center, Stack, Text, Button, FormControl} from 'native-base';

import {faUser, faEye, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {NavigatorRoute} from '@src/navigation/NavigatorRouteConstant';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Keyboard, Platform} from 'react-native';
import {useForm} from 'react-hook-form';
import {registerUser, RegisterUser} from './fetch/handleAuthentication';
import CustomInput from './custominput';

const UserRegister = ({navigation}: any) => {
  const [isEyeOn1, setEyeOn1] = useState(false);
  const [isEyeOn2, setEyeOn2] = useState(false);
  const [countryCode, setCountryCode] = useState({
    code: 'KH',
    callingCode: '855',
    currency: '',
    region: '',
    subregion: '',
    name: {
      common: '',
      fra: '',
    },
  });

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
      re_password: '',
      confirm_password: '',
      phone: '',
    },
  });
  const password = useRef({});
  password.current = watch('re_password', '');

  const onSubmit = async (data: RegisterUser) => {
    const response = await registerUser(data);
    console.log(response);
  };

  return (
    <TouchableWithoutFeedback
      onPress={Platform.OS !== 'web' ? Keyboard.dismiss : () => {}}
      accessible={false}
      style={{overflow: 'hidden'}}
    >
      <Center mt="30px">
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
                  <CustomInput
                    key_id="register_phone"
                    base="300px"
                    md="400px"
                    countryCode={countryCode}
                    setCountryCode={setCountryCode}
                    _icon={faEnvelope}
                    errors={errors.phone}
                    control={control}
                    message="Phone is required"
                    type="phone"
                    placeholder="Phone"
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
                    errors={errors.re_password}
                    control={control}
                    message="Password is required"
                    type="re_password"
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
