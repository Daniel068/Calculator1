import { View, Text } from 'react-native'
import React from 'react'
import style from './Style'

export default function Wrapper({children}) {
  return (
    <View
     style = {style.wrapper2}
    >
      <Text>{children}</Text>
    </View>
  )
}