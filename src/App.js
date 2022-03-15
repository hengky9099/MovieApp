import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import Home from './layouts/home/Home'



function App()  {

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <View>
      <Home />
    </View>
    
  )
}

export default App