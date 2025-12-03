import React, {useRef, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import Header from '../../component/Header';
import style from './style';
import images from '../../config/image';
import color from '../../config/colors';

const Handleotp = ({navigation, route}: {navigation: any; route: any}) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');

  const inputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  const handleChange = (text: string, index: number) => {
  const numericText = text.replace(/[^0-9]/g, '');
  const newOtp = [...otp];
  newOtp[index] = numericText;
  setOtp(newOtp);

  if (numericText && index < 5) {
    inputRefs[index + 1].current?.focus();
  }
};



  const handleContinue = () => {
    if (otp.includes('')) {
      setError('Please enter all 6 digits');
    } else {
      setError('');
      navigation.navigate('setnamescreen');
    }
  };

  const {number} = route.params;

  return (
    <SafeAreaView style={style.areaview}>
      <View>
        <Header
          title=""
          image1={images.leftArrow}
          onpress={() => {
            console.log('Arrow pressed');
            navigation.goBack();
          }}
          titlestyle={undefined}
          imagestyle={undefined}
          headerstyle={undefined}
        />
      </View>
      <View style={style.mainview}>
        <KeyboardAvoidingScrollView style={style.main}>
          <View style={style.subview}>
            <Text style={style.headtext}>Confirm OTP code</Text>
            <Text style={style.subtext}>
              You just need to enter the OTP sent to the registered phone number
              : {number}.
            </Text>
            <View
              style={style.textinputview}>
              {otp.map((value, index) => (
                <TextInput
                  key={index}
                  ref={inputRefs[index]}
                  style={[style.textinput, {flex: 1, marginHorizontal: 7}]}
                  maxLength={1}
                  keyboardType="number-pad"
                  value={value}
                  onChangeText={text => handleChange(text, index)}
                  placeholderTextColor={color.white}
                />
              ))}
            </View>

            {error ? <Text style={style.err}>{error}</Text> : null}
          </View>
        </KeyboardAvoidingScrollView>

        <View style={style.buttonview}>
          <TouchableOpacity style={style.button} onPress={handleContinue}>
            <Text style={style.buttontext}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Handleotp;
