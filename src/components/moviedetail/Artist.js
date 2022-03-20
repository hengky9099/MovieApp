import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import ArtistCard from './ArtistCard'

const Artist = () => {
  return (
    <View>
      <Text style={styles.title}>Artist</Text>
      <ArtistCard />
    </View>
  )
  
}

export default Artist

const styles = StyleSheet.create({
  title: {
    fontSize: moderateScale(16),
    color: 'black',
    fontWeight: 'bold',
    marginTop: moderateScale(10),
    marginLeft: moderateScale(20),
  }  
})