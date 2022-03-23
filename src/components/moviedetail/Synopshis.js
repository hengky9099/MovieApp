import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const Synopshis = ({data}) => {
  return (
    <View>
      <Text style={styles.title}>Synopsis</Text>
      <Text style={styles.paragraph}>{data.overview}</Text>
    </View>
  )
}

export default Synopshis

const styles = StyleSheet.create({
    title: {
        fontSize: moderateScale(16),
        marginTop: moderateScale(30),
        fontWeight: 'bold',
        marginLeft: moderateScale(20),
        color: 'white'
    },
    paragraph: {
        fontSize: moderateScale(12),
        color: 'white',
        marginTop: moderateScale(10),
        marginLeft: moderateScale(20),
        width: moderateScale(300)
    }
})