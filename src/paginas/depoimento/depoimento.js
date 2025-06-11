import { useState, useEffect } from 'react'
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import { publicarComentario, pegarSecaoDepoimento } from '../../servicos/posts'
import CardGrande from '../../componentes/depoimentoGrande/depoimentoGrande'

export default function Depoimento({ route, navigation }) {
  const { depoimentoId } = route.params

  const [depoimento, setDepoimento] = useState(null)
  const [comentarios, setComentarios] = useState([])
  const [novoComentario, setNovoComentario] = useState('')

  useEffect(() => {
    (async () => {
      const resposta = await pegarSecaoDepoimento(depoimentoId)
      setDepoimento(resposta.depoimentoRes[0])
      setComentarios(resposta.comentarios)
    })()
  }, [depoimentoId])

  async function enviarComentario() {
    if (!novoComentario.trim()) return // não envia comentário vazio

    const resultado = await publicarComentario(novoComentario, depoimentoId, navigation)

    if (resultado) {
      // Supondo que resultado seja o comentário recém criado, adiciona no topo da lista
      setComentarios((prev) => [resultado, ...prev])
      setNovoComentario('') // limpa input
    } else {
      alert('Falha ao publicar comentário')
    }
  }

  if (!depoimento) {
    return (
      <SafeAreaView>
        <Text>Carregando depoimento...</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <CardGrande
        titulo={depoimento.depoimento_titulo}
        conteudo={depoimento.depoimento_conteudo}
      />

      <Text style={styles.sectionTitle}>Comentários</Text>

      <FlatList
  data={comentarios}
  keyExtractor={(item, index) => {
    if (item && item.comentario_id != null) {
      return item.comentario_id.toString();
    }
    return index.toString();
  }}
  contentContainerStyle={styles.commentList}
  renderItem={({ item }) => (
    <View style={styles.commentCard}>
      <Text style={styles.commentText}>{item.comentario_conteudo}</Text>
      <Text style={styles.commentDate}>
        {new Date(item.comentario_data_criacao).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })}
      </Text>
    </View>
  )}
/>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={10}
        style={styles.inputContainer}
      >
        <TextInput
          style={styles.input}
          value={novoComentario}
          onChangeText={setNovoComentario}
          placeholder="Digite seu comentário..."
        />
        <TouchableOpacity style={styles.button} onPress={enviarComentario}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  commentList: {
    paddingHorizontal: 16,
    paddingBottom: 80,
  },
  commentCard: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  commentText: {
    fontSize: 16,
    color: '#444',
    marginBottom: 4,
  },
  commentDate: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'right',
  },
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderTopColor: '#ddd',
    borderTopWidth: 1,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    marginLeft: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
})
