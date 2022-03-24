import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const Artist = () => {
  return (
    <View>
      <Text style={styles.title}>Artist</Text>
    </View>
  )
  
}

export default Artist

const styles = StyleSheet.create({
  title: {
    fontSize: moderateScale(16),
    color: 'white',
    fontWeight: 'bold',
    marginTop: moderateScale(15),
    marginLeft: moderateScale(20),
  }  
})