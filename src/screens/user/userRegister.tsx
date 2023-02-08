import React, {useState} from 'react';
import {VStack, Center, Stack, Text, Button, FormControl} from 'native-base';

import {faUser, faEye, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {NavigatorRoute} from '@src/navigation/NavigatorRouteConstant';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Keyboard, Platform} from 'react-native';
import {useForm} from 'react-hook-form';
import {RegisterUser} from './fetch/handleAuthentication';
import CustomInput from './custominput';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserRegister = ({navigation}: any) => {
  const [isEyeOn1, setEyeOn1] = useState(false);
  const [isEyeOn2, setEyeOn2] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: '',
    },
  });

  const onSubmit = async (data: RegisterUser) => {
    try {
      await AsyncStorage.getItem('uid', (err, d) => {
        d && console.log(d);
        err && console.error(err);
      });
    } catch (e) {
      console.error(e);
    }
    console.log(data);
  };

  return (
    <TouchableWithoutFeedback
      onPress={Platform.OS !== 'web' ? Keyboard.dismiss : () => {}}
      accessible={false}
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
                    icon={faUser}
                    errors={errors.first_name}
                    control={control}
                    message="Firstname is required"
                    type="first_name"
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
                    icon={faUser}
                    errors={errors.last_name}
                    control={control}
                    message="Lastname is required"
                    type="last_name"
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
                    icon={faEnvelope}
                    errors={errors.email}
                    control={control}
                    message="Email is required"
                    type="email"
                    placeholder="Email"
                  />
                </Stack>
              </Center>

              <Center w="80" h="60px" rounded="md">
                <Stack>
                  <CustomInput
                    key_id="register_password"
                    base="300px"
                    md="400px"
                    icon={faEye}
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
                    icon={faEye}
                    errors={errors.confirm_password}
                    control={control}
                    message="Confirm Password is required"
                    type="confirm_password"
                    placeholder="Confirm Password"
                    isEyeOn={isEyeOn2}
                    setEyeOn={setEyeOn2}
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
