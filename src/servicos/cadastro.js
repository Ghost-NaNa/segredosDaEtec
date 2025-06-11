
export async function cadastrarUsuario(rm, senha, email, nome, sobrenome, navigation) {
    if (rm && senha && email && sobrenome && nome) {
        try {
            const dados = { rm: parseInt(rm), senha, email, sobrenome, nome }
            const url = 'http://192.168.18.120:3000/depoimentos-etec/v1/registrarUsuario'

            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dados),
            });

            if (response.status === 201) {
                alert('Cadastro realizado com sucesso!')

                navigation.navigate('Login')

            } else {
                const errorData = await response.json();
                alert('Cadastro falhou: ' + (errorData.msg || 'Erro desconhecido'))
            }
        } catch (error) {
            alert('Erro ao tentar cadastrar: ' + error.message)
        }
    } else {
        alert('Por favor, preencha todos os campos.')
    }
}
