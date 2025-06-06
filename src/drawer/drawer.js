import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../paginas/home/home.js';
import MeuPerfil from '../paginas/perfil/perfil.js';


export default function Drawer() {
  
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator >
      <Drawer.Screen options={{drawerActiveTintColor: 'purple'}} name="Depoimentos recentes" component={HomeScreen}/>
      <Drawer.Screen name="Perfil" component={MeuPerfil} />
    </Drawer.Navigator>
  );
}