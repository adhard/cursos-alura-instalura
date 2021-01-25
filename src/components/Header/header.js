import React, {Fragment} from 'react'

import { Text, Image, View } from 'react-native'

import estilo from './style'

const Header = ({user,urlImage}) => {
    return (
        <Fragment>
            <View style={[estilo.header]}>
                <Image source={{uri: urlImage }} style={estilo.imagem} />
                <Text style={{marginLeft: 4}}>{user}</Text>
            </View>
        </Fragment>
    )
}


export default Header