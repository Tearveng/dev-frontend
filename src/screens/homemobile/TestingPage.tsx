import React, {useState, useRef} from 'react';
import {StyleSheet, TouchableWithoutFeedback, Animated} from 'react-native';
import {View, Text} from 'native-base';

const AccordionItem = () => {
  const [open, setOpen] = useState(false);
  const animatedController = useRef(new Animated.Value(0)).current;
  const [bodySectioHeight] = useState(0);
  const bodyHeight = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: [0, bodySectioHeight],
  });

  const toggleListItem = () => {
    if (open) {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 0,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
    setOpen(!open);
  };

  const render = (
    <Animated.View style={[styles.bodyBackground, {height: bodyHeight}]}>
      <View style={styles.bodyBackground}>Body</View>
    </Animated.View>
  );

  return (
    <TouchableWithoutFeedback onPress={() => toggleListItem()}>
      <View style={styles.titleBackground} w={'50px'}>
        <Text color={'black'}>List Item</Text>
        {render}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AccordionItem;

const styles = StyleSheet.create({
  titleBackground: {
    backgroundColor: '#d4d4d8',
  },
  bodyBackground: {
    backgroundColor: '#000000',
  },
});
