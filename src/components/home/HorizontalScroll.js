import { StyleSheet, TouchableOpacity, FlatList, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import FastImage from 'react-native-fast-image';
import axios from 'axios'
import {ACCESS_TOKEN, BaseUrl, ImageUrl} from '../../helpers/apiAccessToken';
import getUpcomingMovie from '../../api/api'

const HorizontalScroll = () => {
 
    
    const HorizontalComponent = ({item, index}) => {
      return (
      <TouchableOpacity>
        <FastImage 
        style={styles.image} 
        source={{uri: `${ImageUrl}${item.poster_path}`, priority: FastImage.priority.fast}}
        resizeMode={FastImage.resizeMode.contain} />
      </TouchableOpacity>
      );
     } ;

    return (
        <FlatList
            data={getUpcomingMovie}
            renderItem={ HorizontalComponent }
            keyExtractor={(item, index) => index}
            horizontal={true}
        />
  )
}

export default HorizontalScroll

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 300,
        marginHorizontal: 8,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        overflow: 'hidden',
    }
})