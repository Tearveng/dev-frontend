import {faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
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
        <Text style={[styles.title]}>{title}</Text>
        <FontAwesomeIcon icon={!expand ? faCaretDown : faCaretUp} size={10} />
      </TouchableOpacity>
      <View style={styles.parentHr} />
      {expand && (
        <View style={styles.child}>
          {data.map((item: any, index: number) => (
            <Text style={styles.childBox} key={index}>
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
    border: '1px solid #d4d4d8',
  },
  parentHr: {
    height: 1,
    width: '100%',
  },
  child: {},
  childBox: {
    height: 70,
    padding: 16,
    border: '1px solid #d4d4d8',
  },
});
