//essa pasta é para funções relacionadas a posts

//Para fim de testes, o token é declarado aqui, quando o sistema de login tiver pronto é só passar o token como parametro nas functions
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJybSI6MjgzMywiZW1haWwiOiJiYWNhbmFAZ21haWwuY29tIiwibm9tZSI6ImVmYXJpbyIsInNvYnJlbm9tZSI6InZpZ2FyaW8iLCJpYXQiOjE3NDkxNzIwNjEsImV4cCI6MTc0OTE3NTY2MX0.tmk43vlNgUGyIGR_BcEEx9dBJOu7WNNPVBYJYBoenc8'

const pegarDepoimentos = async () => {

    const config = {
        method: 'GET',
        headers: {'Authorization': `Bearer ${token}`}
    }

    const url = 'http://192.168.1.3:3000/depoimentos-etec/v1/depoimentos'
    try {
        // coloque seu ip ali no link
        const respo = await fetch(url, config)
        const DATA = await respo.json()

        console.log(DATA)

        return await DATA
    } catch (error) {
        
    }

};

export default pegarDepoimentos;