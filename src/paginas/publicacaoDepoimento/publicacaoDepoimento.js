import React, { useState } from 'react'
import { View, TextInput, Button, Modal, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { publicarDepoimento } from '../../servicos/posts.js'
import estiloPublicacao from './estiloPublicacao.js'
import { useNavigation } from '@react-navigation/native'

export default function NovoDepoimento() {
  const [titulo, setTitulo] = useState('')
  const [conteudo, setConteudo] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const navigation = useNavigation()

  const enviarDepoimento = async () => {
    if (!titulo.trim() || !conteudo.trim()) {
      Alert.alert('Atenção', 'Por favor, preencha o título e o conteúdo.')
      return
    }

    const resultado = await publicarDepoimento(titulo, conteudo, navigation)

    if (resultado) {
      setModalVisible(true)
      setTitulo('')
      setConteudo('')
    } else {
      Alert.alert('Erro', 'Não foi possível publicar o depoimento.')
    }
  }

  return (
    <View style={estiloPublicacao.container}>
      <Text style={estiloPublicacao.label}>Título:</Text>
      <TextInput
        style={estiloPublicacao.input}
        placeholder="Digite o título"
        value={titulo}
        onChangeText={setTitulo}
      />

      <Text style={estiloPublicacao.label}>Conteúdo:</Text>
      <TextInput
        style={[estiloPublicacao.input, { height: 100 }]}
        placeholder="Digite o conteúdo"
        value={conteudo}
        onChangeText={setConteudo}
        multiline={true}
      />

      <Button title="Publicar Depoimento" onPress={enviarDepoimento} />

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={estiloPublicacao.modalOverlay}>
          <View style={estiloPublicacao.modalBox}>
            <Text style={estiloPublicacao.modalTexto}>Depoimento publicado com sucesso!</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={estiloPublicacao.botaoFechar}>
              <Text style={{ color: '#fff' }}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}
