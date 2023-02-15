import {Dimensions} from 'react-native';
import {useEffect, useState} from 'react';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

const [dimensions, setDimension] = useState({
  window: windowDimensions,
  screen: screenDimensions,
});

useEffect(() => {
  const subscriptions = Dimensions.addEventListener(
    'change',
    ({window, screen}) => setDimension({window, screen}),
  );

  return () => subscriptions.remove();
}, []);

export {dimensions};
