import React, {useState, useEffect} from 'react';
import {Modal, Button, Stack} from 'native-base';
import {fetchRandomUser} from '@src/redux/features/random_user/randomUser';
import {useDispatch, useSelector} from 'react-redux';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Layout} from '@src/components/layout';

const ModalComponent = () => {
  const navigation =
    useNavigation<StackNavigationProp<ParamListBase, string, undefined>>();
  const status = useSelector((state: any) => state.randomusers.status);
  const data = useSelector((state: any) => state.randomusers.user);

  const [modalVisible, setModalVisible] = useState(false);
  const [size, setSize] = useState('md');

  const handleSizeClick = (newSize: string) => {
    setSize(newSize);
    setModalVisible(!modalVisible);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRandomUser() as any);
    }
    // dispatch(fetchRandomUser() as any);
    // }, [status, dispatch, data]);
  }, [status, dispatch]);

  // let content = '';
  // if (status === 'loading') {
  //   content = 'loading ...';
  // } else if (status === 'success') {
  //   content = JSON.stringify(data);
  // } else if (status === 'fail') {
  //   content = error || ' ';
  // }

  return (
    <Layout navigation={navigation}>
      <Modal isOpen={modalVisible} onClose={setModalVisible} size={size}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Modal Title</Modal.Header>
          <Modal.Body>
            {/* Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
            officia tempor esse quis. Sunt ad dolore quis aute consequat. Magna
            exercitation reprehenderit magna aute tempor cupidatat consequat
            elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt
            cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim
            laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse
            laborum eiusmod pariatur */}
            {/* {content} */}
            {JSON.stringify(data)}
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              <Button>SAVE</Button>
              <Button
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
                colorScheme="muted"
              >
                CLOSE
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Stack
        mt={10}
        direction={{
          base: 'column',
          md: 'row',
        }}
        space={2}
      >
        {['sm', 'md', 'lg', 'full'].map(size => {
          return (
            <Button
              onPress={() => handleSizeClick(size)}
              key={size}
            >{`Open ${size} Modal`}</Button>
          );
        })}
      </Stack>
    </Layout>
  );
};

export default ModalComponent;
