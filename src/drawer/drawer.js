import { createDrawerNavigator } from '@react-navigation/drawer';

import Itenssalvos from '../paginas/itensSalvos/salvos.js';
import HomeScreen from '../paginas/home/home.js';


export default function Drawer() {
  
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator >
      <Drawer.Screen options={{drawerActiveTintColor: 'purple'}} name="Depoimentos recentes" component={HomeScreen}/>
      <Drawer.Screen name="Itens Salvos" component={Itenssalvos} />
    </Drawer.Navigator>
  );
}