import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {UserLogin} from './userLogin';
import {View} from 'native-base';

export default {
  title: 'Commons/LanguagePicker',
  component: UserLogin,
} as ComponentMeta<typeof UserLogin>;

const Template: ComponentStory<typeof UserLogin> = () => (
  <View
    width={'100%'}
    height={400}
    display="flex"
    justifyContent={'center'}
    alignItems="center"
  >
    <UserLogin />
  </View>
);

export const SimpleLanguagePicker = Template.bind({});
