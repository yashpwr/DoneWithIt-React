import React from 'react';
import { View } from 'react-native';
import Card from './app/components/Card';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from "./app/components/Screen"
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';

export default function App() {
  //return <WelcomeScreen/>;
  //return <ViewImageScreen/>;
  //return <ListingDetailsScreen/>;
  //return <MessagesScreen/>;
  //return <AccountScreen/>;
  return <ListingScreen/>;
  
  // return(
  //   <Screen>
  //     <ListItem 
  //       title="I Love React Native !" 
  //       subTitle="Yaa That's TRUE"
  //       ImageComponent={<Icon name="heart" iconColor="red" />} />
  //   </Screen>
  // );
}