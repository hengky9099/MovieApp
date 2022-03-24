import { View, Text, Alert, SafeAreaView,Image, ActivityIndicator , TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import { FakeAPIUrl } from '../../helpers/apiAccessToken'
import { moderateScale } from 'react-native-size-matters'
import { ScrollView } from 'react-native-gesture-handler'

const Registrasi = ({ navigation }) => {

  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const firstname = name.split(' ')[0]
  const lastname = name.split(' ')[1]

  const data = {
    email: email,
    username: username,
    password: password,
    name: {
      firstname: firstname,
      lastname: lastname
    },
    address:{
        city:'kilcoole',
        street:'7835 new road',
        number:3,
        zipcode:'12926-3874',
        geolocation:{
            lat:'-37.3159',
            long:'81.1496'
        }
    },
    phone:'1-570-236-7033'
  }

  const emailValidate = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

  const checkEmail = email => {
    if (email) {
      if (emailValidate.test(email)) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }
  
  const hurufBesar = /[A-Z]/
  const hurufKecil = /[a-z]/
  const angka = /[0-9]/
  
  const isValidPassword = (givenPassword) => {
      if (typeof(givenPassword) === "string") {
          if (givenPassword.length < 8) {
              return false //+ ", karena jumlah password kurang, yaitu hanya " + givenPassword.length
          } else if(!hurufBesar.test(givenPassword)){
              return false //+ ", karena tidak ada huruf besar"
          } else if(!hurufKecil.test(givenPassword)){
              return false //+ ", karena tidak ada huruf kecil"
          } else if(!angka.test(givenPassword)){
              return false //+ ", karena tidak ada angka"
          } else{
              return true
          }
      } else {
          return "ERROR: Invalid Type Data" 
      }
  }

  const registration = async () => {
    try {
      if (checkEmail(email) && isValidPassword(password)) {
        const res = await axios.post(`${FakeAPIUrl}/users`, data)
        console.log(res);
        
        Alert.alert('Selamat', 'Registrasi Berhasil!', [
          {
            text: "OK", onPress: () => navigation.navigate('Login')
          }
        ])
      } else if (!checkEmail(email) && isValidPassword(password)) {
        return Alert.alert('Warning', `Invalid Email`)
      } else if (checkEmail(email) && !isValidPassword(password)) {
        return Alert.alert('Warning', `Invalid Password`)
      } else {
        return Alert.alert('Warning', `Invalid Password & Email`)
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ScrollView>
      <StatusBar backgroundColor='#f2f2f2' />

      {/* Input */}
      <SafeAreaView style={styles.container}>

        <Image 
        style={styles.image} 
        source={require('../../assets/images/launcher.png')}
        />

        <TextInput
          style={styles.value}
          onChangeText={(value) => setEmail(value)}
          value={email}
          placeholder="Email"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.value}
          onChangeText={(value) => setUsername(value)}
          value={username}
          placeholder="Username"
        />
        <TextInput
          style={styles.value}
          onChangeText={(value) => setPassword(value)}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.value}
          onChangeText={(value) => setName(value)}
          value={name}
          placeholder="Name"
        />
      </SafeAreaView>

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={registration}>
        <Text style={styles.buttonText}>Registrasi</Text>
      </TouchableOpacity>

        {/* register */}
        <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.textlogin}>Sudah ada akun? klik disini!</Text>
        </TouchableOpacity>
    </ScrollView>
  )
}

export default Registrasi

const styles = StyleSheet.create({
    value: {
        width: moderateScale(280),
        top: moderateScale(120),
        left: moderateScale(35),
        marginBottom: moderateScale(20),
        borderStyle: 'solid',
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(10),
        borderColor: 'gray'
    },
    button: {
        width: moderateScale(240),
        height: moderateScale(45),
        backgroundColor: 'red',
        borderRadius: moderateScale(10),
        justifyContent: 'center',
        alignItems: 'center',
        top: moderateScale(600),
        left: moderateScale(55),
        position: 'absolute',
        zIndex: 1
    },
    buttonText: {
        color: 'white'
    }, 
    login: {
        left: moderateScale(90),
        top: moderateScale(650),
        position: 'absolute',
        zIndex: 1
    },
    image: {
      height: moderateScale(200),
      width: moderateScale(200),
      left: moderateScale(75),
      top: moderateScale(80)
    },
    container: {
      height: moderateScale(1000),
      // color: 'red'
    }
  })