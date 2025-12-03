import React from 'react';
import {StyleSheet} from 'react-native';
import color from '../../config/colors';

const style = StyleSheet.create({
  areaview: {
    flex: 1,
    backgroundColor: color.black,
  },
  mainview: {
    flex: 1,
    backgroundColor: color.white,
    marginHorizontal: 16,
    marginTop: 40,
    marginBottom: 60,
    borderRadius: 10,
  },
  image: {
    height: 177,
    width: 125,
    borderRadius: 12,
    marginTop: 24,
  },
  title: {
    fontSize: 20,
    marginLeft: 16,
    marginTop: 44,
    marginBottom: 4,
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
  imgtextview: {
    marginLeft: 16,
    flexDirection: 'row',
    gap: 8,
  },
  mainsubview:{marginHorizontal: 24},
  subview:{flexDirection: 'row'},
  icon: {
    height: 48,
    width: 48,
  },
  divider: {
    height: 0.5,
    backgroundColor: color.black,
    marginBottom: 10,
  },
  divider2: {
    borderStyle: 'dashed',
    marginBottom: 10,
    flex: 1,
    height: 1,
    borderWidth: 1,
    marginHorizontal: 5,
    marginTop: 5,
  },
  subtext: {
    fontSize: 14,
    marginRight: 40,
  },
  ellipsedividerview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moviedetail:{flex:1 , gap: 4},
  chaircalenderview: {
    flexDirection: 'row',
    marginVertical: 30,
    gap: 50,
    alignItems: 'center',
  },
  calenderview: {flexDirection: 'row', gap: 8},
  chairview: {flexDirection: 'row', gap: 8},
  moviedetailview: {marginBottom: 16},
  moneyview: {flexDirection: 'row', gap: 8, marginTop: 10},
  moneytext: {fontSize: 16, fontWeight: 'bold'},
  locationmainview: {flexDirection: 'row', gap: 8, marginTop: 10},
  locationview: {flexDirection: 'row', gap: 8},
  locationtext: {fontSize: 16, fontWeight: 'bold'},
  qrtextview: {flexDirection: 'row', gap: 8, marginTop: 10},
  barcodeview: {marginHorizontal: 24, alignItems: 'center', marginTop: 10},
  barcode: {height: 100, width: 300, marginBottom: 8},
});
export default style;
