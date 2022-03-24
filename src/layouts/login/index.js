import { Text, TouchableOpacity, ActivityIndicator, StyleSheet, SafeAreaView, TextInput, View, Alert, StatusBar } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import { FakeAPIUrl } from '../../helpers/apiAccessToken'
import { moderateScale } from 'react-native-size-matters'
import { Image } from 'react-native-elements'

const Login = ({ navigation }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false);

    const data = {
        username: username, //"mor_2314"
        password: password //"83r5^_"
    }

    const login = async () => {
        try {
            setLoading(true);
            const res = await axios.post(`${FakeAPIUrl}/auth/login`, data , {
                validateStatus: status => {
                    if (status < 201) {
                        Alert.alert('Selamat', 'Login Berhasil', [
                            {
                              text: "OK", onPress: () => navigation.navigate('Home')
                            }
                          ])
                    } else if(status === 401) {
                        Alert.alert(
                            "Warning",
                            "Username atau Password Salah!"
                          );
                    } else {
                        Alert.alert(
                            "Warning",
                            "Error"
                          );
                    }
                }
            })
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return (
          <View
            style={[styles.loadingContainer, styles.loadingHorizontal]}>
            <ActivityIndicator size="large" color="red" />
          </View>
        );
      }

    return (
    <View>

        <StatusBar backgroundColor='#f2f2f2' />

        {/* Input */}
        <SafeAreaView>

            <Image 
            style={styles.image} 
            source={require('../../assets/images/launcher.png')}
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
        </SafeAreaView>

        {/* button */}
        <TouchableOpacity style={styles.button} onPress={login}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* register */}
        <TouchableOpacity style={styles.register} onPress={() => navigation.navigate('Register')}>
            <Text>Belum ada akun? klik disini!</Text>
        </TouchableOpacity>

    </View>
    )
}

export default Login

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
    register: {
        left: moderateScale(90),
        top: moderateScale(130)
    },
    image: {
        height: moderateScale(200),
        width: moderateScale(200),
        top: moderateScale(40),
        left: moderateScale(75),
        overflow: 'visible'
        // top: moderateScale(80)
      },
      loadingContainer: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: 'black'

      },
      loadingHorizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
      }
  })