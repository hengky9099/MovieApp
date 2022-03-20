import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

const BackButton = () => {
  return (
    <View>
      <FontAwesomeIcon icon="fa-solid fa-circle-left" size={30} />
    </View>
  )
}

export default BackButton

const styles = StyleSheet.create({})