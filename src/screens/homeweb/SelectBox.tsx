import React from 'react';
import {Center, HStack, Pressable, Text} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons';

interface SelectBoxProp {
  key?: string;
  title: string;
  children: any;
  expand: boolean;
  setExpand: any;
}
export const SelectBox = ({
  children,
  expand,
  setExpand,
  title,
}: SelectBoxProp) => {
  return (
    <Pressable onPress={() => setExpand()}>
      <Center>
        <HStack
          space={10}
          w={'full'}
          bg={'amber.500'}
          alignItems={'center'}
          justifyContent={'space-between'}
          p={'20px'}
          borderBottomColor={'gray-600'}
          borderBottomWidth={1}
        >
          <Text fontSize={'30px'} color={'black'} selectable={false}>
            {title}
          </Text>
          <FontAwesomeIcon icon={!expand ? faCaretDown : faCaretUp} size={20} />
        </HStack>
        {children}
      </Center>
    </Pressable>
  );
};

export default SelectBox;
