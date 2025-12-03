import React from 'react';
import {Animated, PanResponder, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import images from '../../config/image';
import Header from '../../component/Header';
import style from './style';
import color from '../../config/colors';

const Handlesetting = ({navigation}: {navigation: any}) => {
  const position = new Animated.ValueXY({x: 0, y: 0});

  // Animated.timing(position, {
  //   toValue: {x: 300, y: 500},
  //   useNativeDriver: false,
  //   duration: 3000,
  // }).start();

  const pan = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {dx: position.x, dy: position.y},
    ]),
    onPanResponderRelease:() => {
        position.setValue({x: 0 ,y: 0})

    }
  });

  const rotate = position.x.interpolate({
    inputRange: [0, 100],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <SafeAreaView style={style.safearea}>
      <Header
        image1={images.leftArrow}
        imagestyle={undefined}
        title={'Setting'}
        titlestyle={undefined}
        headerstyle={undefined}
        onpress={() => navigation.goBack()}></Header>

      <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
        <Animated.View
          {...pan.panHandlers}
          style={{
            backgroundColor: color.red,
            borderRadius:20,
            height: 100,
            width: 100,
            transform: [
              {translateX: position.x},
              {translateY: position.y},
              {rotate: rotate},
            ],
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default Handlesetting;
