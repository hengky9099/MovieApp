import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const tags = (data) => {
  return (
    <View style={styles.taglinecontainer}>
        <Text style={styles.text}>Animation</Text>
    </View>
  )
}

export default tags

const styles = StyleSheet.create({
    taglinecontainer: {
        width: moderateScale(55),
        height: moderateScale(30),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: moderateScale(10),
        left: moderateScale(10),
        marginLeft: moderateScale(10),
        top: moderateScale(10)
    },
    text: {
      color: 'white',
      fontSize: moderateScale(10)
    }
})