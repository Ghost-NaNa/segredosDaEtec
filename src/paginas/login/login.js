import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import style from './estiloLogin.js';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Login({ navigation }) {
    const [rm, setRm] = React.useState('');
    const [senha, setSenha] = React.useState('');



    async function logarUsuario(rm, senha) {
        if (rm && senha.length > 4) {
            try {
                const dados = { rm: parseInt(rm), senha: senha }
                const url = 'http://192.168.18.120:3000/depoimentos-etec/v1/login'

                const response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(dados),
                })

                if (!response.ok) {
                    throw new Error('Erro na resposta da API: ' + response.status)
                }

                const responseData = await response.json()
                console.log('Resposta da API:', responseData)

                if (responseData.msg === 'Login realizado com sucesso.') {

                    await AsyncStorage.setItem('tokenSessao', responseData.token)

                    navigation.navigation.reset({
                        index: 0,
                        routes: [{ name: 'DrawerNav' }]
                    })

                } else {
                    alert('Login falhou: ' + responseData.msg)
                }
            } catch (error) {
                alert('Erro ao tentar entrar: ' + error.message)
            }
        } else {
            alert('Por favor, preencha corretamente os campos!')
        }
    }


    return (
        <View style={style.container}>
            <View>
                <Text style={style.Titulo}>Login</Text>
            </View>
            <TextInput
                style={style.Inputs}
                placeholder="Digite o seu RM"
                placeholderTextColor="#fff"
                value={rm}
                onChangeText={setRm}
                keyboardType="numeric"
            />
            <TextInput
                style={style.Inputs}
                placeholder="Digite sua senha"
                placeholderTextColor="#fff"
                value={senha}
                onChangeText={setSenha}
                keyboardType="default"
                secureTextEntry={true}
            />

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginTop: 20,
                    width: 300,
                    flexWrap: 'wrap',
                }}
            >
                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={[style.Button, { backgroundColor: 'darkorange' }]}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => logarUsuario(rm, senha)}
                >
                    <Text style={[style.Button, { backgroundColor: 'green' }]}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
