import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import images from '../../config/image';
import Header from '../../component/Header';
import style from './style';

const Handleterms = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={style.safearea}>
      <Header
        image1={images.leftArrow}
        imagestyle={undefined}
        title={'Terms and Condition'}
        titlestyle={undefined}
        headerstyle={undefined}
        onpress={() => navigation.goBack()}></Header>
    </SafeAreaView>
  );
};
export default Handleterms;
