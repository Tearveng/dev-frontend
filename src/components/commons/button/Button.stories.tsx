import ButtonComponent from './Button';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

export default {
  title: 'Commons/Button',
  component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = () => (
  <ButtonComponent />
);

export const ButtonCompo = Template.bind({});
