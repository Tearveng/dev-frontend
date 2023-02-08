import React, {useState} from 'react';
import {VStack, Center, Stack, Text, Button} from 'native-base';
import {faEye, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {NavigatorRoute} from '@src/navigation/NavigatorRouteConstant';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Keyboard, Platform} from 'react-native';
import {useForm} from 'react-hook-form';
import {LoginUser, loginUser} from './fetch/handleAuthentication';
import CustomInput from './custominput';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserLogin = ({navigation}: any) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const _storeData = async (_value: string) => {
    try {
      await AsyncStorage.setItem('uid', _value, err => {
        err && console.error(err);
      });
    } catch (e) {
      console.error(e);
    }
  };

  const onSubmit = async (data: LoginUser) => {
    const result = await loginUser(data);
    const {id} = result;

    await _storeData(id);
    console.log(result);
  };

  const [isEyeOn, setEyeOn] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPress={Platform.OS !== 'web' ? Keyboard.dismiss : () => {}}
      accessible={false}
    >
      <Center mt="80px" h="500px">
        <VStack space={4} alignItems="center">
          {/* <FormControl isInvalid> */}
          <Stack direction="column">
            <Center w="80" h="20">
              <Text bold fontSize="xl" color="black">
                Login
              </Text>
            </Center>

            <Center w="80" h="70px" rounded="md">
              <Stack>
                <CustomInput
                  key_id="login_email"
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
                  key_id="login_password"
                  base="300px"
                  md="400px"
                  icon={faEye}
                  errors={errors.password}
                  control={control}
                  message="Password is required"
                  type="password"
                  placeholder="Password"
                  isEyeOn={isEyeOn}
                  setEyeOn={setEyeOn}
                />
              </Stack>
            </Center>

            <Center w="80" h="80px" rounded="md">
              <Button
                size="sm"
                variant="link"
                onPress={() => navigation.navigate(NavigatorRoute.REGISTER)}
              >
                Don&apos;t have an account yet?
              </Button>

              <Button
                size="sm"
                rounded="2xl"
                px={10}
                onPress={handleSubmit(onSubmit)}
              >
                Login
              </Button>
            </Center>
          </Stack>
          {/* </FormControl> */}
        </VStack>
      </Center>
    </TouchableWithoutFeedback>
  );
};

export default UserLogin;
