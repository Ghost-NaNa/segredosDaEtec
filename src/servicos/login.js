const login = async (rm, senha) => {
    
    const config = {
        method: 'POST',
        body: JSON.stringify({
            rm: rm,
            senha: `${senha}`
        })
    }

    url = 'http://192.168.1.3:3000/depoimentos-etec/v1/depoimentos'

    try {
       const resp = await fetch(url, config) 
    } catch (error) {
        
    }


}