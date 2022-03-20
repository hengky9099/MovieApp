import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { moderateScale } from 'react-native-size-matters'

const MovieDetailImage = () => {
  

  
    return (
    <View>
      <FastImage 
      style={styles.image} 
      source={{uri: `https://cdn.dribbble.com/users/1731254/screenshots/15637966/media/8a042e3d526de06f63ce736b26674327.png?compress=1&resize=800x600&vertical=top`, priority: FastImage.priority.fast}}
      resizeMode={FastImage.resizeMode.contain} />
    </View>
  )
}

export default MovieDetailImage

const styles = StyleSheet.create({
    image: {
        height: moderateScale(300),
        width: moderateScale(200),
    }
})