import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/paginas/login/login.js';
import DrawerNav from './src/drawer/drawer.js';
import Depoimento from './src/paginas/depoimento/depoimento.js';
import { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  const token = ""
  const [autenticado, setAutenticado] = useState(false)

  useEffect(() => {
    if(!token){
      setAutenticado(true)
    }
  })

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!autenticado ? (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        ) : (
        
          <>
            <Stack.Screen
              name="DrawerNav"
              component={DrawerNav}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Depoimento"
              component={Depoimento}
              options={{ title: "Depoimento" }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
