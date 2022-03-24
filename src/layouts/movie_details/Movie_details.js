import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, StatusBar } from 'react-native'
import React, {useState, useEffect} from 'react'
import MovieDetailImage from '../../components/moviedetail/MovieDetailImage'
import MovieDetailCard from '../../components/moviedetail/MovieDetailCard'
import Genres from '../../components/moviedetail/Genres'
import Synopshis from '../../components/moviedetail/Synopshis'
import Artist from '../../components/moviedetail/Artist'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import axios from 'axios'
import {ACCESS_TOKEN, BaseUrl, ImageUrl} from '../../helpers/apiAccessToken'
import Icon from 'react-native-vector-icons/Feather';
import { moderateScale } from 'react-native-size-matters'
import { SafeAreaView } from 'react-native-safe-area-context'
import FastImage from 'react-native-fast-image'

const Movie_details = ({route, navigation}) => {
  const [data, setData] = useState([])
  const [cast, setCast] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDataFromHome();
    getCastData();
  }, []);

  const getDataFromHome = async () => {
    try {
      setLoading(true)
    const results = await axios.get(`${BaseUrl}/movie/${route.params.datas}`, {
      headers: {Authorization: `Bearer ${ACCESS_TOKEN}`},
    });
      setData(results.data)
    }catch (error) {
        console.log(error);
  } finally {
    setLoading(false)
  }
}

const getCastData = async () => {
  try {
    setLoading(true)
  const results = await axios.get(`${BaseUrl}/movie/${route.params.datas}/credits`, {
    headers: {Authorization: `Bearer ${ACCESS_TOKEN}`},
  });
  setCast(results.data)
  }catch (error) {
      console.log(error);
  } finally {
    setLoading(false)
  }
}
if (loading) {
  return (
    <View
      style={[styles.loadingContainer, styles.loadingHorizontal]}>
      <ActivityIndicator size="large" color="red" />
    </View>
  );
} else {
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor='black' />
      <TouchableOpacity style={styles.backicon} onPress={() => navigation.navigate('Home')} >
        <Icon name='arrow-left-circle' size={30} color="red" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.loveicon} >
        <Icon name='heart' size={30} color="red" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.shareicon}>
        <Icon name="share-2" size={30} color="red" />
    </TouchableOpacity >
      <MovieDetailImage data={data} />
      <MovieDetailCard data={data} />
      <Genres />
      <FlatList
       style={styles.genresFlatList} 
        data={data.genres}
        renderItem = {({ item }) => (
        <View style={styles.taglinecontainer}>
            <Text style={styles.tagstext}>{item.name}</Text>
        </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
      <Synopshis data={data} />
      <Artist />
      <SafeAreaView style={styles.containerCard}>
      <FlatList 
        data={cast.cast}
        renderItem = {({ item }) => (
          <View style={styles.containerArtistCard}>
          <FastImage 
           style={styles.artistImage} 
           source={{uri: `${ImageUrl}${item.profile_path}`, priority: FastImage.priority.fast}}
           resizeMode={FastImage.resizeMode.contain}
          />
          <Text style={styles.artistName}>{item.original_name}</Text>
      </View>
        )}
        keyExtractor={(item, numColumns) => item.cast_id}
        numColumns={3}
      />
      </SafeAreaView>
    </ScrollView>
  )
}
}
export default Movie_details

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'
  },
  backicon: {
    top: moderateScale(20),
    left: moderateScale(10),
    position: 'absolute',
    zIndex: 1

  },
  loveicon: {
    top: moderateScale(15),
    left: moderateScale(250),
    position: 'absolute',
    zIndex: 1
  },
  shareicon: {
    top: moderateScale(13),
    left: moderateScale(300),
    position: 'absolute',
    zIndex: 1
  },
  containerArtistCard: {
      width: moderateScale(90),
      height: moderateScale(165),
      marginLeft: moderateScale(20),
      marginTop: moderateScale(20),
      borderRadius: 10,
      backgroundColor: 'red',
  },
  containerCard: {
    alignItems: 'center',
    justifyContent: 'center',
    right: moderateScale(16),
    marginBottom: moderateScale(10)
  },
  artistName: {
    textAlign: 'center',
    color: 'white',
    fontSize: moderateScale(12)
  },
  artistImage: {
    width: moderateScale(90),
    height: moderateScale(136),
    bottom: moderateScale(2)
  },
  taglinecontainer: {
    width: moderateScale(70),
    height: moderateScale(30),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: moderateScale(10),
    marginLeft: moderateScale(10),
    top: moderateScale(10),
    marginBottom: moderateScale(50),
},
tagstext: {
  color: 'white',
  fontSize: moderateScale(10)
},
  loadingContainer: {
  flex: 1,
  justifyContent: "center",
  backgroundColor: 'black'

},
loadingHorizontal: {
  flexDirection: "row",
  justifyContent: "space-around",
  padding: 10
}
})