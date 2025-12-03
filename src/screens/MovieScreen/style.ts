import React from 'react';
import {StyleSheet} from 'react-native';
import color from '../../config/colors';

const style = StyleSheet.create({
  touchableopecity:{},
  safearea: {
    flex: 1,
    backgroundColor: color.black,
  },
  mainview: {
    flex: 1,
    backgroundColor: color.black,
    marginHorizontal: 16,
  },
  poster: {
    height: 258,
    width: 182,
    resizeMode: 'cover',
  },
  flatlistcolumnWrapperStyle: {
    justifyContent: 'space-between',
    gap: 16,
  },
  segmentsliderStyle:{backgroundColor: color.vibrantHoney},
  segmentfont:{color: color.white, fontSize: 16},
  segmentactiveFontStyle:{color: color.black, fontWeight: 'bold', fontSize: 18},
  segmentbutton: {
    height: 46,
    borderRadius: 8,
    marginTop: 20,
  },
  flatlistcontentContainerStyle:{alignContent:'center'},
  title: {
    fontSize: 16,
    color: color.vibrantHoney,
  },
  rating: {
    fontSize: 12,
    marginTop: 8,
    color: color.white,
  },
  reviews: {
    fontSize: 12,
    color: color.white,
  },
  meta: {
    fontSize: 12,
    color: color.white,
  },
  iconview: {
    flexDirection: 'row',
    marginTop: 4,
    gap: 8,
  },
});
export default style;
