import React, {useState} from 'react';
import {
  VStack,
  Center,
  Stack,
  Input,
  Text,
  Button,
  FormControl,
  IconButton,
} from 'native-base';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faUser,
  faEye,
  faEnvelope,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import {NavigatorRoute} from '@src/navigation/NavigatorRouteConstant';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Keyboard, Platform} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {RegisterUser} from './fetch/handleAuthentication';

const UserRegister = ({navigation}: any) => {
  const [isEyeOn, setEyeOn] = useState({
    eyeOne: false,
    eyeTwo: false,
  });
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

  console.log('Rerender');

  const onSubmit = (data: RegisterUser) => {
    // const result = await loginUser(data);
    console.log(data);
  };

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
                  <Controller
                    control={control}
                    rules={{
                      required: 'Firstname is required.',
                      // validate: (val: string) => {
                      //   const pattern =
                      //     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                      //   const result = val.match(pattern);
                      //   return result ? undefined : 'Email is Invalid.';
                      // },
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
                            <FontAwesomeIcon icon={faUser} />
                          </IconButton>
                        }
                        placeholder="Firstname"
                      />
                    )}
                    name="first_name"
                  />
                  {errors.first_name && (
                    <Text fontSize="2xs" pl={2} color="danger.600">
                      {errors.first_name.message}
                    </Text>
                  )}
                </Stack>
              </Center>
              <Center w="80" h="70px" rounded="md">
                <Stack>
                  <Controller
                    control={control}
                    rules={{
                      required: 'Lastname is required.',
                      // validate: (val: string) => {
                      //   const pattern =
                      //     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                      //   const result = val.match(pattern);
                      //   return result ? undefined : 'Email is Invalid.';
                      // },
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
                            <FontAwesomeIcon icon={faUser} />
                          </IconButton>
                        }
                        placeholder="Lastname"
                      />
                    )}
                    name="last_name"
                  />
                  {errors.last_name && (
                    <Text fontSize="2xs" pl={2} color="danger.600">
                      {errors.last_name.message}
                    </Text>
                  )}
                </Stack>
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
                      required: 'Password is required.',
                      // validate: (val: string) => {
                      //   const pattern =
                      //     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                      //   const result = val.match(pattern);
                      //   return result ? undefined : 'Email is Invalid.';
                      // },
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
                      required: 'Password is required.',
                      // validate: (val: string) => {
                      //   const pattern =
                      //     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                      //   const result = val.match(pattern);
                      //   return result ? undefined : 'Email is Invalid.';
                      // },
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
                        InputRightElement={
                          <IconButton
                            backgroundColor="transparent"
                            onPress={() =>
                              setEyeOn({...isEyeOn, eyeTwo: !isEyeOn.eyeTwo})
                            }
                          >
                            <FontAwesomeIcon
                              icon={isEyeOn.eyeTwo ? faEye : faEyeSlash}
                            />
                          </IconButton>
                        }
                        placeholder="Confirm Password"
                      />
                    )}
                    name="confirm_password"
                  />
                  {errors.confirm_password && (
                    <Text fontSize="2xs" pl={2} color="danger.600">
                      {errors.confirm_password.message}
                    </Text>
                  )}
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
