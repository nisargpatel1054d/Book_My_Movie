import React from 'react';
import {StyleSheet} from 'react-native';
import color from '../../config/colors';

const style = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: color.black,
  },
  mainview: {
    flex: 1,
    backgroundColor: color.black,
    marginHorizontal: 16,
    marginTop: 32,
  },
  profileimg: {
    height: 90,
    width: 90,
  },
  profiledetailview:{marginLeft:24, marginBottom:40},
  mixmainview: {
    marginTop: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profilesubview:{flexDirection:'row'},
  mixsubview: {flexDirection: 'row', alignItems: 'center', gap: 16},
  imgstyle: {height: 32, width: 32},
  divider: {
    height: 1,
    backgroundColor: color.shadyCharacter,
    marginTop: 24,
  },
  font: {
    fontSize: 16,
    color: color.white,
  },
  mainname: {fontSize: 32, marginBottom: 8, color: color.white},
  subtext: {
    color: color.white,
  },
});

export default style;
