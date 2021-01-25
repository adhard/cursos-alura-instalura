import {
    Dimensions,
    StyleSheet,
  } from 'react-native'
  
  const largura = Dimensions.get('screen').width;
  
const estilo = StyleSheet.create({
    imagem: {
      width: largura,
      height: largura
    },
    like: {
      width: largura * 0.06,
      height: largura * 0.06,
      margin: 5
    },
    viewLike: {
      flexDirection: 'row',
      alignItems: 'center'
    }
  })

  export default estilo