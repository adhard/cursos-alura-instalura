const efetuarLogin = async (userName, password) => {
    const url = Platform.OS === 'ios' ? 'localhost' : '10.0.2.2'
    const response = await (fetch(`http://${url}:3030/users/login`, {
        method: 'POST',
        body: JSON.stringify({
            userName,
            password
        }),
        headers: {
            'Content-type': 'application/json'
        }
    }))

    if(response.ok){
        return response.headers.get('x-access-token')
    } else { // nao conseguiu logar
        throw new Error('Não foi possível logar')
    }

}

export default efetuarLogin 