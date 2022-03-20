import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import Routes from './routes/MainRoutes'




function App()  {

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
    
  )
}

export default App