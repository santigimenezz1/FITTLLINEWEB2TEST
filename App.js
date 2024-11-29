import React, { useContext } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './pages/Home/HomeNavigator.js';
import Perfil from './pages/Perfil/Perfil.jsx';
import AppLoading from 'expo-app-loading';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Text } from 'react-native';
import LoginUsuarioNavigator from './pages/LoginUsuarios/LoginUsuariosNavigator.js';
import GlobalContext, { CartContext } from './Context/Context.jsx';
import FlashMessage from 'react-native-flash-message';
import { View } from 'react-native-web';
import { RFValue } from 'react-native-responsive-fontsize';
import { getApp } from 'firebase/app';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
          paddingBottom: 5,
          height: RFValue(80),
          borderTopColor:"black",
          borderTopWidth:2,
          paddingBottom:20, 
        },
      }}
    >
      <Tab.Screen name="Ejercicios" component={HomeNavigator} options={{
        tabBarIcon: () => <FontAwesome5 name="play" size={14} color="white" />,
        tabBarLabel: () => (
          <Text style={{ 
            color: 'white', 
            fontSize: RFValue(14), 
            fontFamily: 'Roboto_400Regular',
            letterSpacing: 1,
          }}>
            Ejercicios
          </Text>
        ),
      }} />
      <Tab.Screen name="Perfil" component={Perfil} options={{
        tabBarIcon: () => <Octicons name="person-fill" size={16} color="white" />,
        tabBarLabel: () => (
          <Text style={{ 
            color: 'white', 
            fontSize: RFValue(14), 
            fontFamily: 'Roboto_400Regular',
            letterSpacing: 1,
          }}>
            Perfil
          </Text>
        ),
      }} />
    </Tab.Navigator>
  );
}

export default function App() {
  let [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <GlobalContext>
      <NavigationContainer>
        <MainComponent />
        <FlashMessage position="center" />
      </NavigationContainer>
    </GlobalContext>
  );
}

function MainComponent() {
  const { usuarioOn } = useContext(CartContext);

  return (
    <>
      {usuarioOn ? <MyTabs /> :  <LoginUsuarioNavigator/> }
    </>
  );
}