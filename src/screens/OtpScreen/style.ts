import {StyleSheet} from 'react-native';
import color from '../../config/colors';

const style = StyleSheet.create({
  areaview: {flex: 1, backgroundColor: color.black},
  mainview: {flex: 1},
  button: {
    height: 56,
    borderWidth: 1,
    borderRadius: 64,
    backgroundColor: color.vibrantHoney,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  headtext: {
    color: color.vibrantHoney,
    fontWeight: 'bold',
    fontSize: 32,
    marginTop: 36,
  },
  subview: {
    flex: 1,
    backgroundColor: color.black,
  },
  textinputview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 48,
  },
  subtext: {
    color: color.errigalWhite,
    marginTop: 32,
    textAlign: 'left',
  },
  textinput: {
    borderColor: color.vibrantHoney,
    borderWidth: 1,
    height: 65,
    width: '12.9%',
    borderRadius: 8,
    backgroundColor: '#261D08',
    color: color.white,
    textAlign: 'center',
    fontSize: 32,
    justifyContent: 'center',
  },

  main: {
    marginHorizontal: 16,
    backgroundColor: color.black,
  },
  err: {
    color: color.red,
    fontSize: 14,
    marginBottom: 5,
    marginTop: 10,
    marginHorizontal: 16,
  },
  buttonview:{padding: 20},
  buttontext:{color: color.black, fontSize: 20}
});
export default style;
