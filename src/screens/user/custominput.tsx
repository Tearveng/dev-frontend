import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEyeSlash, faCaretDown} from '@fortawesome/free-solid-svg-icons';
import {Button, IconButton, Input, Stack, Text} from 'native-base';
import React from 'react';
import {Controller} from 'react-hook-form';
import phoneValid from 'google-libphonenumber';
const validate = phoneValid.PhoneNumberUtil.getInstance();

// type CustomInputType = {
//   control: Control<FieldValues, any>;
//   handleSubmit: Promise<void>;
//   errors: {email: string};
//   base: string;
//   md: string;
//   _icon: IconDefinition;
//   message: string;
//   key_id: string;
//   _check_password: string;
//   _props: any;
// };

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
              return result ? '' : 'Email is Invalid.';
            }

            if (_props.type === 'confirm_password') {
              return val !== _check_password
                ? 'The passwords do not match'
                : '';
            }

            if (_props.type === 'phone') {
              // console.log([val, _props.countryCode.code]);
              if (val.length === 1) {
                return 'Phone number is not match length.';
              }

              if (val.length > 1) {
                const verify = validate.parseAndKeepRawInput(
                  val,
                  _props.countryCode.code,
                );

                const validatePhone = validate.isValidNumber(verify);
                const validateLength = validate.isPossibleNumber(verify);
                const codeVerify = verify.getCountryCode();
                const nationalNumber = verify.getNationalNumber();
                const extension = verify.getExtension();
                const numberaw = verify.getRawInput();

                console.log({
                  coountryCode: _props.countryCode.code,
                  codeVerify: codeVerify,
                  nationalNumber: nationalNumber,
                  extension: extension,
                  numberaw: numberaw,
                  validateLength: validateLength,
                  validatePhone: validatePhone,
                });

                return !validateLength
                  ? 'Phone number is not match length.'
                  : '';
              }

              // const codeVerify = verify.getCountryCode();
              // const nationalNumber = verify.getNationalNumber();
              // const extension = verify.getExtension();
              // const numberaw = verify.getRawInput();
              // // const validatePhoneRegion = validate.isValidNumberForRegion(
              // //   verify,
              // //   _props.countryCode.code,
              // // );
              // console.log({
              //   codeVerify: codeVerify,
              //   nationalNumber: nationalNumber,
              //   extension: extension,
              //   numberaw: numberaw,
              //   validateLength: validateLength,
              //   validatePhone: validatePhone,
              // });
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
            maxLength={_props.type === 'phone' ? 15 : undefined}
            value={
              // _props.type === 'phone'
              //   ? /[0-9]/.test(value)
              //     ? value
              //     : ''
              //   : value
              // value.(0) === '0' ? '' : value
              value.length > 0 && value.charAt(0) === '0' ? '' : value
            }
            onKeyPress={e => {
              if (_props.type === 'phone') {
                if (
                  !/[0-9]/.test(e.nativeEvent.key) &&
                  e.nativeEvent.key !== 'Backspace'
                ) {
                  e.preventDefault();
                }
              }
            }}
            variant="unstyled"
            color="black"
            rounded="2xl"
            // onKeyPress={event => {
            //   if (_props.type === 'phone') {
            //     if (!/[0-9]/.test(event.)) {
            //       event.preventDefault();
            //     }
            //   }
            // }}
            px={2}
            w={{
              base: base,
              md: md,
            }}
            keyboardType={_props.type === 'phone' ? 'numeric' : undefined}
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
                <Button backgroundColor="transparent">
                  <FontAwesomeIcon icon={_icon} />
                </Button>
              ) : _props.type === 'phone' ? (
                <Button
                  w="65px"
                  size={10}
                  variant="unstyled"
                  endIcon={<FontAwesomeIcon icon={faCaretDown} size={10} />}
                  onPress={() => _props.modal(true)}
                >
                  <Text color="black"> + {_props.countryCode.callingCode}</Text>
                </Button>
              ) : (
                <></>
              )
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
