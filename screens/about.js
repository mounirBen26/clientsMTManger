import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WavyHeader from './wavyHeader'
const About = () => {
  return (
    <View style={styles.container}>
      <WavyHeader customStyles={styles.curyStyles}/>
      <Text style={{color:'white'}}>About</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  

  },
  curyStyles: {
    position: 'absolute',
    width: Dimensions.get('window').width,
  }
})