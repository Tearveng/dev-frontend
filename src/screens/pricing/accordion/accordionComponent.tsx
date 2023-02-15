import {faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect} from 'react';
import {View, Text} from 'native-base';
import {
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  TouchableOpacity,
} from 'react-native';

const AccordionComponent = ({title, data, expand, setExpand}: any) => {
  const toogle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpand(!expand);
  };
  useEffect(() => {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);
  return (
    <View>
      <TouchableOpacity
        // ref={accordian}
        style={styles.row}
        onPress={() => toogle()}
      >
        <Text borderColor="gray.300" color="black" borderStyle="solid">
          {title}
        </Text>
        <FontAwesomeIcon icon={!expand ? faCaretDown : faCaretUp} size={10} />
      </TouchableOpacity>
      <View style={styles.parentHr} />
      {expand && (
        <View>
          {data.map((item: any, index: number) => (
            <Text
              color="black"
              borderWidth="1"
              borderColor="gray.300"
              borderTopWidth={0}
              p="15px"
              key={index}
            >
              {item}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default AccordionComponent;

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    // fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 46,
    paddingLeft: 15,
    paddingRight: 18,
    alignItems: 'center',
    // border: '5px solid red',
    borderWidth: 1,
    borderColor: '#d4d4d8',
    borderTopWidth: 0,
  },
  parentHr: {
    height: 1,
    width: '100%',
  },
});
