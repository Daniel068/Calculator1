import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import style from './Style'
import { CalcContext } from './Context/CalcContext'



const Button = ({ value }) => {
  const {calc, setCalc} = useContext(CalcContext);
  
  //user click comma
  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
    });
  }
// user click C
const resetClick = () => {
  setCalc({ sign:'', num: 0, res: 0});
}
//user click number
const handleClickButton = ()  => {
  const numberString = value.toString()

  let numberValue;
  if(numberString === '0' && calc.num === 0){
    numberValue = '0'
  } else{
    numberValue = Number(calc.num + numberString) 
  }

  setCalc({
    ...calc,
    num: numberValue
  })
}
// User Click operation
const signClick = () =>{
  
  setCalc({
    sign: value,
    res: !calc.res && calc.num ? calc.num : calc.res,
    num: ''
  })
}
//User click equals
const equalsClick = () => {
  if(calc.res && calc.num){
    const math = (a, b, sign) => {
      const result = {
        '+' : (a, b) => a + b,
        '-' : (a, b) => a - b,
        'x' : (a, b) => a * b,
        '/' : (a, b) => a / b,
      }
      return result [sign](a , b)
  }
  
  setCalc({
    res: math(calc.res, calc.num, calc.sign),
    sign:'',
    num: calc.num
  })
}}
// User click persent
const percenClick = () => {
  setCalc({
    num:(calc.num / 100),
    res:(calc.res / 100),
    sign:'',
  })
}
// user click +- 
const invertClick = () => {
  setCalc({
    num: calc.num ? calc.num * -1 : 0,
    res: calc.res ? calc.res * -1 : 0,
    sign: ''
  })
}
  const handleBtnClick = () => {
    
    const results = {
      '.': commaClick,
      'C': resetClick,
      '/': signClick,
      'x': signClick,
      '-': signClick,
      '+': signClick,
      '=': equalsClick,
      '%': percenClick,
      '+-': invertClick,
    }
    if (results[value]){
      return results [value] ()
    } else{
      return handleClickButton()
    }
    
  }
  return (
    <View >
        <View style={{flexDirection:'row'}}>
            <View style={style.space2}></View>
            <TouchableOpacity onPress={handleBtnClick} >
            <View style={ style.Button }>
                    <Text style={style.btnTxt}>{value}</Text>
            </View>
            </TouchableOpacity>
            <View style={style.space2}></View>
        </View>
        <View style={style.space}></View>
    </View>

    
  )
}

export default Button