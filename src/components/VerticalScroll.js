import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import FastImage from 'react-native-fast-image';
import Poppins from '../components/Poppins/Poppins'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { moderateScale } from 'react-native-size-matters';

const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },    
    {
      id: "5694a0f-3da1-471f-bd96-14557df1e29d72",
      title: "Forth Item",
    },
];

const List = ({ item, onPress}) => (
    <View onPress={onPress} style={styles.container}>
      <FastImage style={styles.image} source={{
          uri: 'https://images.unsplash.com/photo-1647120170310-513d71402e20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80',
          priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.contain}
      />
        <View style={styles.textcontainer}>
            <Text style={styles.title}>Spiderman No Way Back Home</Text>
            <Text style={styles.subtitle}>Subtitle lorem ipsum is hengky nanti bisa buka perusahaan besar</Text>
            <TouchableOpacity style={styles.button}>
                <Text>Show More</Text>
            </TouchableOpacity>
        </View>
    </View>
  );

const VerticalScroll = () => {
    const [selectedId, setSelectedId] = useState(null);

    const render = ({ item }) => {
    
        return (
          <List
            item={item}
            onPress={() => setSelectedId(item.id)}
          />
        );
      };

  return (
    <View>
        <FlatList
        data={DATA}
        renderItem={render}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
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