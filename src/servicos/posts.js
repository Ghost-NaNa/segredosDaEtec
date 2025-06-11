import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native'

// IP do servidor
const ipServer = "192.168.18.120"

// Função para limpar a sessão e redirecionar
const limparSessao = async (navigation) => {
    await AsyncStorage.removeItem('tokenSessao')
    await AsyncStorage.removeItem('usuarioSessao')

    if (navigation) {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }]
        })
    }

    console.warn('Sessão expirada. Redirecionando para login.')
}

export const pegarDepoimentos = async (navigation) => {
    const token = await AsyncStorage.getItem('tokenSessao')

    const config = {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` }
    }

    const url = `http://${ipServer}:3000/depoimentos-etec/v1/depoimentos`

    try {
        const respo = await fetch(url, config)

        if (respo.status === 401 || respo.status === 403) {
            await limparSessao(navigation)
            return null
        }

        return await respo.json()

    } catch (error) {
        console.error('Erro ao pegar depoimentos:', error)
        Alert.alert(
            'Erro de conexão',
            'Não foi possível carregar os depoimentos. Verifique sua internet ou tente mais tarde.',
            [{ text: 'OK' }]
        )
        return null
    }
}

// pegarSecaoDepoimento
export const pegarSecaoDepoimento = async (depoimentoId, navigation) => {
    const token = await AsyncStorage.getItem('tokenSessao')

    const config = {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` }
    }

    const url = `http://${ipServer}:3000/depoimentos-etec/v1/depoimento/${depoimentoId}`

    try {
        const respo = await fetch(url, config)

        if (respo.status === 401 || respo.status === 403) {
            await limparSessao(navigation)
            return null
        }

        return await respo.json()

    } catch (error) {
        console.error('Erro ao pegar depoimento:', error)
        Alert.alert(
            'Erro ao buscar depoimento',
            'Não foi possível acessar este depoimento. Tente novamente em instantes.',
            [{ text: 'OK' }]
        )
        return null
    }
}

// publicarComentario
export const publicarComentario = async (conteudoComentario, idDepoimento, navigation) => {
    const token = await AsyncStorage.getItem('tokenSessao')

    const dados = {
        depoimentoId: idDepoimento,
        conteudoDepoimento: conteudoComentario
    }

    const config = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    }

    const url = `http://${ipServer}:3000/depoimentos-etec/v1/publicarComentario`

    try {
        const respo = await fetch(url, config)

        if (respo.status === 401 || respo.status === 403) {
            await limparSessao(navigation)
            return null
        }

        return await respo.json()

    } catch (error) {
        console.error('Erro ao publicar comentário:', error)
        Alert.alert(
            'Erro ao comentar',
            'Não foi possível publicar o comentário. Tente novamente.',
            [{ text: 'OK' }]
        )
        return null
    }
}

export const publicarDepoimento = async (titulo, conteudo, navigation) => {
    // Validação antes de fazer a requisição
    if (!titulo || !conteudo) {
        Alert.alert(
            "Campos obrigatórios",
            "Por favor, preencha tanto o título quanto o conteúdo do depoimento.",
            [{ text: "OK" }]
        )
        return null
    }

    const token = await AsyncStorage.getItem('tokenSessao')

    const dados = {
        titulo: titulo,
        conteudo: conteudo
    }

    const config = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    }

    const url = `http://${ipServer}:3000/depoimentos-etec/v1/publicarDepoimento`

    try {
        const respo = await fetch(url, config)

        if (respo.status === 401 || respo.status === 403) {
            await limparSessao(navigation)
            return null
        }

        return await respo.json()

    } catch (error) {
        Alert.alert(
            "Erro na requisição",
            "Houve um problema ao tentar enviar o depoimento. Tente novamente mais tarde.",
            [{ text: "Fechar" }]
        )
        console.error("Erro ao publicar depoimento:", error)
        return null
    }
}


