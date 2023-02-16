import React, {useState} from 'react';
import {useDropzone} from 'react-dropzone';
import {Button, Center, HStack, Spinner, Heading, Box, Text} from 'native-base';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {NavigatorRoute} from '@src/navigation/NavigatorRouteConstant';

function Dropzone() {
  const navigation =
    useNavigation<StackNavigationProp<ParamListBase, string, undefined>>();

  const [loading, setLoading] = useState(false);
  const {getRootProps, getInputProps, open, isDragActive} = useDropzone({
    noKeyboard: true,
    noClick: true,
    onDragEnter: () => {},
    onDrop: (acceptedFiles: any[]) => {
      setLoading(true);
      setTimeout(() => {
        const files = acceptedFiles.map((file: any) => {
          const newFile = Object.assign(file, {
            preview: URL.createObjectURL(file),
          });
          return {
            size: file.size,
            content: newFile,
          };
        });

        setLoading(false);
        navigation.navigate(NavigatorRoute.VIEW_UPLOAD, {files});
      }, 5000);
    },
  });

  return (
    <Box
      bg="white"
      w={['200px', '600px', '800px']}
      h={['100px', '300px', '400px']}
      p="20px"
    >
      <div {...getRootProps({className: 'dropzone'})} style={{height: '100vh'}}>
        <Button
          variant="unstyled"
          w="full"
          h="full"
          borderStyle="dashed"
          borderWidth={2}
          borderColor={isDragActive ? 'blue.600' : 'gray.300'}
          fontSize="2xl"
          color="blue.600"
          _hover={{
            borderColor: 'blue.600',
            color: 'blue.600',
          }}
          onPress={() => open()}
        >
          <section className="container">
            <input {...getInputProps()} />
            <Text
              fontSize={'15px'}
              color={isDragActive ? 'blue.600' : 'gray.300'}
            >
              Drag drop some files here, or click to select files
            </Text>

            {loading ? (
              <HStack space={2} justifyContent="center">
                <Spinner accessibilityLabel="Loading posts" />
                <Heading color="primary.500" fontSize="md">
                  Loading
                </Heading>
              </HStack>
            ) : (
              <Center>
                <Button onPress={() => open()} mt={'10px'}>
                  START NOW
                </Button>
              </Center>
            )}
          </section>
        </Button>
      </div>
    </Box>
  );
}

export default Dropzone;
