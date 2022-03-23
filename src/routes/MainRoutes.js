import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../layouts/home/Home';
import MovieDetail from '../layouts/movie_details/Movie_details'
import Login from '../layouts/login/index';
import Register from '../layouts/register/index';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false}} >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}