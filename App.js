import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import SignInScreen from './firebase/SignInScreen';
import RegisterScreen from './firebase/RegisterScreen';
import DashboardScreen from './screens/DashboardScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  const styles = {
    headerStyle: {
      backgroundColor: '#003c71', 
    },
    headerTintColor: 'white', 
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
    <SafeAreaView style={{flex: 1}}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome to BCIT" screenOptions={styles}>
        <Stack.Screen name="Welcome to BCIT" component={SignInScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
    </ApplicationProvider>
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
