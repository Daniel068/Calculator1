import { View, Text } from 'react-native'
import React, {useContext} from 'react'
import style from './Style'
import { CalcContext } from './Context/CalcContext'


const Screen = () => {
    const {calc} = useContext(CalcContext)
  return (
    <View style={style.Screen}>
      <Text max={70} mode='single' style={style.ScreenText}>{calc.num}</Text>
      <View style={style.ResView}>
        <Text style={style.ResText}>{calc.res}</Text>
      </View>
    </View>
  )
}

export default Screen