import React, { useState } from 'react'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { SafeAreaView, FlatList, Platform, StyleSheet } from 'react-native'
import Cards from '../../componentes/cards/cards.js'
import { pegarDepoimentos } from '../../servicos/posts.js'

export default function App() {
  const navigation = useNavigation()
  const [depoimentos, setDepoimentos] = useState([])
  const [refreshing, setRefreshing] = useState(false)

  const carregarDepoimentos = async () => {
    setRefreshing(true)
    const dados = await pegarDepoimentos(navigation)
    if (dados) setDepoimentos(dados)
    setRefreshing(false)
  }

  useFocusEffect(
    React.useCallback(() => {
      carregarDepoimentos()
    }, [])
  )
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={depoimentos}
        keyExtractor={(item) => item.depoimento_id.toString()}
        renderItem={({ item }) => (
          <Cards
            avatarUrl={'https://placecats.com/neo/300/200'}
            postTitle={item.depoimento_titulo}
            time={new Date(item.depoimento_data_criacao).toLocaleDateString()}
            text={item.depoimento_conteudo}
            comments={0}
            onStarPress={() => console.log('Star pressed', item.depoimento_id)}
            onReportPress={() => console.log('Report pressed', item.depoimento_id)}
            onCardPress={() =>
              navigation.navigate('Depoimento', { depoimentoId: item.depoimento_id })
            }
          />
        )}
        refreshing={refreshing}
        onRefresh={carregarDepoimentos}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: Platform.OS === 'android' ? 7 : 0,
  },
})
