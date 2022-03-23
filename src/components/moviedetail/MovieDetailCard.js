import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { moderateScale } from 'react-native-size-matters'
import Tags from '../Tags'
import { ImageUrl } from '../../helpers/apiAccessToken'


const MovieDetailCard = ({ data }) => {
  
return (
    <View style={styles.container}>
        <FastImage 
                style={styles.image} 
                source={{
                    uri: `${ImageUrl}${data.poster_path}`,
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.contain}
        />
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.releasedate}>Release Date: {data.release_date}</Text>
        <Text style={styles.status}>Status: {data.status}</Text>
        <Text style={styles.rating}>Rating: {data.vote_average}</Text>
        <Text style={styles.runtime}>Runtime: {data.runtime} Minutes</Text>
        <Text style={styles.tagline}>Tagline: {data.tagline}</Text>
    </View>
  )
}

export default MovieDetailCard

const styles = StyleSheet.create({
    container: {
        width: moderateScale(330),
        height: moderateScale(200),
        backgroundColor: '#00003f',
        elevation: 4,
        borderRadius: 10,
        marginLeft: moderateScale(10),
        marginTop: moderateScale(-190)
    },
    image: {
        width: moderateScale(100),
        height: moderateScale(240),
        marginLeft: moderateScale(10),
        marginTop: moderateScale(-18)
    },
    title: {
        color: 'white',
        marginTop: moderateScale(-200),
        marginLeft: moderateScale(130),
        fontSize: moderateScale(16),
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    releasedate: {
        fontSize: moderateScale(12),
        color: 'white',
        marginTop: moderateScale(15),
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
    tagline: {
        fontSize: moderateScale(12),
        color: 'white',
        marginTop: moderateScale(2),
        marginLeft: moderateScale(130)
    }
})