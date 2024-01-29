import { StyleSheet,StatusBar, } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogIn from "./components/authentication/LogIn";
import SignUp from "./components/authentication/SignUp";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator   screenOptions={{headerShown: false}}>
        <Stack.Screen
            name="LogIn"
            component={LogIn}/>
          <Stack.Screen
              name="SignUp"
              component={SignUp}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

