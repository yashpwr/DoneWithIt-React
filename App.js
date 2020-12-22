import React, {useState} from 'react';
import Screen from "./app/components/Screen";
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';



export default function App() {

  return(
    <ListingEditScreen/>
  );

  //const [Category, setCategory] = useState(categories[0]);

  // return(
  //   <Screen>
  //     <AppPicker
  //         selectedItem={Category}
  //         onSelectItem={item => setCategory(item)}
  //         items={categories} 
  //         icon="apps" 
  //         placeholder="Category" />

  //     <AppTextInput icon="email" placeholder="Email"/>
  //   </Screen>
  // );
}