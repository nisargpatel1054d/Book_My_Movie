import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../../component/Header';
import {style} from './style';
import images from '../../config/image';
import color from '../../config/colors';

const Handlesignup = ({navigation}: {navigation: any}) => {
  const [number, setNumber] = useState('');
  const [error, setError] = useState({number: ' '});

  const Validation = () => {
    let NewError = {number: ' '};
    let isValid = true;
    if (!number) {
      NewError.number = 'Please enter your phone number';
      isValid = false;
    } else if (number.length !== 10) {
      NewError.number = 'Please enter correct number';
      isValid = false;
    }
    setError(NewError);
    return isValid;
  };

  const Handlevalidate = () => {
    if (Validation()) {
      navigation.navigate('otpscreen', {number});
    }
  };

  return (
    <SafeAreaView style={style.safearea}>
      <Header
        image1={images.leftArrow}
        imagestyle={undefined}
        title={'Sign Up'}
        titlestyle={undefined}
        headerstyle={undefined}
        onpress={() => navigation.goBack()}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={style.scrollViewContainerStyle}
          showsVerticalScrollIndicator={false}>
          {/* Phone Input */}
          <View style={style.scrollsubview}>
            <View style={style.textinputview}>
              <Image
                source={images.phone}
                style={style.phone}
              />
              <TextInput
                keyboardType="numeric"
                placeholder="Phone number"
                placeholderTextColor={color.white}
                value={number}
                onChangeText={text => {
                  const cleaned = text.replace(/[^0-9]/g, '');
                  setNumber(cleaned);
                }}
                maxLength={10}
                style={style.textinput}
              />
            </View>
            <View style={style.divider} />
            {error.number ? (
              <Text style={style.err}>{error.number}</Text>
            ) : null}
            <View style={{marginTop: 32}}>
              <TouchableOpacity style={style.button} onPress={Handlevalidate}>
                <Text style={style.buttontext}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={style.orText}>Or continue with</Text>
            <View style={style.socialmediaview}>
              <TouchableOpacity style={style.button1}>
                <Image
                  source={images.facebook}
                  style={style.facebookimg}
                />
                <Text style={style.socialmediabuttontext}>
                  Facebook
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.button2}>
                <Image
                  source={images.google}
                  style={style.googleimg}
                />
                <Text style={style.socialmediabuttontext}>
                  Google
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={style.termstyle}>
              By sign in or sign up, you agree to our Terms of Service and
              Privacy Policy
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Handlesignup;
