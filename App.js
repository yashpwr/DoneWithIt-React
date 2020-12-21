import React, {useState} from 'react';
import { Switch, Text, TextInput, View } from 'react-native';
import Card from './app/components/Card';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from "./app/components/Screen";
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

export default function App() {
  //return <WelcomeScreen/>;
  //return <ViewImageScreen/>;
  //return <ListingDetailsScreen/>;
  //return <MessagesScreen/>;
  //return <AccountScreen/>;
  //return <ListingScreen/>;

  const categories = [
    { label: "Furniture", value: 1},
    { label: "Clothing", value: 2},
    { label: "Cameras", value: 3},
    { label: "Laptops", value: 4},
  ];

  return(
    <Screen>
      <AppPicker items={categories} icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email"/>
    </Screen>
  );
}