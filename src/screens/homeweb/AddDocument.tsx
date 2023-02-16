import React from 'react';
import {
  AspectRatio,
  Box,
  Image,
  // Center,
  Stack,
  // Heading,
  Text,
  HStack,
} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
export const AddDocument = () => {
  return (
    <Box>
      <Box alignItems="start">
        <Box
          maxW={'100%'}
          // rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: 'coolGray.600',
            backgroundColor: 'gray.700',
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: 'gray.50',
          }}
        >
          <Box>
            <AspectRatio w="100%" ratio={16 / 12}>
              <Image
                source={{
                  uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
                }}
                alt="image"
              />
            </AspectRatio>
            {/*<Center*/}
            {/*  bg="violet.500"*/}
            {/*  _dark={{*/}
            {/*    bg: 'violet.400',*/}
            {/*  }}*/}
            {/*  _text={{*/}
            {/*    color: 'warmGray.50',*/}
            {/*    fontWeight: '700',*/}
            {/*    fontSize: 'xs',*/}
            {/*  }}*/}
            {/*  position="absolute"*/}
            {/*  bottom="0"*/}
            {/*  px="3"*/}
            {/*  py="1.5"*/}
            {/*>*/}
            {/*  PHOTOS*/}
            {/*</Center>*/}
          </Box>
          <HStack p="3" space={3} alignItems={'center'}>
            <Stack>
              {/*<Heading size="xs" ml="-1" selectable={false}>*/}
              <Text
                numberOfLines={1}
                w={'200px'}
                fontWeight={'medium'}
                color={'black'}
              >
                The Garden City .png
              </Text>
              {/*</Heading>*/}
              <HStack alignItems="center">
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}
                  fontWeight="400"
                >
                  6 mins ago
                </Text>
              </HStack>
            </Stack>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default AddDocument;
