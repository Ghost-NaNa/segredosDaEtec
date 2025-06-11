import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../paginas/home/home.js'
import Depoimento from '../paginas/depoimento/depoimento.js'
import Cadastro from '../paginas/cadastro/cadastro.js';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Depoimento" component={Depoimento} />
    </Stack.Navigator>
  );
}
