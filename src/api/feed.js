import {Platform} from 'react-native'

const readPics = async( callback ) => {
    const url = Platform.OS === 'ios' ? 'localhost' : '10.0.2.2'
    const picsHttp = await (fetch(`http://${url}:3030/feed`))
    const picsJson = await picsHttp.json()
    callback(picsJson)
  }

  export default readPics