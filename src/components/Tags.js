import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const tags = () => {
  return (
    <View style={styles.taglinecontainer}>
        <Text>thriller</Text>
    </View>
  )
}

export default tags

const styles = StyleSheet.create({
    taglinecontainer: {
        width: moderateScale(50),
        height: moderateScale(30),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: moderateScale(10),
    }
})