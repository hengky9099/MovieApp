import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HorizontalScroll from '../../components/home/HorizontalScroll'
import LatestUpload from '../../components/home/LatestUpload'
import Recommended from '../../components/home/Recommended'
import VerticalScroll from '../../components/home/VerticalScroll'

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