import React from 'react'
import { cadastrarUsuario } from '../../servicos/cadastro.js'
import { View, TextInput, Text, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native'

import { Ionicons } from "@expo/vector-icons";
import style from './estiloCadastro.js'



export default function Cadastro({ navigation }) {

    const [cod, setCodEtec] = React.useState('')
    const [rm, setRm] = React.useState('')
    const [senha, setSenha] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [nome, setNome] = React.useState('')
    const [sobrenome, setSobrenome] = React.useState('')

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

                    <Text style={style.label}>Código da ETEC</Text>
                    <View style={style.inputContainer}>
                        <Ionicons name="business-outline" size={20} color="#fff" style={style.inputIcon} />
                        <TextInput
                            style={style.input}
                            placeholder="Digite seu código da ETEC"
                            placeholderTextColor="#ddd"
                            value={cod}
                            onChangeText={setCodEtec}
                            keyboardType="numeric"
                        />
                    </View>
                    
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

                    <Text style={style.label}>Email</Text>
                    <View style={style.inputContainer}>
                        <Ionicons name="mail" size={20} color="#fff" style={style.inputIcon} />
                        <TextInput
                            style={style.input}
                            placeholder="Digite o seu Email"
                            placeholderTextColor="#ddd"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="text"
                        />
                    </View>
                    
                    <Text style={style.label}>Nome</Text>
                    <View style={style.inputContainer}>
                        <Ionicons name="person-outline" size={20} color="#fff" style={style.inputIcon} />
                        <TextInput
                            style={style.input}
                            placeholder="Digite o seu Nome"
                            placeholderTextColor="#ddd"
                            value={nome}
                            onChangeText={setNome}
                            keyboardType="text"
                        />
                    </View>

                    <Text style={style.label}>Sobrenome</Text>
                    <View style={style.inputContainer}>
                        <Ionicons name="person-outline" size={20} color="#fff" style={style.inputIcon} />
                        <TextInput
                            style={style.input}
                            placeholder="Digite o seu sobrenome"
                            placeholderTextColor="#ddd"
                            value={sobrenome}
                            onChangeText={setSobrenome}
                            keyboardType="text"
                        />
                    </View>

                    <Text style={style.label}>Senha</Text>
                    <View style={style.inputContainer}>
                        <Ionicons name="lock-closed-outline" size={20} color="#fff" style={style.inputIcon} />
                        <TextInput
                            style={style.input}
                            placeholder="Digite sua senha"
                            placeholderTextColor="#ddd"
                            value={senha}
                            onChangeText={setSenha}
                            keyboardType="text"
                            secureTextEntry
                        />
                    </View>



                                                                                        
                <TouchableOpacity style={style.botao} onPress={() => cadastrarUsuario(cod, rm, senha, email, nome, sobrenome, navigation)}> 
                    <Text style={style.botaoTexto}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.botao} onPress={() => navigation.navigate('Login')}>
                    <Text style={style.botaoTexto}>Voltar para o Login</Text>
                </TouchableOpacity>

        </View>
        </KeyboardAvoidingView>    
    </ImageBackground>
    );
}
