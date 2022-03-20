import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const Synopshis = () => {
  return (
    <View>
      <Text style={styles.title}>Synopshis</Text>
      <Text style={styles.paragraph}>Teks ini akan dibuat untuk menjelaskan alur cerita dari 
          filem ini dan akan sangat panjang sehingga sekarang aku
          lagi coba jika ini akan kebawh atau engga karena data 
          yang saya mau tidak bisa dikeluarkan menggunakan api 
      </Text>
    </View>
  )
}

export default Synopshis

const styles = StyleSheet.create({
    title: {
        fontSize: moderateScale(16),
        marginTop: moderateScale(10),
        fontWeight: 'bold',
        marginLeft: moderateScale(20),
        color: 'black'
    },
    paragraph: {
        fontSize: moderateScale(12),
        color: 'black',
        marginTop: moderateScale(10),
        marginLeft: moderateScale(20),
        width: moderateScale(300)
    }
})