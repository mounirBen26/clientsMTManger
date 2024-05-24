import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AboutSvg from './aboutSvg'
const About = () => {
  return (
    <View style={styles.container}>
      <AboutSvg customStyles={styles.curyStyles}/>
      <Text style={{color:'black', fontSize:20, marginTop:80, fontFamily:'TitilliumWeb_400Regular'}}>Developed By: Hacene Benlazreg</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4e4F4',
    alignItems: 'center',
  

  },
  curyStyles: {
    position: 'absolute',
    width: Dimensions.get('window').width,
  }
})