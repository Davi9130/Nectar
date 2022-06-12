import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home/Home.screen';

const AppRoutes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
