import { StyleSheet,StatusBar, } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "./components/authentication/Login";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator   screenOptions={{headerShown: false}}>
        <Stack.Screen
            name="Login"
            component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

