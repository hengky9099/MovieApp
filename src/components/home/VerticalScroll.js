import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image';
import { FlatList } from 'react-native'
import { moderateScale } from 'react-native-size-matters';
import {ImageUrl} from '../../helpers/apiAccessToken';

const VerticalScroll = ({ data, navigation }) => {

    const VerticalComponent = ({ item, index }) => {
        return (
        <View style={styles.Verticalcontainer}>
          <FastImage 
          style={styles.Verticalimage} 
          source={{
              uri: `${ImageUrl}${item.poster_path}`,
              priority: FastImage.priority.fast,
          }}
          resizeMode={FastImage.resizeMode.contain}
          />
            <View style={styles.textcontainer}>
                <Text style={styles.Verticaltitle}>{item.title}</Text>
                <Text numberOfLines={4} style={styles.Verticalsubtitle}>{item.overview}</Text>
                <TouchableOpacity  style={styles.Verticalbutton} onPress={() => navigation.navigate('MovieDetail', {datas: item.id})}>
                    <Text style={styles.Verticalbuttontext}>Show More</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
      };

  return (
    <View>
        <FlatList
        data={data}
        renderItem={VerticalComponent}
        keyExtractor={(item, index) => index}
        />
    </View>
  )
}

export default VerticalScroll

const styles = StyleSheet.create({
    Verticalcontainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: moderateScale(200),
        marginBottom: moderateScale(14),
        left: moderateScale(5)
      },
      Verticalimage: {
        width: moderateScale(120),
        height: moderateScale(140),
        marginBottom: moderateScale(5)
      },
      Verticaltextcontainer: {
        flexDirection: 'column',
      },
      Verticaltitle: {
        fontStyle: 'italic',
        color: 'white',
        fontWeight: 'bold',
        fontSize: moderateScale(16)
      },
      Verticalsubtitle: {
        width: moderateScale(200),
        color: 'white',
        marginVertical: moderateScale(5)
      },
      Verticalbutton: {
        backgroundColor: 'red',
        width: moderateScale(90),
        height: moderateScale(40),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: moderateScale(10),
        marginTop: moderateScale(5)
      },
      Verticalbuttontext: {
        color: 'white'
      },

})