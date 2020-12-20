import React from 'react';
import { View } from 'react-native';
import Card from './app/components/Card';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  //return <WelcomeScreen/>;
  //return <ViewImageScreen/>;

  return(
    <View style={{
      backgroundColor: "#f8f4f4",
      padding: 20,
      paddingTop: 100,
    }}>

    <Card 
      title="Red jacket For Sale"
      subTitle="$100"
      image= {require("./app/assets/jacket.jpg")}
    />
    </View>
  );
}