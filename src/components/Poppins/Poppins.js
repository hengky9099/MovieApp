import React from 'react'
import { Text, StyleSheet } from 'react-native'

const Poppins = ({type = 'Regular', children, colorText = 'black', size = 12, marginTop, marginBottom, marginLeft, marginRight, textalign, width, height}) => {
    
    const style = StyleSheet.create({
        text: {
            fontFamily: `Poppins-${type}`,
            color: colorText,
            fontSize: size,
            marginTop: marginTop,
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            width: width,
            height: height,
            marginRight: marginRight,
            textAlign: textalign
        },
    })
    
    
    return <Text style={style.text}>{children}</Text>
}


export default Poppins;

