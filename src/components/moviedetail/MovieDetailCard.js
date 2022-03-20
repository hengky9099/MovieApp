import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { moderateScale } from 'react-native-size-matters'
import Tags from '../Tags'

const MovieDetailCard = () => {
  
return (
    <View style={styles.container}>
        <FastImage 
                style={styles.image} 
                source={{
                    uri: `https://cdn.dribbble.com/users/7299396/screenshots/17563890/media/aabe316a76a5b8fcb32b25b0713957bc.png?compress=1&resize=800x600&vertical=top`,
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.contain}
        />
        <Text style={styles.title}>TITLE</Text>
        <Text style={styles.releasedate}>Release Date: </Text>
        <Text style={styles.rating}>Rating: </Text>
        <Text style={styles.runtime}>Runtime: </Text>
        <Text style={styles.status}>Status: </Text>
        <Tags style={styles.tags} />

    </View>
  )
}

export default MovieDetailCard

const styles = StyleSheet.create({
    container: {
        width: moderateScale(330),
        height: moderateScale(200),
        backgroundColor: 'black',
        borderRadius: 10,
        marginLeft: moderateScale(10),
        marginTop: moderateScale(-170)
    },
    image: {
        width: moderateScale(100),
        height: moderateScale(240),
        marginLeft: moderateScale(10),
        marginTop: moderateScale(20)
    },
    title: {
        fontSize: moderateScale(14),
        color: 'white',
        marginTop: moderateScale(-240),
        marginLeft: moderateScale(130)
    },
    releasedate: {
        fontSize: moderateScale(12),
        color: 'white',
        marginTop: moderateScale(2),
        marginLeft: moderateScale(130)
    },    
    rating: {
        fontSize: moderateScale(12),
        color: 'white',
        marginTop: moderateScale(2),
        marginLeft: moderateScale(130)
    },    
    runtime: {
        fontSize: moderateScale(12),
        color: 'white',
        marginTop: moderateScale(2),
        marginLeft: moderateScale(130)
    }, 
    status: {
        fontSize: moderateScale(12),
        color: 'white',
        marginTop: moderateScale(2),
        marginLeft: moderateScale(130)
    },
    tags: {
        marginTop: moderateScale(30),
        marginLeft: moderateScale(130)
    }
})