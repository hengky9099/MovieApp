import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import Tags from '../Tags'

const Genres = () => {
  return (
    <View>
      <Text style={styles.title}>Genres</Text>
      <Tags style={styles.genres} />
    </View>
  )
}

export default Genres

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: moderateScale(16),
        marginTop: moderateScale(15),
        marginLeft: moderateScale(20)
    },
    genres: {
        marginTop: moderateScale(10),
        marginLeft: moderateScale(10),
        left: moderateScale(20)
    }
})