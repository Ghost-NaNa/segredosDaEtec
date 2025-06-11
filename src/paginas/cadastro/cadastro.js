import React from 'react'
import { cadastrarUsuario } from '../../servicos/cadastro.js'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import style from './estiloCadastro.js'

export default function Cadastro({ navigation }) {
    const [rm, setRm] = React.useState('')
    const [senha, setSenha] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [nome, setNome] = React.useState('')
    const [sobrenome, setSobrenome] = React.useState('')

    return (
        <View style={style.container}>
            <View>
                <Text style={style.Titulo}>Cadastro</Text>
            </View>
            <TextInput style={style.Inputs} placeholder='Digite o seu RM' placeholderTextColor="#fff" value={rm} onChangeText={setRm} />
            <TextInput style={style.Inputs} placeholder='Digite o seu email' placeholderTextColor="#fff" value={email} onChangeText={setEmail} />
            <TextInput style={style.Inputs} placeholder='Digite o seu nome' placeholderTextColor="#fff" value={nome} onChangeText={setNome} />
            <TextInput style={style.Inputs} placeholder='Digite o seu sobrenome' placeholderTextColor="#fff" value={sobrenome} onChangeText={setSobrenome} />
            <TextInput style={style.Inputs} placeholder='Digite sua senha' placeholderTextColor="#fff" value={senha} onChangeText={setSenha} secureTextEntry={true} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 20, width: 300, flexWrap: 'wrap' }}>
                <TouchableOpacity onPress={() => cadastrarUsuario(rm, senha, email, nome, sobrenome, navigation)}>
                    <Text style={[style.Button, { backgroundColor: 'darkorange' }]}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={[style.Button, { backgroundColor: 'gray', marginTop: 10 }]}>Voltar para o Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
