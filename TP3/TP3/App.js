import * as React from 'react';
import { View } from 'react-native';

import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import WelcomeScreen from './WelcomeScreen';

export default function App() {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: '#495E57' }}>
        <AppHeader />
        <WelcomeScreen />
      </View>
      <AppFooter />
    </>
  );
}
