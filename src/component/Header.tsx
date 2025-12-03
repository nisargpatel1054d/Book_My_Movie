import React, {FC} from 'react';
import {
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import color from '../config/colors';

type HeaderProps = {
  title?: string;
  logo?: any;
  titlestyle?: StyleProp<TextStyle>;
  imagestyle?: StyleProp<ImageStyle>;
  image1?: any;
  image2?: any;
  headerstyle?: StyleProp<ViewStyle>;
  onpress?: () => void;
  title1?: string;
  title2?: string;
};

export const Header: FC<HeaderProps> = ({
  title,
  logo,
  titlestyle,
  imagestyle,
  image1,
  image2,
  headerstyle,
  onpress,
  title1,
  title2,
}) => {
  return (
    <View style={[styles.headview]}>
      <View style={[styles.headerstyle, headerstyle]}>
        <View style={styles.leftSection}>
          {image1 && (
            <TouchableOpacity onPress={onpress} style={styles.leftIcon}>
              <Image source={image1} style={[styles.imagestyle, imagestyle]} />
            </TouchableOpacity>
          )}
          {logo && <Image source={logo} style={[styles.logo]} />}

          {/* {image1 && (
            <TouchableOpacity onPress={onpress} style={styles.leftIcon}>
              <Image source={image1} style={[styles.imagestyle, imagestyle]} />
            </TouchableOpacity>
          )} */}

          {(title1 || title2) && (
            <View style={styles.leftTextContainer}>
              {title1 && <Text style={styles.title1}>{title1}</Text>}
              {title2 && <Text style={styles.title2}>{title2}</Text>}
            </View>
          )}
        </View>
        <View style={styles.centerSection}>
          <Text style={[styles.title, titlestyle]} numberOfLines={1}>
            {title}
          </Text>
        </View>

        <View style={styles.rightIcon}>
          {image2 && (
            <Image source={image2} style={[styles.imagestyle, imagestyle]} />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headview: {
    height: 60,
    justifyContent: 'center',
    // backgroundColor: '#000',
  },
  headerstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    position: 'relative',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    height: 60,
    width: 200,
  },
  leftIcon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftTextContainer: {
    marginLeft: 5,
  },
  title1: {
    color: color.white,
    fontSize: 14,
  },
  title2: {
    color: color.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 2,
  },
  centerSection: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  title: {
    color: color.white,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  rightIcon: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagestyle: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
});

export default Header;
