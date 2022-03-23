import { StyleSheet, View } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { moderateScale } from 'react-native-size-matters'
import { ImageUrl } from '../../helpers/apiAccessToken'

const MovieDetailImage = ({data}) => {
    return (
    <View>
      <FastImage 
      style={styles.image} 
      source={{uri: `${ImageUrl}${data.backdrop_path}`, priority: FastImage.priority.fast}}
      resizeMode={FastImage.resizeMode.contain} />
    </View>
  )
}

export default MovieDetailImage

const styles = StyleSheet.create({
    image: {
        height: moderateScale(300),
        width: moderateScale(360),
        top: moderateScale(-50)
    }
})