import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MovieDetailImage from '../../components/moviedetail/MovieDetailImage'
import MovieDetailCard from '../../components/moviedetail/MovieDetailCard'
import Genres from '../../components/moviedetail/Genres'
import Synopshis from '../../components/moviedetail/Synopshis'
import Artist from '../../components/moviedetail/Artist'
import { ScrollView } from 'react-native-gesture-handler'
import BackButton from '../../components/BackButton'
import LikeButton from '../../components/LikeButton'
import ShareButton from '../../components/ShareButton'

const Movie_details = () => {
  return (
    <ScrollView>
      <MovieDetailImage />
      <MovieDetailCard />
      <Genres />
      <Synopshis />
      <Artist />
      <BackButton />
      <LikeButton />
      <ShareButton />
    </ScrollView>
  )
}

export default Movie_details

const styles = StyleSheet.create({})