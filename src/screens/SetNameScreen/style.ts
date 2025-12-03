import React from 'react';
import {StyleSheet} from 'react-native';
import color from '../../config/colors';

export const style = StyleSheet.create({
  safearea:{flex: 1, backgroundColor: color.black},
  main: {
    marginHorizontal: 16,
    backgroundColor: color.black,
  },
  headtext: {
    color: color.vibrantHoney,
    fontWeight: 'bold',
    fontSize: 32,
    marginTop: 36,
  },
  mainview: {
    flex: 1,
    backgroundColor: color.black,
  },
  subtext: {
    color: color.errigalWhite,
    marginTop: 24,
    textAlign: 'left',
    marginBottom: 48,
  },
  textinput: {fontSize: 24, color: color.white},
  divider: {
    height: 1,
    backgroundColor: color.white,
    marginTop: 12,
  },
  button: {
    height: 56,
    borderWidth: 1,
    borderRadius: 64,
    backgroundColor: color.vibrantHoney,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  buttonview: {
    flex: 1,
    backgroundColor: color.black,
    justifyContent: 'flex-end',
    marginHorizontal: 16,
  },
  buttontext:{color: color.black, fontSize: 20},
  err: {
    color: color.red,
    fontSize: 14,
    marginBottom: 5,
    marginTop: 10,
  },
});
