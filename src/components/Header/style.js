import { StyleSheet, Dimensions } from 'react-native'

const largura = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
    imagem: {
      width: largura * 0.1,
      height: largura * 0.1,
      borderRadius: 50,
    },
    header: {
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5
    }
  })

  export default estilo