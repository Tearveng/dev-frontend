import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEyeSlash, faCaretDown} from '@fortawesome/free-solid-svg-icons';
import {Button, IconButton, Input, Stack, Text} from 'native-base';
import React, {useState} from 'react';
import {Controller} from 'react-hook-form';
import phoneValid from 'google-libphonenumber';
const validate = phoneValid.PhoneNumberUtil.getInstance();
import CountryPicker, {Country} from 'react-native-country-picker-modal';
import {Platform} from 'react-native';

// type CustomInputType = {
//   control: Control<FieldValues, any>;
//   handleSubmit: (
//     onValid: SubmitHandler<FieldValues>,
//     onInvalid?: SubmitErrorHandler<FieldValues>,
//   ) => (e?: React.BaseSyntheticEvent) => Promise<void>;
//   errors: {message: string};
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
  const [popUpCountry, setPopUpCountry] = useState(false);

  const onSelect = (country: Country) => {
    _props.setCountryCode({
      ..._props.countryCode,
      callingCode: country.callingCode,
      code: country.cca2,
    });
  };

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

            if (_props.type === 're_password') {
              console.log(val);
              // min 1 number
              // min 1 -> lowercase letter
              // min 1 -> underscore
              // min 1 -> uppercase letter
              // min 8 characters
              // max 16 characters

              const pattern =
                /^(?=.*[0-9])(?=.*[a-z])(?=.*_)(?=.*[A-Z]).{8,16}$/;

              const result = val.match(pattern);
              return result ? '' : 'Password is too weak';
            }

            if (_props.type === 'confirm_password') {
              return val !== _check_password
                ? 'The passwords do not match'
                : '';
            }

            if (_props.type === 'phone') {
              if (val.length === 1) {
                return 'Phone number is not match length.';
              }

              if (val.length > 1) {
                const verify = validate.parseAndKeepRawInput(
                  val,
                  _props.countryCode.code,
                );

                const validateLength = validate.isPossibleNumber(verify);
                return !validateLength
                  ? 'Phone number is not match length.'
                  : '';
              }
            }
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
              // value.length > 0 && value.charAt(0) === '0' ? '' : value
              value
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
                _props.type !== 're_password' &&
                'text' &&
                _props.type !== 'confirm_password' &&
                'text') ||
              _props.isEyeOn
                ? 'text'
                : 'password'
            }
            InputLeftElement={
              _props.type !== 're_password' &&
              _props.type !== 'password' &&
              _props.type !== 'confirm_password' &&
              _props.type !== 'phone' ? (
                <Button backgroundColor="transparent">
                  <FontAwesomeIcon icon={_icon} />
                </Button>
              ) : _props.type === 'phone' ? (
                <Button
                  // bgColor="transparent"
                  ml="10px"
                  w="55px"
                  size={10}
                  variant="unstyled"
                  endIcon={<FontAwesomeIcon icon={faCaretDown} size={10} />}
                  onPress={() => setPopUpCountry(true)}
                >
                  <CountryPicker
                    // containerButtonStyle={{marginTop: '-0.1px'}}
                    onSelect={onSelect}
                    withCallingCode={true}
                    withFlagButton={false}
                    withFlag={Platform.OS !== 'web' ? true : true}
                    withFilter={true}
                    withCallingCodeButton={true}
                    countryCode={_props.countryCode.code}
                    withEmoji={false}
                    visible={popUpCountry}
                    excludeCountries={['AQ', 'BV', 'TF', 'HM', 'UM']}
                  />
                  {/* <CountryPicker countryCode="AF" visible={popUpCountry} /> */}
                </Button>
              ) : undefined
            }
            InputRightElement={
              _props.type === 'password' ||
              _props.type === 're_password' ||
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
