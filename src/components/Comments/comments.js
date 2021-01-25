import React, {Fragment, useRef, useState} from 'react';
import { FlatList, Text, TextInput, Image, TouchableOpacity, View } from 'react-native'

import estilo from './styles';

const Comments = ({comments}) => {
    const [commentList, setCommentList] = useState(comments)
    const inputComment = useRef()
    let newComment = ''

    const addComment = () => {
        setCommentList([...commentList, {
            date: Date.now(),
            text: newComment,
            userName: 'adrhardtke'
        }])
        inputComment.current.value = ''
    }

  return (
      <Fragment>
          <FlatList
            data={commentList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
                <View style={estilo.inline}>
                    <Text>{item.userName}: </Text>
                    <Text>{item.text}</Text>
                </View>
            )}
         />
         <View style={estilo.inline}>
            <TextInput
                ref={inputComment}
                placeholder={"Deixe seu comentário..."}
                style={{flex: 1}}
                onChangeText={(value) => newComment = value}
            />
            <TouchableOpacity onPress={addComment}>
                <Image source={require('../../../res/img/send.png')} style={estilo.imgSend}/>
            </TouchableOpacity>
         </View>
      </Fragment>
  )
}

export default Comments