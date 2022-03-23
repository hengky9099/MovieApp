import { StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image';
import { ImageUrl } from '../../helpers/apiAccessToken';
import { moderateScale } from 'react-native-size-matters';

const HorizontalScroll = ({data, navigation}) => {
    
    const HorizontalComponent = ({item, index}) => {
      return (
      <TouchableOpacity onPress={() => navigation.navigate('MovieDetail', {datas: item.id})} >
        <FastImage 
        style={styles.image} 
        source={{uri: `${ImageUrl}${item.poster_path}`, priority: FastImage.priority.fast}}
        resizeMode={FastImage.resizeMode.contain} />
      </TouchableOpacity>
      );
     } ;

    return (
        <FlatList
            data={data}
            renderItem={ HorizontalComponent }
            keyExtractor={(item, index) => index}
            horizontal={true}
        />
  )
}

export default HorizontalScroll

const styles = StyleSheet.create({
    image: {
      width: moderateScale(140),
      height: moderateScale(300),
      marginHorizontal: moderateScale(8),
      left: moderateScale(2),
      overflow: 'hidden',
    }
})