import React from 'react';
import {StyleSheet} from 'react-native';
import color from '../../config/colors';

const style = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: color.black,
  },
  mainview:{flex: 1, marginHorizontal: 16, marginTop: 32},
  rendermainview: {flex: 1, flexDirection: 'column'},
  titlestyle: {
    flex: 1,
    color: color.white,
    fontSize: 28,
    textAlign: 'left',
    fontWeight: '600',
    justifyContent: 'flex-start',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#1C1C1C',
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  poster: {
    width: 99,
    height: 137,
    borderRadius: 10,
  },
  cardContent: {
    marginLeft: 16,
    flex: 1,
  },
  title: {
    color: color.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  meta: {
    color: color.darkGray,
    marginTop: 6,
  },
  genreIcon: {
    width: 16,
    height: 16,
    marginRight: 6,
    marginTop: 5,
  },
  iconview:{flexDirection:'row', alignItems:'center'}
});
export default style;
