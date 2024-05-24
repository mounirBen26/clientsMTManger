import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const WavyHeader = ({customStyles}) => {
  return (
    <View style={customStyles}>
      <View style={{backgroundColor:"#31CECE", height:160}}>
        <Svg
        height="60%"
        width="100%"
        viewBox="0 0 1440 320"
        style={{ position: 'absolute', top: 130 }}
        >
            <Path 
            fill={"#31CECE"}
            d="M0,128L48,122.7C96,117,192,107,288,112C384,117,480,139,576,165.3C672,192,768,224,864,240C960,256,1056,256,1152,240C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
        </Svg>

      </View>
    </View>
  )
}

export default WavyHeader

const styles = StyleSheet.create({})