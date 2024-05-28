import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import About from './screens/about';
import Home from './screens/home';
import AddItem from './screens/addItem';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Raleway_200ExtraLight } from "@expo-google-fonts/raleway";
import { Quicksand_300Light } from "@expo-google-fonts/quicksand";
import { TitilliumWeb_400Regular } from "@expo-google-fonts/titillium-web";

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Raleway_200ExtraLight,
    Quicksand_300Light,
    TitilliumWeb_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f0f0f4'
          },
          headerTitleStyle: {
            color: 'black', // color of the header title
            fontFamily: 'TitilliumWeb_400Regular',
          },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{ 
            tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
            headerTitleAlign: 'center',
          }} 
        />
        <Tab.Screen 
          name="AddItem" 
          component={AddItem} 
          options={{ 
            tabBarIcon: () => <AntDesign name="plus" size={24} color="black" />,
            headerTitleAlign: 'center',
          }} 
        />
        <Tab.Screen 
          name="About" 
          component={About} 
          options={{ 
            tabBarIcon: () => <MaterialIcons name="info-outline" size={24} color="black" />,
            headerTitleAlign: 'center',
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
