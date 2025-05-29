import { NavigationContainer } from '@react-navigation/native';

import Drawer from './src/drawer/drawer.js';

export default function App() {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}