import 'react-native-gesture-handler';
import { createAppContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import NfcReaderScreen from "./src/screens/NfcReaderScreen";
import InstructionsScreen from "./src/screens/InstructionsScreen";
import PaycheckScreen from "./src/screens/PaycheckScreen";
import MrzPhotoScreen from "./src/screens/MrzPhotoScreen";
import FacialRecScreen from "./src/screens/FacialRecScreen";
import ProcessingScreen from "./src/screens/ProcessingScreen";
import OnRevisionScreen from "./src/screens/OnRevisionScreen";
import AcceptedScreen from "./src/screens/AcceptedScreen";
import AnotherOfferScreen from "./src/screens/AnotherOfferScreen";
import DeniedScreen from "./src/screens/DeniedScreen";
import MyLoansScreen from "./src/screens/MyLoansScreen";

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="AcceptedScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="InstructionsScreen" component={InstructionsScreen} />
        <Stack.Screen name="PaycheckScreen" component={PaycheckScreen} />
        <Stack.Screen name="NfcReaderScreen" component={NfcReaderScreen} />
        <Stack.Screen name="ProcessingScreen" component={ProcessingScreen} />
        <Stack.Screen name="AcceptedScreen" component={AcceptedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;