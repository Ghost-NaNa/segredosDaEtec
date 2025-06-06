import React, { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView, FlatList, Platform, StyleSheet } from 'react-native';
import Cards from '../../componentes/cards/cards.js'; // Importe seu componente Cards
import pegarDepoimentos from '../../servicos/posts.js';

export default function App() {

    const navigation = useNavigation()

    const [depoimentos, setDepoimentos] = useState([])

    useEffect(() => {
        (async () => {
            const dados = await pegarDepoimentos();
            setDepoimentos(dados);
        })();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={depoimentos}
                keyExtractor={(item) => item.depoimento_id}
                renderItem={({ item }) => (
                    <Cards
                        avatarUrl={'https://placecats.com/neo/300/200'}
                        postTitle={item.depoimento_titulo}
                        time={new Date(item.depoimento_data_criacao).toLocaleDateString()} // formata a data para exibir bonitinho
                        text={item.depoimento_conteudo}
                        comments={0}
                        onStarPress={() => console.log('Star pressed', item.depoimento_id)}
                        onReportPress={() => console.log('Report pressed', item.depoimento_id)}
                        onCardPress= { () => {console.log('Card pressed');} }
                    />
                )}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        paddingTop: Platform.OS === 'android' ? 7 : 0,
    },
});


// navigation.navigate('Itens Salvos', item.depoimento_id)