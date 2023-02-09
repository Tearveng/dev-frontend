import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {IconButton, Input, Stack, Text} from 'native-base';
import React from 'react';
import {Controller} from 'react-hook-form';

const CustomInput = ({
  control,
  errors,
  base,
  md,
  _icon,
  message,
  key_id,
  _check_password,
  ..._props
}: any) => {
  return (
    <Stack>
      <Controller
        control={control}
        rules={{
          required: message,
          validate: (val: string) => {
            if (_props.type === 'email') {
              const pattern =
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
              const result = val.match(pattern);
              return result ? undefined : 'Email is Invalid.';
            }

            if (_props.type === 'confirm_password') {
              return val !== _check_password
                ? 'The passwords do not match'
                : undefined;
            }

            return;
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            fontSize="16px"
            nativeID={key_id}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            variant="unstyled"
            color="black"
            rounded="2xl"
            px={2}
            w={{
              base: base,
              md: md,
            }}
            type={
              (_props.type !== 'password' &&
                'text' &&
                _props.type !== 'confirm_password' &&
                'text') ||
              _props.isEyeOn
                ? 'text'
                : 'password'
            }
            InputLeftElement={
              _props.type !== 'password' &&
              _props.type !== 'confirm_password' &&
              _props.type !== 'phone' ? (
                <IconButton backgroundColor="transparent">
                  <FontAwesomeIcon icon={_icon} />
                </IconButton>
              ) : undefined
            }
            InputRightElement={
              _props.type === 'password' ||
              _props.type === 'confirm_password' ? (
                <IconButton
                  backgroundColor="transparent"
                  onPress={() => _props.setEyeOn(!_props.isEyeOn)}
                >
                  <FontAwesomeIcon icon={_props.isEyeOn ? _icon : faEyeSlash} />
                </IconButton>
              ) : undefined
            }
            placeholder={_props.placeholder}
          />
        )}
        name={_props.type}
      />
      {errors && (
        <Text fontSize="2xs" pl={2} color="danger.600">
          {errors.message}
        </Text>
      )}
    </Stack>
  );
};

export default CustomInput;
