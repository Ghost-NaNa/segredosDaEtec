



const pegarDepoimentos = async () => {
    
    try {
        // coloque seu ip ali no link
        const respo = await fetch('http://192.168.18.120:3000/depoimentos-etec/v1/depoimentos')
        const DATA = await respo.json()

        return await DATA
    } catch (error) {
        console.error(error.message)
    }

};

export default pegarDepoimentos;