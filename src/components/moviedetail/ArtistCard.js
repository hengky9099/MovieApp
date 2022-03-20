import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { moderateScale } from 'react-native-size-matters'

const ArtistCard = () => {
  return (
    <View style={styles.container}>
        <FastImage 
         style={styles.image} 
         source={{uri: `https://cdn.dribbble.com/users/1731254/screenshots/15637966/media/8a042e3d526de06f63ce736b26674327.png?compress=1&resize=800x600&vertical=top`, priority: FastImage.priority.fast}}
         resizeMode={FastImage.resizeMode.contain}
        />
        <Text style={styles.name} >Hengky Goh</Text>
    </View>
  )
}

export default ArtistCard

const styles = StyleSheet.create({
    container: {
        width: moderateScale(100),
        height: moderateScale(180),
        marginLeft: moderateScale(20),
        marginTop: moderateScale(20),
        borderRadius: 10,
        backgroundColor: 'black'

    },
    image: {
        width: moderateScale(100),
        height: moderateScale(150)
    },
    name: {
        textAlign: 'center',
        color: 'white',
        fontSize: moderateScale(12)
    }
})