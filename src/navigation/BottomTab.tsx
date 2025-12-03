import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Handlehome from '../screens/HomeScreen';
import Handleticket from '../screens/TicketScreen';
import Handlemovie from '../screens/MovieScreen';
import Handleprofile from '../screens/ProfileScreen';
import images from '../config/image';
import color from '../config/colors';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle:style.tabBarStyle,
        tabBarActiveTintColor: color.vibrantHoney,
        tabBarInactiveTintColor: color.ironFist,
        tabBarIcon: ({focused}) => {
          let iconSource;

          if (route.name === 'Home') {
            iconSource = images.tab1;
          } else if (route.name === 'Ticket') {
            iconSource = images.tab2;
          } else if (route.name === 'Movie') {
            iconSource = images.tab3;
          } else if (route.name === 'Profile') {
            iconSource = images.tab4;
          }

          return (
            <Image
              source={iconSource}
              style={[
                style.image,
                
                   focused ? style.focusstyle : style.unfocusstyle
                
              ]}
              resizeMode="contain"
            />
          );
        },
      })}>
      <Tab.Screen name="Home" component={Handlehome} />
      <Tab.Screen name="Ticket" component={Handleticket} />
      <Tab.Screen name="Movie" component={Handlemovie} />
      <Tab.Screen name="Profile" component={Handleprofile} />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  image: {width: 24, height: 24},
  focusstyle:{tintColor:color.vibrantHoney},
  unfocusstyle:{tintColor:color.white},
   tabBarStyle: {
          backgroundColor: color.black,
          borderTopColor: color.blackOut,
        },
});
export default HomeTabs;
