const readPics = async( callback ) => {
    const picsHttp = await (fetch('http://10.0.2.2:3030/feed'))
    const picsJson = await picsHttp.json()
    callback(picsJson)
  }

  export default readPics