import React, { Fragment, useState } from 'react';
import {
  Text,
  TextInput,
  Button,
  View,
  Platform
} from 'react-native'
import efetuarLogin from '../../api/login';
import AsyncStorage from '@react-native-community/async-storage'

import estilo from './styles'

const Login = ({navigation}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [mensagemErro, setMensagemErro] = useState('')

    const handleLogin = async () => {
        // console.warn()
        try {
            const token = await efetuarLogin(username, password)
            await AsyncStorage.setItem('instalura_token', token)

            navigation.replace('feed', {
                nome: username
            })
        } catch(err){
            // console.warn(err.message)
            setMensagemErro(err.message)
        }
    }

    return (
        <Fragment>
            <View style={estilo.container}>
                <TextInput
                    style={estilo.inputs}
                    placeholder="Usuário"
                    onChange={(text) => setUsername(text)}
                />
                
                <TextInput
                    style={estilo.inputs}
                    placeholder="Senha"
                    secureTextEntry={true}
                    onChange={(text) => setPassword(text)}
                />
                <Text>{mensagemErro}</Text>
            </View>
            <View>
                <Button title="Entrar" onPress={handleLogin} />
            </View>
        </Fragment>
  );
};

Login.navigationOptions = () => ({
    title: 'Login',
    header: Platform.OS === 'android' && 'null'
})

export default Login;
