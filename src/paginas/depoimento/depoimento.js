import { useState, useEffect } from 'react'
import { useNavigation } from "@react-navigation/core"
import { SafeAreaView, FlatList, Platform, StyleSheet } from 'react-native'
import CardGrande from '../../componentes/depoimentoGrande/depoimentoGrande'
import { View, Text } from 'react-native-web'
import { pegarSecaoDepoimento } from '../../servicos/posts'



export default function Depoimento({ route }) {
    const { depoimentoId } = route.params;

    const [depoimento, setDepoimento] = useState(null)
    const [comentarios, setComentarios] = useState([])
    const [autor, setAutor] = useState(null)

    useEffect(() => {
        (async () => {
            const resposta = await pegarSecaoDepoimento(depoimentoId)
            setDepoimento(resposta.depoimentoRes[0])
            setComentarios(resposta.comentarios)
            setCarregando(false)
        })()
    }, [depoimentoId])



    return (
        <View>
            <CardGrande></CardGrande>
        </View>
    );
}
