import React from 'react';
import {HStack, View, Text, Pressable} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconDefinition, faArrowRight} from '@fortawesome/free-solid-svg-icons';

interface SelectOption {
  icon: IconDefinition;
  option: string;
}
const SelectOption = ({icon, option}: SelectOption) => {
  return (
    <Pressable
      onPress={() => console.log('hello world')}
      onHoverIn={() => console.log('hover In')}
      _pressed={{opacity: 0.8}}
    >
      <View w="full" bg="blue.50">
        <HStack justifyContent="space-between" p="3%" alignItems="center">
          <HStack space={4} alignItems="center">
            <FontAwesomeIcon icon={icon} color="#52525b" />
            <Text color="gray.600">{option}</Text>
          </HStack>
          <FontAwesomeIcon icon={faArrowRight} color="#52525b" />
        </HStack>
      </View>
    </Pressable>
  );
};

export default SelectOption;
