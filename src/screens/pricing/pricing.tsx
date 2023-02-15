import React, {useEffect, useState} from 'react';
import {Center, Box, HStack, ScrollView, View} from 'native-base';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Layout} from '@src/components/layout';
import PricingComponent from './pricingComponent';
import {pricingList} from './pricingList';
import {PricingType} from './type';
import {Dimensions, Platform} from 'react-native';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');
const Pricing = () => {
  const navigation =
    useNavigation<StackNavigationProp<ParamListBase, string, undefined>>();
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
  return (
    <Layout navigation={navigation}>
      <ScrollView h={Platform.OS === 'web' ? '100vh' : '100%'}>
        <View width="100%">
          <Center mt="60px" bg="gray.100">
            <HStack
              space={3}
              justifyContent={`${
                dimensions.window.width < 760 ? 'center' : 'space-between'
              }`}
              w={{base: '250px', sm: '400px', md: '610px', lg: '900px'}}
              direction="row"
              flexWrap="wrap"
            >
              {pricingList.map((item: PricingType, index: number) => (
                <Box key={index}>
                  {/*Pricing Component*/}
                  <PricingComponent
                    //   title={item.title}
                    //   price={item.price}
                    //   annual={item.annual}
                    //   include={item.include}
                    //   includes={item.includes}
                    {...item}
                  />
                </Box>
              ))}
            </HStack>
          </Center>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default Pricing;
