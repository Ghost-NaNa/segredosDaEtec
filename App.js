import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './src/paginas/login/login.js'
import Cadastro from './src/paginas/cadastro/cadastro.js'
import DrawerNav from './src/drawer/drawer.js'
import Depoimento from './src/paginas/depoimento/depoimento.js'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Stack = createNativeStackNavigator()

export default function App() {
  const [autenticado, setAutenticado] = useState(false)

  useEffect(() => {
    async function verificarToken() {
      try {
        const token = await AsyncStorage.getItem('tokenSessao')
        if (token) {
          setAutenticado(true)
        } else {
          setAutenticado(false)
        }
      } catch (error) {
        console.error('Erro ao buscar token:', error)
        setAutenticado(false)
      }
    }
    verificarToken()
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!autenticado ? (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
          </>
        ) : (
          <>
            <Stack.Screen name="DrawerNav" component={DrawerNav} />
            <Stack.Screen
              name="Depoimento"
              component={Depoimento}
              options={{ title: 'Depoimento', headerShown: true }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
