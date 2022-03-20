import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import axios from 'axios'
import {ACCESS_TOKEN, BaseUrl, ImageUrl} from '../helpers/apiAccessToken'

const api = () => {
  
  const [getUpcomingMovie, setGetUpcomingMovie] = useState({});
  const [nowPlayingMovieData, setNowPlayingMovieData] = useState({});

  useEffect(() => {
    getUpcomingMovies();
  }, []);

  useEffect(() => {
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

}

export default api

const styles = StyleSheet.create({})