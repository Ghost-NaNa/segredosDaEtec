import React from 'react';

import { View , TextInput, Text, TouchableOpacity } from 'react-native';
import style from './estiloCadastro.js';
import { SearchBar } from 'react-native-screens';

export default function cadastro({ navigation }) {

    const [Rm, setRm] = React.useState();
    const [senha, setSenha] = React.useState('')
    const [email, setEmail] = React.useState();
    const [nome, setNome] = React.useState('')
    const [sobrenome, setSobrenome] = React.useState()

    return(
        <View style={style.container}>
            <View>
                <Text style={style.Titulo} > Cadastro </Text>
            </View>
            <TextInput style={style.Inputs} placeholder='Digite o seu RM' placeholderTextColor="#fff" value={Rm} onChangeText={setRm} />
            <TextInput style={style.Inputs} placeholder='Digite o seu email' placeholderTextColor="#fff" value={email} onChangeText={setEmail} />
            <TextInput style={style.Inputs} placeholder='Digite o seu nome' placeholderTextColor="#fff" value={nome} onChangeText={setNome} />
            <TextInput style={style.Inputs} placeholder='Digite o seu sobrenome' placeholderTextColor="#fff" value={sobrenome} onChangeText={setSobrenome} />
            <TextInput style={style.Inputs} placeholder='Digite sua senha' placeholderTextColor= "#fff" value={senha} onChangeText={setSenha} />

            <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 20, width: 300, flexWrap: 'wrap'}}>


                
                <TouchableOpacity 
                                    onPress={() => {if (Rm && senha && email && sobrenome && nome) {
                                        try {
                                            const dados = { rm: parseInt(Rm), senha: senha, email: email, sobrenome: sobrenome, nome: nome };
                                            console.log(dados)
                                            const url ='http://localhost:3000/depoimentos-etec/v1/registrarUsuario'

                                            fetch (url, {
                                                method: 'POST',
                                                headers: {
                                                    'Content-Type': 'application/json',
                                                },
                                                body: JSON.stringify(dados)
                                            })
                                            .then(response => response.json())

                                            .then(response => {

                                                if (response.success) {
                                                    alert('Cadastro realizado com sucesso!');

                                                    setTimeout(() => {
                                                        navigation.navigate("Login");
                                                    }
                                                    , 5000);
                                                } else {
                                                    alert('Cadastro falhou: ' + response.message);
                                                }
                                            })
                                            .catch(error => {
                                                alert('Erro ao tentar cadastrar: ' + error.message);
                                            });
                                        } catch (error) {
                                            alert('Erro ao tentar entrar: ' + error.message);
                                        }
                                    } else {
                                        alert('Por favor, preencha todos os campos.');
                                    }
                                    }} >
                        <Text style={[ style.Button, {backgroundColor: 'darkorange'}]} > Cadastrar </Text> 
                </TouchableOpacity>
            </View>
        </View>
    )
}