//essa pasta é para funções relacionadas a posts

//Para fim de testes, o token é declarado aqui, quando o sistema de login tiver pronto é só passar o token como parametro nas functions
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJybSI6MjgzMywiZW1haWwiOiJiYWNhbmFAZ21haWwuY29tIiwibm9tZSI6ImVmYXJpbyIsInNvYnJlbm9tZSI6InZpZ2FyaW8iLCJpYXQiOjE3NDkyNjA2NDAsImV4cCI6MTc0OTI2NDI0MH0.4b5H9FinH2EXo-weXqd1LU81BVFn-WNZCE6IjSFrBpA'

//coloquem o ip pc que roda o server aqui, só lembrem de apagar dps

const ip = "192.168.1.3"

export const pegarDepoimentos = async () => {

    const config = {
        method: 'GET',
        headers: {'Authorization': `Bearer ${token}`}
    }

    const url = `http://${ip}:3000/depoimentos-etec/v1/depoimentos`
    try {
        // coloque seu ip ali no link
        const respo = await fetch(url, config)
        const DATA = await respo.json()

        if (!respo.ok){
            if (respo.status == 401 || respo.status == 403  ) {
                
            }
        }
        console.log(DATA)

        return await DATA
    } catch (error) {
        
    }

};

//pega o post e os comentarios com base no id
export const pegarSecaoDepoimento = async (depoimentoId) => {

     const config = {
        method: 'GET',
        headers: {'Authorization': `Bearer ${token}`}
    }
    
    const url = `http://${ip}:3000/depoimentos-etec/v1/depoimento/${depoimentoId}`
    
    try {
        const respo = await fetch(url, config)
        const DATA = await respo.json()
        return DATA
    } catch (error) {
        
    }
}
