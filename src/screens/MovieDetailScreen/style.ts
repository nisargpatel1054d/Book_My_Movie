import React from 'react';
import {StyleSheet} from 'react-native';
import color from '../../config/colors';

const style = StyleSheet.create({
  areaview: {
    flex: 1,
  },
  mainview: {flex: 1, backgroundColor: color.black},
  image: {
    height: 241,
    resizeMode: 'cover',
  },
  imagebox: {
    backgroundColor: color.cocoBlack,
    borderRadius: 16,
    paddingHorizontal: 20,
    marginHorizontal: 16,
    marginTop: 164,
    zIndex: 2,
  },
  headerstyle: {paddingHorizontal: 16, marginTop: 80},
  headerview: {position: 'absolute', top: 0, left: 0, right: 0, zIndex: 2},
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: color.white,
    marginTop: 20,
  },
  starrating:{marginTop: 10, marginBottom: 30},
  moviedetails: {color: color.white, marginTop: 12, fontSize: 16},
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 30,
  },
  ratingview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 16,
  },
  reviewtext: {
    color: color.white,
    fontWeight: 'bold',
  },
  star: {
    color: color.vibrantHoney,
    fontSize: 18,
  },
  showstyle: {
    color: color.white,
    textAlign: 'justify',
    fontSize: 16,
    marginTop: 20,
  },
  showtext: {color: color.vibrantHoney, fontSize: 16, textAlign: 'right'},
  flatlistview: {marginTop: 24},
  rating: {
    color: color.white,
    fontSize: 16,
    marginHorizontal: 4,
  },
  reviewCount: {
    color: color.millionGrey,
    fontSize: 14,
  },
  trailerButton: {
    backgroundColor: color.carbon,
    borderColor: color.errigalWhite,
    marginBottom: 20,

    borderRadius: 8,
    height: 34,
    width: 122,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trailerText: {
    color: color.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
  typeview: {
    flexDirection: 'row',
    gap: 20,
    marginVertical: 7,
  },
  typetitle: {
    fontSize: 16,
    color: color.ironFist,
    width: 110,
  },
  typeans: {
    fontSize: 16,
    color: color.errigalWhite,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: color.cocoBlack,
    marginVertical: 10,
    height: 80,
    width: '100%',
    borderRadius: 12,
  },
  selectedCard: {
    backgroundColor: color.mediumRoast,
    borderWidth: 1,
    borderColor: color.gold,
  },
  movietypeview: {
    flex: 1,
    backgroundColor: color.black,
    marginTop: 154,
    marginHorizontal: 16,
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
  renderdirecterview: {
    flexDirection: 'row',
    backgroundColor: color.cocoBlack,
    borderRadius: 12,
    height: 58,
    width: 150,
    alignItems: 'center',
  },
  rendercasttext: {color: color.white},
  actorimage: {alignItems: 'center', marginHorizontal: 12},
  renderactorview: {
    flexDirection: 'row',
    backgroundColor: color.cocoBlack,
    borderRadius: 12,
    height: 58,
    width: 150,
    alignItems: 'center',
  },
  renderdirectorimage: {marginHorizontal: 12},
  rendercinemasubview: {marginVertical: 10, gap: 10, marginHorizontal: 20},
  rendercinemaname: {color: color.white, fontWeight: 'bold', fontSize: 20},
  rendercinamadetails: {color: color.white, fontSize: 12},
  buttontext: {color: color.black, fontSize: 20},
  contentContainerStyle: {gap: 16},
  cinemacontentContainerStyle: {marginTop: 16},
});
export default style;
