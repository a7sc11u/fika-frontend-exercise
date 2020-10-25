import React, { useEffect } from "react";
import { Provider } from 'react-redux';
import * as SplashScreen from "expo-splash-screen";

// disable auto hide 
SplashScreen.preventAutoHideAsync().catch(() => {});

import { configureStore } from './src/configure-store';
import { MainScreen } from './src/screens/main';

export default function App() {

  const store = configureStore();

  useEffect(() => {
    setTimeout(() => {
      // SplashScreen.hideAsync();
    }, 2000)
  }, [])

  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}
