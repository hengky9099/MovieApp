import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { moderateScale } from 'react-native-size-matters'
import axios from 'axios'
import {ACCESS_TOKEN, BaseUrl} from '../../helpers/apiAccessToken'
import HorizontalScroll from '../../components/home/HorizontalScroll'
import VerticalScroll from '../../components/home/VerticalScroll'


const Home = ({ navigation }) => {
  const [getUpcomingMovie, setGetUpcomingMovie] = useState([]);
  const [nowPlayingMovieData, setNowPlayingMovieData] = useState([]);

  useEffect(() => {
    getUpcomingMovies();
    getNowPlayingMovie();
  }, []);

// get data
const getUpcomingMovies = async () => {
  try {
      const results = await axios.get(`${BaseUrl}/movie/upcoming`, {
      headers: {Authorization: `Bearer ${ACCESS_TOKEN}`},
      });
      setGetUpcomingMovie(results.data.results);
  } catch (error) {
      console.log(error);
  }
  };

const getNowPlayingMovie = async () => {
  try {
    const results = await axios.get(`${BaseUrl}/movie/now_playing`, {
      headers: {Authorization: `Bearer ${ACCESS_TOKEN}`},
    });
    setNowPlayingMovieData(results.data.results);
  } catch (error) {
    console.log(error);
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.Recommended}>Recommended</Text>
      {/* Horizontal Scroll */}
      <View style={styles.HorizontalFlatList}>
      <HorizontalScroll data={getUpcomingMovie} navigation={navigation} />
      </View>
  

      <Text style={styles.LatestUpload}>Latest Upload</Text>
      {/* vertical scroll */}
      <View style={styles.VerticalFlatList}>
        <VerticalScroll data={nowPlayingMovieData} navigation={navigation} />
      </View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'
  },
  Recommended: {
    fontSize: moderateScale(16),
    color: 'white',
    fontWeight: 'bold',
    left: moderateScale(10),
    top: moderateScale(35)
  },
  LatestUpload: {
    fontSize: moderateScale(16),
    color: 'white',
    fontWeight: 'bold',
    left: moderateScale(10),
    bottom: moderateScale(30)

  },
  Horizontalimage: {
    width: moderateScale(100),
    height: moderateScale(300),
    marginHorizontal: moderateScale(8),
    left: moderateScale(2),
    bottom: moderateScale(24),
    overflow: 'hidden',
  },
  HorizontalFlatList: {
    top: moderateScale(8)
  },
  VerticalFlatList: {
    left: moderateScale(-10),
    top: moderateScale(-35),
    marginTop: moderateScale(25)
},
})