import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import style from './estiloLogin.js'

export default function Login({ navigation }) {
    const [rm, setRm] = React.useState('');
    const [senha, setSenha] = React.useState('')


    async function logarUsuario(rm, senha) {
        if (rm && senha.length) {
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
        <ImageBackground
            source={require("../../../assets/fundo.jpg")}
            style={style.imagem}
            resizeMode="cover"
        >


            <KeyboardAvoidingView
                style={style.container}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
                <View style={style.card}>
                    <Text style={style.label}>RM</Text>
                    <View style={style.inputContainer}>
                        <Ionicons name="person-outline" size={20} color="#fff" style={style.inputIcon} />
                        <TextInput
                            style={style.input}
                            placeholder="Digite o seu RM"
                            placeholderTextColor="#ddd"
                            value={rm}
                            onChangeText={setRm}
                            keyboardType="numeric"
                        />
                    </View>

                    <Text style={style.label}>SENHA</Text>
                    <View style={style.inputContainer}>
                        <Ionicons name="lock-closed-outline" size={20} color="#fff" style={style.inputIcon} />
                        <TextInput
                            style={style.input}
                            placeholder="Digite sua senha"
                            placeholderTextColor="#ddd"
                            secureTextEntry
                            value={senha}
                            onChangeText={setSenha}
                        />
                    </View>

                    <Text style={style.label}>CÓDIGO</Text>
                    <View style={style.inputContainer}>
                        <Ionicons name="key-outline" size={20} color="#fff" style={style.inputIcon} />
                        <TextInput
                            style={style.input}
                            placeholder="Código de verificação"
                            placeholderTextColor="#ddd"
                        />
                    </View>

                    <TouchableOpacity style={style.botao} onPress={() => {logarUsuario(rm, senha)}}>
                        <Text style={style.botaoTexto}>Log In</Text>
                        <Ionicons name="arrow-forward-outline" size={20} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={style.botao} onPress={() => navigation.navigate('Cadastro')}>
                        <Text style={style.botaoTexto}>Cadastre-se</Text>
                        <Ionicons name="arrow-forward-outline" size={20} color="#fff" />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}
