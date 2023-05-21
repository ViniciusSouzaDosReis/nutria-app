import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from './Screens/Home';
import { Login } from './Screens/Login';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name='Login'
          component={Login}
        />
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name='Home usuario'
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
