import React, {useEffect} from 'react';
import {Else, If, Then} from 'react-if';
import RNBootSplash from 'react-native-bootsplash';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 1000);
  }, []);

  const token = '';
  return (
    <>
      <If condition={!token}>
        <Then>
          <AuthRoutes />
        </Then>
        <Else>
          <AppRoutes />
        </Else>
      </If>
    </>
  );
};

export default Routes;
