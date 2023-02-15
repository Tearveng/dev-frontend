import React from 'react';
import {Box, Text, VStack} from 'native-base';
import {ActionProp} from '.';

const Action = ({number, name}: ActionProp) => {
  return (
    <Box>
      <VStack justifyContent="center">
        <Text color="black" fontSize="3xl" fontStyle="bold">
          {number}
        </Text>
        <Text color="black" fontWeight="medium" fontSize="sm">
          {name}
        </Text>
      </VStack>
    </Box>
  );
};

export default Action;
