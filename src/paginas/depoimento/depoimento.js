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
import { Feather } from '@expo/vector-icons'
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

  console.log(depoimento)

  return (
    <SafeAreaView style={styles.container}>
      <CardGrande
        titulo={depoimento.depoimento_titulo}
        conteudo={depoimento.depoimento_conteudo}
        avatarUser={'https://placecats.com/300/200'}
      />

      <View style={styles.commentContainer}>
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
      </View>

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
          <Feather name='send' style={styles.buttonText}></Feather>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa', // tom mais claro
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 8,
    color: '#222',
  },
  commentList: {
    paddingHorizontal: 16,
    paddingBottom: 80,
  },
  commentCard: {
    backgroundColor: '#ffffff',
    padding: 12,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    width: '100%', // sem sombra, só uma borda suave
  },
  commentText: {
    fontSize: 15,
    color: '#333',
    marginBottom: 4,
    lineHeight: 20,
  },
  commentDate: {
    fontSize: 12,
    color: '#888',
    textAlign: 'right',
  },
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopColor: '#e5e5e5',
    borderTopWidth: 1,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingVertical: 8,
    paddingHorizontal: 5,
    fontSize: 15,
    backgroundColor: 'transparent',

  },
  button: {
    marginLeft: 12,
    backgroundColor: '#3b82f6',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
    padding: 2,

  },
  commentContainer: {
  flex: 1,
  backgroundColor: '#fff',
  marginTop: 12,
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  overflow: 'hidden',
},

});
