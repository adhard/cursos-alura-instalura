import React, { Fragment, useState, useEffect } from 'react';
import {
  ScrollView,
  FlatList
} from 'react-native'
import readPics from './src/api/feed';
import Header from './src/components/Header';
import Picture from './src/components/Picture';
import Comments from './src/components/Comments';

const App = () => {

  const [pics, setPics] = useState([])

  useEffect(() => { // não pose ser async nessa função do useEffect, pq metodos assincronos sempre retornam uma promisse, e dentro do useEffect só pode ser retornado funções
    readPics(setPics)
  },[])

  return (
    <Fragment> 
      <ScrollView>
        {/* {
          informacoes.map(info => (
            <Fragment key={info.usuario}>
              <Text>{info.usuario}</Text>
              <Image
                source={require("./res/img/alura.jpg")}
                style={estilo.imagem}
              />
            </Fragment>
          ))
        } */}
        <FlatList
          data={pics}
          keyExtractor={(item, index) => 'key'+item.id}
          renderItem={({item}) => (
            <Fragment>
             <Header user={item.userName} urlImage={item.userURL} />
             <Picture urlPic={item.url} description={item.description} likeLength={item.likes} />
             <Comments comments={item.comentarios} />
            </Fragment>
          )}
        >

        </FlatList>
      </ScrollView>
    </Fragment>
  );
};

export default App;
