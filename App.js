import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerNav from './src/drawer/drawer.js';
import Depoimento from './src/paginas/depoimento/depoimento.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
