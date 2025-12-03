import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Handleterms from '../screens/TermsAndCondition';
import color from '../config/colors';
import HomeTabs from './BottomTab';
import images from '../config/image';
import 'react-native-drawer-layout';
import {useSelector} from 'react-redux';
import {userData} from '../screens/SetNameScreen/nameSlice';
import Handlesetting from '../screens/Setting';
import Handlehelp from '../screens/Help';
import Handlesupport from '../screens/Support';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const username = useSelector(userData);
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}>
      <View style={styles.mainview}>
        <ImageBackground
          source={require('../assets/image/imageBackground.jpg')}
          style={styles.backgroundimage}>
          <View style={styles.subview}>
            <Image source={images.profile} style={styles.profileimage}></Image>
            <View style={styles.textview}>
              <Text style={styles.name}>{username}</Text>
              <Text style={styles.email}>test@gmail.com</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <DrawerItemList {...props} />
      <View style={styles.bottomSection}>
        <DrawerItem
          icon={() => (
            <Image
              source={images.exit}
              style={{height: 20, width: 20, tintColor: color.white}}></Image>
          )}
          label={() => <Text style={{color: 'white'}}>Logout</Text>}
          onPress={() => Alert.alert('Logged out')}
        />
      </View>
    </DrawerContentScrollView>
  );
}

function DrawNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: 'front',
        headerShown: false,
        swipeEnabled: true,
        drawerPosition: 'left',
        swipeEdgeWidth: 80,
        drawerActiveTintColor: color.black,
        drawerActiveBackgroundColor: color.vibrantHoney,
        drawerInactiveTintColor: color.white,
        drawerInactiveBackgroundColor: color.carbonFiber,

        drawerStyle: {
          backgroundColor: color.umbra,
        },
      }}>
      <Drawer.Screen
        name="MainTabs"
        component={HomeTabs}
        options={{drawerItemStyle: {display: 'none'}}}
      />

      <Drawer.Screen
        name="TermsandCondition"
        component={Handleterms}
        options={{
          title: 'Terms and Conditions',
          drawerItemStyle: {marginBottom: 15},
          drawerIcon: ({color}) => (
            <Image
              source={images.terms}
              style={[styles.icon, {tintColor: color}]}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Help"
        component={Handlehelp}
        options={{
          title: 'Help',
          drawerItemStyle: {marginBottom: 15},
          drawerIcon: ({color}) => (
            <Image
              source={images.help}
              style={[styles.icon, {tintColor: color}]}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Support"
        component={Handlesupport}
        options={{
          title: 'Support',
          drawerItemStyle: {marginBottom: 15},
          drawerIcon: ({color}) => (
            <Image
              source={images.support}
              style={[styles.icon, {tintColor: color}]}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Setting"
        component={Handlesetting}
        options={{
          title: 'Setting',
          drawerItemStyle: {marginBottom: 15},
          drawerIcon: ({color}) => (
            <Image
              source={images.setting}
              style={[styles.icon, {tintColor: color}]}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  bottomSection: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  email: {color: color.errigalWhite, fontSize: 16},
  name: {color: color.errigalWhite, fontSize: 20, fontWeight: 'bold'},
  textview: {justifyContent: 'center', gap: 5},
  profileimage: {height: 70, width: 70},
  backgroundimage: {
    height: 120,
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  mainview: {flexDirection: 'row', gap: 10, marginBottom: 20},
  subview: {flexDirection: 'row', gap: 10, padding: 10},
  icon: {height: 20, width: 20},
});

export default DrawNavigator;
