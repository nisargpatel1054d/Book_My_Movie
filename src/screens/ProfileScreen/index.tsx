import React from 'react';
import style from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import images from '../../config/image';
import { useSelector } from 'react-redux';
import { userData } from '../SetNameScreen/nameSlice';

const Handleprofile = ({navigation}:{navigation:any}) => {

    const username = useSelector(userData);

  return (
    <SafeAreaView style={style.safearea}>
        <ScrollView>
      <View style={style.mainview}>
        <View style={style.profilesubview}>
          <View>
            <Image
              source={images.profile}
              style={style.profileimg}></Image>
          </View>
          <View style={style.profiledetailview}>
            <Text style={style.mainname}>{username}</Text>
            <Text style={style.subtext}>(704) 555-0127</Text>
            <Text style={style.subtext}>angelina@example.com</Text>
          </View>
        </View>

        <View style={style.mixmainview} >
            <View style={style.mixsubview}>
                <Image source={images.ticket} style={style.imgstyle}></Image>
                <Text style={style.font} >My ticket</Text>
            </View>
            <View>
                <Image source={images.rightArrow}/>
            </View>
        </View>
         <View style={style.divider} />


         <View style={style.mixmainview}>
            <View style={style.mixsubview}>
                <Image source={images.cart} style={style.imgstyle}></Image>
                <Text style={style.font}>Payment history</Text>
            </View>
            <View>
                <Image source={images.rightArrow}/>
            </View>
        </View>
         <View style={style.divider} />


         <View style={style.mixmainview}>
            <View style={style.mixsubview}>
                <Image source={images.language} style={style.imgstyle}></Image>
                <Text style={style.font}>Change language</Text>
            </View>
            <View>
                <Image source={images.rightArrow}/>
            </View>
        </View>
         <View style={style.divider} />


         <View style={style.mixmainview}>
            <View style={style.mixsubview}>
                <Image source={images.lock} style={style.imgstyle}></Image>
                <Text style={style.font}>Change password</Text>
            </View>
            <View>
                <Image source={images.rightArrow}/>
            </View>
        </View>
         <View style={style.divider} />


         <View style={style.mixmainview}>
            <View style={style.mixsubview}>
                <Image source={images.faceId} style={style.imgstyle}></Image>
                <Text style={style.font}>Face ID / Touch ID</Text>
            </View>
            <View>
                <Image source={images.rightArrow}/>
            </View>
        </View>
         <View style={style.divider} />


      </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Handleprofile;
