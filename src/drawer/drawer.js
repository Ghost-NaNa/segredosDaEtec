import { View, Text, Image, StyleSheet } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import PublicacaoDepoimento from '../paginas/publicacaoDepoimento/publicacaoDepoimento.js'
import HomeStack from '../stackNavigator/stackNav.js'
import estiloDrawer from './estiloDrawer.js'
import HomeScreen from '../paginas/home/home.js'
import MeuPerfil from '../paginas/perfil/perfil.js'

const Drawer = createDrawerNavigator();

//Assim é como se insere os dados
function ConteudoDrawer(dados) {
  return (
    <DrawerContentScrollView {...dados}>
      <View style={estiloDrawer.containerLogo}>
        <Image source={require('../../assets/logo.png')}
          style={estiloDrawer.logo}
        ></Image>
      </View>
      <DrawerItemList {...dados}></DrawerItemList>
    </DrawerContentScrollView>
  )
}

export default function DrawerNav() {

  return (
    <Drawer.Navigator
      drawerContent={(dados => <ConteudoDrawer {...dados}> </ConteudoDrawer>)}
      screenOptions={{
        drawerActiveTintColor: 'purple',
        drawerItemStyle: {
          marginVertical: 5,
          borderBottomWidth: 1,
          borderBottomColor: '#eee',
        },
        drawerLabelStyle: {
          textAlign: "center"
        }
      }}>
        
      <Drawer.Screen options={{ drawerActiveTintColor: 'purple' }} name="Depoimentos recentes" component={HomeScreen} />
      <Drawer.Screen name="Meu Perfil" component={MeuPerfil} />
      <Drawer.Screen name="Publicar Depoimento" component={PublicacaoDepoimento}/>
    </Drawer.Navigator >
  )
}