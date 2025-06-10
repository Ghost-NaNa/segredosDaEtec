import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import style from './estiloLogin.js';

export default function Login({ navigation }) {
    const [rm, setRm] = React.useState('');
    const [senha, setSenha] = React.useState('');

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
                    onPress={() => {
                        if (rm && senha.length > 4) {
                            try {
                                const dados = { rm: parseInt(rm), senha: senha };
                                const url = 'http://localhost:3000/depoimentos-etec/v1/login';

                                fetch(url, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(dados),
                                })
                                    .then(response => {
                                        if (!response.ok) {
                                            throw new Error('Erro na resposta da API: ' + response.status);
                                        }
                                        return response.json();  // Tenta converter a resposta em JSON
                                    })
                                    .then(responseData => {
                                        console.log('Resposta da API:', responseData);  // Log da resposta para debug
                                        if (responseData.msg === 'Login realizado com sucesso.') {
                                            navigation.navigate('Home', {
                                                usuario: responseData.usuario,
                                                token: responseData.token,
                                            });
                                        } else {
                                            alert('Login falhou: ' + responseData.msg);
                                        }
                                    })
                                    .catch(error => {
                                        alert('Erro ao tentar entrar: ' + error.message);
                                    });
                            } catch (error) {
                                alert('Erro ao tentar entrar: ' + error.message);
                            }
                        } else {
                            alert('Por favor, preencha corretamente os campos!');
                        }
                    }}
                >
                    <Text style={[style.Button, { backgroundColor: 'green' }]}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
