import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../layouts/home/Home';
import MovieDetail from '../layouts/movie_details/Movie_details'

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false}} >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
    </Stack.Navigator>
  );
}