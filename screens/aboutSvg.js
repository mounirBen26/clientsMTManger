import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const AboutSvg = ({customStyles}) => {
  return (
    <View style={customStyles}>
      <View style={{backgroundColor:"#60c7ea", height:140}}>
        <Svg
        height="60%"
        width="100%"
        viewBox="0 0 1440 320"
        style={{ position: 'absolute', top: 130 }}
        >
            <Path 
            fill={"#60c7ea"}
            d="M0,288L1440,96L1440,0L0,0Z"
            />
        </Svg>

      </View>
    </View>
  )
}

export default AboutSvg

const styles = StyleSheet.create({})