import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Firstscreen from '../screens/FirstScreen';
import Handlesignup from '../screens/SignUp';
import Handleotp from '../screens/OtpScreen';
import Handlename from '../screens/SetNameScreen';
import Handlesingleticket from '../screens/SingleTicket';
import Handlemoviedetail from '../screens/MovieDetailScreen';
import Handleseat from '../screens/BookSeatScreen';
import Handlepayment from '../screens/PaymentScreen';

import DrawNavigator from './Drawer';

const Stack = createNativeStackNavigator();
const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="firstscreen">
        <Stack.Screen
          name="firstscreen"
          component={Firstscreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="signup"
          component={Handlesignup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="otpscreen"
          component={Handleotp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="setnamescreen"
          component={Handlename}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="drawer"
          component={DrawNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="handlesingleticket"
          component={Handlesingleticket}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="handlemoviedetail"
          component={Handlemoviedetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="bookseatscreen"
          component={Handleseat}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="paymentscreen"
          component={Handlepayment}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
