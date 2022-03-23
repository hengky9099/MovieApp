// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import FastImage from 'react-native-fast-image'
// import { moderateScale } from 'react-native-size-matters'
// import { ImageUrl } from '../../helpers/apiAccessToken'

// const ArtistCard = ({ cast }) => {
//   return (
//     <View style={styles.container}>
//         <FastImage 
//          style={styles.image} 
//          source={{uri: `${ImageUrl}${cast.profile_path}`, priority: FastImage.priority.fast}}
//          resizeMode={FastImage.resizeMode.contain}
//         />
//         <Text style={styles.name}></Text>
//     </View>
//   )
// }

// export default ArtistCard

// const styles = StyleSheet.create({
    // container: {
    //     width: moderateScale(100),
    //     height: moderateScale(180),
    //     marginLeft: moderateScale(20),
    //     marginTop: moderateScale(20),
    //     borderRadius: 10,
    //     backgroundColor: 'black'

//     },
//     image: {
        // width: moderateScale(100),
        // height: moderateScale(150)
//     },
//     name: {
        // textAlign: 'center',
        // color: 'white',
        // fontSize: moderateScale(12)
//     }
// })