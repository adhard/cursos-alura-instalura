import React, {Fragment, useState} from 'react';
import {
  Image, Text, TouchableOpacity, View
} from 'react-native'

import estilo from './styles'
import {likePic,getPicLike} from '../../api/likes'

const Picture = ({urlPic, description, likeLength }) => {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(likeLength)

  const handleLike = () => {
    const [isLiked, totalLikes] = likePic(liked, likes)
    setLiked(isLiked)
    setLikes(totalLikes)
  }

  return (
    <Fragment> 
        <Image
            source={{uri: urlPic}}
            style={estilo.imagem}
        />
        <Text>{description}</Text>
        <View style={estilo.viewLike}>
          <TouchableOpacity onPress={handleLike}>
            <Image source={getPicLike(liked)} style={estilo.like}/>
          </TouchableOpacity>
          <Text>likes {likes}</Text>
        </View>
    </Fragment>
  );
};


export default Picture;
