import { StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import FastImage from 'react-native-fast-image';

const DATA = [
    {
      id: 1,
      name: 'Cat',
      image: 'https://unsplash.it/400/400?image=1'
    },
    {
      id: 2,
      name: 'Dog',
      image: 'https://unsplash.it/400/400?image=2'
    },
    {
      id: 3,
      name: 'Chicken',
      image: 'https://unsplash.it/400/400?image=3'
    },
    {
      id: 4,
      name: 'Duck',
      image: 'https://unsplash.it/400/400?image=4'
    },
    {
      id: 5,
      name: 'Cow',
      image: 'https://unsplash.it/400/400?image=5'
    },
    {
      id: 6,
      name: 'Deer',
      image: 'https://unsplash.it/400/400?image=6'
    },
    {
      id: 7,
      name: 'Horse',
      image: 'https://unsplash.it/400/400?image=7'
    },
    {
        id: 8,
        name: 'Cat',
        image: 'https://unsplash.it/400/400?image=8'
      },
      {
        id: 9,
        name: 'Dog',
        image: 'https://unsplash.it/400/400?image=9'
      },
      {
        id: 10,
        name: 'Chicken',
        image: 'https://unsplash.it/400/400?image=10'
      },

 
  ];

  const List = ({ image, onPress, backgroundColor }) => (
    <TouchableOpacity onPress={{onPress}} style={backgroundColor}>
      <FastImage style={styles.image} source={{uri: 'https://images.unsplash.com/photo-1647120170310-513d71402e20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80', priority: FastImage.priority.high}} resizeMode={FastImage.resizeMode.contain} />
    </TouchableOpacity>
  );

const HorizontalScroll = () => {

    const [selectedId, setSelectedId] = useState(null);

    const render = ({ item }) => {
        
        return(
            <List 
              item={item}
              name={item.name}
              onPress={() => setSelectedId(item.id)}
            />
        )
    }

    return (
    <SafeAreaView>
        <FlatList
            data={DATA}
            renderItem={ render }
            keyExtractor={item => item.id}
            extraData = {selectedId}
            horizontal={true}
        />

    </SafeAreaView>
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