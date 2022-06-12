import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from '../pages/Register/Register.screen';
import Welcome from '../pages/Welcome/Welcome.screen';

const Auth = createNativeStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator screenOptions={{headerShown: false}}>
    <Auth.Screen name="Welcome" component={Welcome} />
    <Auth.Screen name="Register" component={Register} />
  </Auth.Navigator>
);

export default AuthRoutes;
