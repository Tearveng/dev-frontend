import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Box, Pressable} from 'native-base';
import ChevronLeft from '@src/assets/logo/chevronLeft.png';
import React from 'react';
import {Image} from 'react-native';
import {StyleSheet} from 'react-native';

const HeaderLeft = () => {
  const navigation =
    useNavigation<StackNavigationProp<ParamListBase, string, undefined>>();
  return (
    <Box
      _text={{
        color: 'amber.50',
      }}
      pl={1}
    >
      <Pressable
        onPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack();
          }
        }}
      >
        <Image source={ChevronLeft} style={styles.container} />
      </Pressable>
    </Box>
  );
};

export default HeaderLeft;

const styles = StyleSheet.create({
  container: {
    width: 35,
    height: 35,
    tintColor: 'white',
  },
});
