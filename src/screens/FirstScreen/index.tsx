import React from 'react';
import {Button, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../component/Header';
import {style} from './style';
import {ImageSlider} from 'react-native-image-slider-banner';
import {Image} from 'react-native';
import images from '../../config/image';
import {Dimensions} from 'react-native';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import {Platform} from 'react-native';
import color from '../../config/colors';
import {DrawerActions} from '@react-navigation/native';

// export const screenWidth = Dimensions.get('window').width;

const Firstscreen = ({navigation}: {navigation: any}) => {
  const image = [
    {img: Image.resolveAssetSource(images.image1).uri},
    {img: Image.resolveAssetSource(images.image1).uri},
    {img: Image.resolveAssetSource(images.image1).uri},
  ];

  return (
    <SafeAreaView style={style.safearea}>
      <Header
        logo={images.logo2}
        titlestyle={undefined}
        imagestyle={undefined}
        headerstyle={style.titlestyle}></Header>
      <ScrollView contentContainerStyle={style.scrollviewstyle}>
        <View style={style.slidermainview}>
          <View style={style.slidersubview}>
            <ImageSlider
              data={image}
              autoPlay={true}
              preview={false}
              caroselImageStyle={style.carsolstyle}
              indicatorContainerStyle={style.indicatorContainerStyle}
              inActiveIndicatorStyle={style.inActiveIndicatorStyle}
              activeIndicatorStyle={style.activeIndicatorStyle}
              indicatorInActiveColor={color.darkGray}
            />
          </View>
        </View>
        <View style={style.mainview}>
          <View style={style.textview}>
            <Text style={style.texthello}>Hello!</Text>
            <Text style={style.subtext}>Enjoy your favorite movies</Text>
          </View>

          <View style={style.buttonview}>
            <TouchableOpacity style={style.button1}>
              <Text style={style.signintext}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.button2}
              onPress={() => navigation.navigate('signup')}>
              <Text style={style.signuptext}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          <Text style={style.textstyle}>
            By sign in or sign up, you agree to our Terms of Service and Privacy
            Policy
          </Text>
          
        </View>
        {/* <TouchableOpacity onPress={() => navigation.navigate('drawer')}>
        <Text style={style.signuptext}>Sign Up</Text>
      </TouchableOpacity> */}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Firstscreen;
