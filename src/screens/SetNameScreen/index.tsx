import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../../component/Header';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import {style} from './style';
import images from '../../config/image';
import color from '../../config/colors';
import {setUsername} from './nameSlice';
import {useDispatch} from 'react-redux';

const Handlename = ({navigation}: {navigation: any}) => {
  const [name, setName] = useState('');
  const [error, setError] = useState({
    name: ' ',
  });
  const dispatch = useDispatch();

  const Validation = () => {
    let NewError = {
      name: ' ',
    };
    let isValid = true;

    if (!name) {
      NewError.name = 'Please enter your name';
      isValid = false;
    }

    setError(NewError);
    return isValid;
  };

  const Handlevalidate = () => {
    if (Validation()) {
      
      dispatch(setUsername(name))
      navigation.navigate('drawer');
    }
  };

  return (
    <SafeAreaView style={style.safearea}>
      <View>
        <Header
          title={''}
          titlestyle={undefined}
          imagestyle={undefined}
          headerstyle={undefined}
          image1={images.leftArrow}
          onpress={() => navigation.goBack()}
        />
      </View>
      <KeyboardAvoidingScrollView style={style.main}>
        <View style={style.mainview}>
          <Text style={style.headtext}>Enter Username</Text>
          <Text style={style.subtext}>Latin characters, no emoji/</Text>
          <TextInput
            keyboardType="default"
            placeholder="Name"
            placeholderTextColor={color.white}
            value={name}
            onChangeText={setName}
            maxLength={20}
            style={style.textinput}></TextInput>
          <View style={style.divider} />
          {error.name ? <Text style={style.err}>{error.name}</Text> : null}
        </View>
      </KeyboardAvoidingScrollView>
      <View style={style.buttonview}>
        <TouchableOpacity style={style.button} onPress={Handlevalidate}>
          <Text style={style.buttontext}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Handlename;
