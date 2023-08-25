import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Login/Login'
import SignUp from './src/SignUp/SignUp';
import Ticket from './src/Ticket/Ticket'
import Voyage from './src/Voyage/Voyage';
import VoyageDetail from './src/VoyageDetail/VoyageDetail';
import Payment from './src/Payment/Payment';
import Confirmation from './src/Confirmation/Confirmation';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
    <Stack.Screen name="LoginScreen" component={Login} />
    <Stack.Screen name="SignUpScreen" component={SignUp} />
    <Stack.Screen name="TicketScreen" component={Ticket} />
    <Stack.Screen name="VoyageScreen" component={Voyage} />
    <Stack.Screen name="VoyageDetailScreen" component={VoyageDetail} />
    <Stack.Screen name="PaymentScreen" component={Payment} />
    <Stack.Screen name="ConfirmationScreen" component={Confirmation} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

