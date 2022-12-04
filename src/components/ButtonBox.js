import { View, Text } from 'react-native'
import React from 'react'
import style from './Style'

const ButtonBox = ({children}) => {
  return (
    <View style= {style.ButtonBox}>
      <Text>{children}</Text>
    </View>
  )
}

export default ButtonBox