///bounce ball on one position to other position

import React from "react";
import {Text, View , Animated} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import images from '../../config/image';
import Header from '../../component/Header';
import style from './style';
import color from "../../config/colors";

const Handlehelp =({navigation}: {navigation: any}) =>{

  const position = new Animated.ValueXY({ x: 0, y: 0 })
  Animated.spring(position , {
    toValue: { x: 200, y: 500 },
    useNativeDriver: false,
    speed:5,
    bounciness:30
  }).start()       /////for spring

  // Animated.timing(position , {
  //   toValue: { x: 300, y: 500 },
  //   useNativeDriver: false,
  //   duration:3000
    
  // }).start()    ///for time

  const rotate = position.x.interpolate ({
    inputRange:[0 ,100],
    outputRange:['0deg', '360deg']
  })
     return (
    <SafeAreaView style={style.safearea}>
      <Header
        image1={images.leftArrow}
        imagestyle={undefined}
        title={'Help'}
        titlestyle={undefined}
        headerstyle={undefined}
        onpress={() => navigation.goBack()}></Header>
      <View style={{flex:1}}>
      <Animated.View style={{backgroundColor:color.red,height:70,width:70, transform:[{translateX:position.x},{translateY:position.y}, {rotate:rotate}]}}/>
      </View>

    </SafeAreaView>
  );
}
export default Handlehelp;