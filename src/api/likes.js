const getPicLike = (isLiked) => {
    if(isLiked){
      return require('../../res/img/s2-checked.png')
    } else {
      return require('../../res/img/s2.png')
    }
}


const likePic = (liked, likes) => {
    liked ? likes-- : likes++
    return [!liked, likes]
}

export {likePic, getPicLike}