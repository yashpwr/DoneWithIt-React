import React from 'react';
import { View } from 'react-native';
import Card from './app/components/Card';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from "./app/components/Screen"
import Icon from './app/components/Icon';

export default function App() {
  //return <WelcomeScreen/>;
  //return <ViewImageScreen/>;
  //return <ListingDetailsScreen/>;
  //return <MessagesScreen/>;

  return(
    <Screen>
      <Icon
        name="email"
        size={50}
        backgroundColor="red"
        iconColor="white" />
    </Screen>
  );
}