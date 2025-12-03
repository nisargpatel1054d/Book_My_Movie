import {Platform} from 'react-native';
import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import color from '../../config/colors';

const screenWidth = Dimensions.get('window').width;

export const style = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: color.black,
  },
  slidermainview: {flex: 1, marginTop: 40},
  slidersubview: {paddingHorizontal: 50},
  carsolstyle: {
    resizeMode: 'cover',
    height: 320,
    alignSelf: 'center',
    width: screenWidth - 100,
    borderRadius: 20,
    marginTop: 60,
  },
  indicatorContainerStyle: {
    position: 'absolute',
    bottom: -5,
    alignSelf: 'center',
  },
  mainview: {
    flex: 1,
    backgroundColor: color.black,
    marginHorizontal: 16,
    justifyContent: 'center',
  },
  texthello: {
    fontSize: 32,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'SF Pro' : 'sans-serif',
  },
  textview: {
    flex: 1,
    backgroundColor: color.black,
    marginHorizontal: 16,
    marginTop: 40,
  },
  subtext: {
    fontSize: 16,
    color: color.white,
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'SF Pro' : 'sans-serif',
    // marginBottom: 51,
    marginTop: 16,
  },
  button1: {
    height: 56,
    borderWidth: 1,
    borderRadius: 64,
    backgroundColor: color.vibrantHoney,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button2: {
    height: 56,
    borderWidth: 1,
    borderColor: color.errigalWhite,
    borderRadius: 64,
    backgroundColor: color.black,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textstyle: {
    color: color.white,
    textAlign: 'center',
    marginTop: 32,
    fontSize: 12,
    paddingHorizontal: 32,
  },
  titlestyle: {
    flex: 1,
    color: color.white,
    fontSize: 28,
    textAlign: 'left',
    fontWeight: '600',
    justifyContent: 'flex-start',
  },
  signintext:{color: color.black, fontSize: 20},
  signuptext:{color: color.white, fontSize: 20},
  buttonview:{gap: 10, marginTop: 32},
  inActiveIndicatorStyle:{backgroundColor: color.darkGray}
  , activeIndicatorStyle:{backgroundColor: color.vibrantHoney},
  scrollviewstyle:{paddingBottom: 32}
});
