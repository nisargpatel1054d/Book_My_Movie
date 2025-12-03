import React from 'react';
import {StyleSheet} from 'react-native';
import color from '../../config/colors';

const style = StyleSheet.create({
  safearea: {flex: 1, backgroundColor: color.black},
  banner: {
    fontSize: 24,
    fontWeight: 'bold',
    color: color.errigalWhite,
  },
  image:{alignContent: 'center'},
  imageview:{marginTop: 24},
  mainview: {flex: 1, marginHorizontal: 16, marginTop: 24},
  seeall: {
    color: color.vibrantHoney,
    fontSize: 14,
    alignContent: 'center',
  },
  poster: {
    width: 310,
    height: 440,
    borderRadius: 16,
    resizeMode: 'cover',
  },
  searchbar: {
    backgroundColor: color.cocoBlack,
    borderRadius: 8,
  },
  poster2: {
    width: 173,
    height: 244,
    borderRadius: 16,
    resizeMode: 'cover',
  },
  icon: {width: 26, height: 26},
  title: {
    fontSize: 20,
    color: color.white,
    fontWeight: 'bold',
    marginTop: 10,
  },
  seeallview: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  meta: {
    color: color.darkGray,
    marginTop: 4,
  },
  headingview: {
    flexDirection: 'row',
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: color.black,
  },
  date: {
    color: color.darkGray,
    marginTop: 4,
  },
  rating: {
    color: color.gold,
    marginTop: 6,
    fontSize: 16,
  },
  reviews: {
    color: color.ironFist,
    fontSize: 14,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  promo: {
    height: 224,
    width: 380,
    borderRadius: 5,
    justifyContent: 'center',
  },

  comingSoonCard: {
    marginRight: 16,
    width: 160,
  },

  comingSoonImage: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    marginBottom: 8,
    resizeMode: 'cover',
  },

  genreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },

  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },

  genreIcon: {
    width: 16,
    height: 16,
    marginRight: 6,
  },

  serviceimage: {
    width: 80,
    height: 80,
  },
  servicename: {
    fontSize: 16,
    color: color.white,
  },
  serviceCard: {
    marginRight: 20,
    alignItems: 'center',
  },
  news: {
    color: 'white',
    fontSize: 16,
    marginTop: 15,
    lineHeight: 20,
  },
  newsCard: {
    width: 239,
    marginRight: 16,
  },

  newsimage: {
    width: '100%',
    height: 135,
    borderRadius: 20,
  },
  renderplayingview: {width: 375, alignItems: 'center', marginTop: 24},
  contentContainerStyle: {paddingRight: 8},
});
export default style;
