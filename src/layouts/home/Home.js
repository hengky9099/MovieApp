import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HorizontalScroll from '../../components/HorizontalScroll'
import LatestUpload from '../../components/LatestUpload'
import Recommended from '../../components/Recommended'
import VerticalScroll from '../../components/VerticalScroll'

const Home = () => {
  return (
    <View>
      <Recommended />
      <HorizontalScroll />
      <LatestUpload />
      <VerticalScroll/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})