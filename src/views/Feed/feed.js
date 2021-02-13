import React, { Fragment, useState, useEffect } from 'react';
import {
  ScrollView,
  FlatList,
  StatusBar,
  Platform
} from 'react-native'
import readPics from '../../api/feed';
import Header from '../../components/Header';
import Picture from '../../components/Picture';
import Comments from '../../components/Comments';
import {likePic,getPicLike} from '../../api/likes'

const Feed = () => {

  const [pics, setPics] = useState([])

  useEffect(() => { // não pose ser async nessa função do useEffect, pq metodos assincronos sempre retornam uma promisse, e dentro do useEffect só pode ser retornado funções
    readPics(setPics)
  },[])

  // let altura = Platform.OS === 'ios' ? 35 : 0
  let altura = 0;
  return (
    <Fragment> 
      <ScrollView style={{marginTop: altura}}>
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
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <FlatList
          data={pics}
          keyExtractor={(item, index) => 'key'+item.id}
          renderItem={({item}) => (
            <Fragment>
             <Header user={item.userName} urlImage={item.userURL} />
             <Picture urlPic={item.url} description={item.description} likeLength={item.likes} likePic={likePic} getPicLike={getPicLike} />
             <Comments comments={item.comentarios} />
            </Fragment>
          )}
        >

        </FlatList>
      </ScrollView>
    </Fragment>
  );
};


Feed.navigationOptions = ({navigation}) => ({
  title: navigation.getParam('nome'),
  header: Platform.OS === 'android' && 'null'
})

export default Feed;
