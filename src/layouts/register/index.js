import { View, Text, Alert, SafeAreaView,Image,  TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import { FakeAPIUrl } from '../../helpers/apiAccessToken'
import { moderateScale } from 'react-native-size-matters'

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

  const registration = async () => {
        const res = await axios.post(`${FakeAPIUrl}/users/`, data)
        
        Alert.alert('Selamat', 'Akun telah dibuat', [
          {
            text: "OK", onPress: () => navigation.navigate('Login')
          }
        ])
  }

  return (
    <View>

      {/* Input */}
      <SafeAreaView>

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
            <Text>Sudah ada akun? klik disini!</Text>
        </TouchableOpacity>


    </View>
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
        top: moderateScale(120),
        left: moderateScale(55)
    },
    buttonText: {
        color: 'white'
    }, 
    login: {
        left: moderateScale(90),
        top: moderateScale(125)
    },
    image: {
      height: moderateScale(200),
      width: moderateScale(200),
      left: moderateScale(75),
      top: moderateScale(80)
    }
  })