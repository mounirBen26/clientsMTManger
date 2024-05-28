import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AboutSvg from './aboutSvg'
const About = () => {
  return (
    <View style={styles.container}>
      <AboutSvg customStyles={styles.curyStyles}/>
      <View style={styles.text}>
      <Text>Developed By: Hacene Benlazreg</Text>
      <Text >Mail: mounir.bmh@hotmail.fr</Text>
      <Text>Version: 1.1.2</Text>
      </View>
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
  text:{
    alignItems: 'center',
    marginTop: 200,
    marginBottom: 3,
    fontFamily:'TitilliumWeb_400Regular',
  },
  curyStyles: {
    position: 'absolute',
    width: Dimensions.get('window').width,
  }
})