import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const Genres = () => {
  return (
    <View style={styles.genres}>
      <Text style={styles.genretitle}>Genres</Text>
    </View>
  )
}

export default Genres

const styles = StyleSheet.create({
    genretitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: moderateScale(16),
        marginTop: moderateScale(15),
        marginLeft: moderateScale(20)
    },
})