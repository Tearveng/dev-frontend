import React, {useState} from 'react';
import {
  VStack,
  Center,
  Stack,
  Input,
  Text,
  Button,
  // FormControl,
  IconButton,
} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye, faEnvelope, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {NavigatorRoute} from '@src/navigation/NavigatorRouteConstant';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Keyboard, Platform} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {LoginUser, loginUser} from './fetch/handleAuthentication';

const UserLogin = ({navigation}: any) => {
  const [isEyeOn, setEyeOn] = useState({
    eyeOne: false,
  });
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

  const onSubmit = async (data: LoginUser) => {
    const result = await loginUser(data);
    console.log(result);
  };

  // eslint-disable-next-line no-useless-escape
  // const validateEmail = (text: any) => {
  //   if (email(text)) {
  //   }
  // };

  // const formSubmit = async (e: any) => {
  //   e.preventDefault();

  // };

  // const person = (
  //   <Icon name="person" size={15} color="#200" style={style.inputPadding} />
  // );
  // const eyeOffPassword = (
  //   <Icon
  //     name={`${isEyeOn.eyeOne ? 'eye' : 'eye-off'}`}
  //     size={15}
  //     color="#200"
  //     style={style.inputPadding}
  //     onPress={() => setEyeOn({...isEyeOn, eyeOne: !isEyeOn.eyeOne})}
  //   />
  // );
  // const eyeOffConfirmPassword = (
  //   <Icon
  //     name={`${isEyeOn.eyeTwo ? 'eye' : 'eye-off'}`}
  //     size={15}
  //     color="#200"
  //     style={style.inputPadding}
  //     onPress={() => setEyeOn({...isEyeOn, eyeTwo: !isEyeOn.eyeTwo})}
  //   />
  // );
  // const email = (
  //   <Icon name="mail" size={15} color="#200" style={style.inputPadding} />
  // );

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
                <Controller
                  control={control}
                  rules={{
                    required: 'Email is required.',
                    validate: (val: string) => {
                      const pattern =
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                      const result = val.match(pattern);
                      return result ? undefined : 'Email is Invalid.';
                    },
                  }}
                  render={({field: {onChange, onBlur, value}}) => (
                    <Input
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      variant="unstyled"
                      color="black"
                      rounded="2xl"
                      px={2}
                      w={{
                        base: '300px',
                        md: '400px',
                      }}
                      InputLeftElement={
                        <IconButton backgroundColor="transparent">
                          <FontAwesomeIcon icon={faEnvelope} />
                        </IconButton>
                      }
                      placeholder="Email"
                    />
                  )}
                  name="email"
                />
                {errors.email && (
                  <Text fontSize="2xs" pl={2} color="danger.600">
                    {errors.email.message}
                  </Text>
                )}
              </Stack>
            </Center>

            <Center w="80" h="60px" rounded="md">
              <Stack>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({field: {onChange, onBlur, value}}) => (
                    <Input
                      onChangeText={onChange}
                      type={`${isEyeOn.eyeOne ? 'text' : 'password'}`}
                      // type="password"
                      onBlur={onBlur}
                      value={value}
                      variant="unstyled"
                      color="black"
                      rounded="2xl"
                      px={2}
                      w={{
                        base: '300px',
                        md: '400px',
                      }}
                      InputRightElement={
                        <IconButton
                          backgroundColor="transparent"
                          onPress={() =>
                            setEyeOn({...isEyeOn, eyeOne: !isEyeOn.eyeOne})
                          }
                        >
                          <FontAwesomeIcon
                            icon={isEyeOn.eyeOne ? faEye : faEyeSlash}
                          />
                        </IconButton>
                      }
                      placeholder="Password"
                    />
                  )}
                  name="password"
                />
                {errors.password && (
                  <Text fontSize="2xs" color="danger.600" pl={2}>
                    Password is required.
                  </Text>
                )}
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
