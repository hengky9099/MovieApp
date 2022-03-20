import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import FastImage from 'react-native-fast-image';
import { FlatList } from 'react-native'
import { moderateScale } from 'react-native-size-matters';
import axios from 'axios'
import {ACCESS_TOKEN, BaseUrl, ImageUrl} from '../../helpers/apiAccessToken';
import nowPlayingMovieData from '../../api/api'

const VerticalScroll = () => {

    // component
    const VerticalComponent = ({ item, index }) => {
      return (
      <View style={styles.container}>
        <FastImage 
        style={styles.image} 
        source={{
            uri: `${ImageUrl}${item.poster_path}`,
            priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
        />
          <View style={styles.textcontainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.overview}</Text>
              <TouchableOpacity  style={styles.button}>
                  <Text>Show More</Text>
              </TouchableOpacity>
          </View>
      </View>
      )
    };

  return (
    <View>
        <FlatList
        data={nowPlayingMovieData}
        renderItem={VerticalComponent}
        keyExtractor={(item, index) => index}
        />
    </View>
  )
}

export default VerticalScroll

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: moderateScale(200),
    },
    image: {
        width: moderateScale(120),
        height: moderateScale(120),
        marginBottom: moderateScale(5)
    },
    textcontainer: {
        flexDirection: 'column',
    },
    title: {
        fontStyle: 'italic'
    },
    subtitle: {
        width: moderateScale(200),
    },
    button: {
        backgroundColor: 'gold',
        width: moderateScale(90),
        height: moderateScale(40),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})