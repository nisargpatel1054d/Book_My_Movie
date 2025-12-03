import React, {useRef} from 'react';
import {Animated, Button, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import images from '../../config/image';
import Header from '../../component/Header';
import style from './style';
import color from '../../config/colors';

const Handlesupport = ({navigation}: {navigation: any}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start()
  };
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start()
  };
  return (
    <SafeAreaView style={style.safearea}>
      <Header
        image1={images.leftArrow}
        imagestyle={undefined}
        title={'Support'}
        titlestyle={undefined}
        headerstyle={undefined}
        onpress={() => navigation.goBack()}></Header>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Animated.View
          style={{
            backgroundColor: color.errigalWhite,
            borderRadius: 20,
            height: 100,
            width: 100,
            opacity: fadeAnim
          }}
        />
        <View style={{flexDirection:'row', gap:10, marginTop:20}}>
        <Button title={'FadeIn'} color={'red'} onPress={fadeIn}></Button>
        <Button title={'FadeOut'} color={'skyblue'} onPress={fadeOut}></Button>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Handlesupport;
