import React from 'react';
import { LogBox } from 'react-native';
import { AuthProvider } from './AuthProvider';
import Routes from './Routes';

const Providers = () => {
  LogBox.ignoreLogs(['Setting a timer'])
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}


export default Providers;