import React, {useEffect, useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import Nav from './src/navigation/Route';
import SplashScreen from './SplashScreenView';
import store from './src/redux/store';
import {Provider} from 'react-redux';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        {showSplash ? <SplashScreen /> : <Nav />}
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
