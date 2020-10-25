import React from "react";
import { Provider } from 'react-redux';

import { store } from './src/store';
import { Root } from './src/screens/root';

export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
