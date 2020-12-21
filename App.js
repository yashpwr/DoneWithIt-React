import React, {useState} from 'react';
import Screen from "./app/components/Screen";
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

const categories = [
  { label: "Furniture", value: 1},
  { label: "Clothing", value: 2},
  { label: "Cameras", value: 3},
  { label: "Laptops", value: 4},
];

export default function App() {

  const [Category, setCategory] = useState(categories[0]);

  return(
    <Screen>
      <AppPicker 
          selectedItem={Category}
          onSelectItem={item => setCategory(item)}
          items={categories} 
          icon="apps" 
          placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email"/>
    </Screen>
  );
}