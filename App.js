import { View, Text, FlatList, Switch } from 'react-native'
import React, {useContext, useState} from 'react'
import Wrapper from './src/components/wrapper'
import style from './src/components/Style'
import Screen from './src/components/Screen'
import ButtonBox from './src/components/ButtonBox'
import Button from './src/components/Button'
import CalcProvider from './src/components/Context/CalcContext'
import { ThemeContext } from './src/components/Context/ThemeContext'

const btnValue1 =
  ['C', '+-', '%', '/'];
const btnValue2 = 
  [7, 8, 9, 'x'];
const btnValue3 =
  [4, 5, 6, '-'];
const btnValue4 = 
  [1, 2, 3, '+'];
const btnValue5 = 
    [0, '.', '='];

export default function App() {
  
  return (
    
    <View style = {style.Wrapper} >
        <CalcProvider>
        <Screen />
        <Wrapper>

          
          
          <ButtonBox>
            {btnValue1.flat().map((btn, i) =>(
              <Button 
                value={btn}
                key={i}
              />
              
            ))}
          </ButtonBox>
          <ButtonBox>
            {btnValue2.flat().map((btn, i) =>(
              <Button 
                value={btn}
                key={i}
              />
            ))}
          </ButtonBox>
          <ButtonBox>
            {btnValue3.flat().map((btn, i) =>(
              <Button 
                value={btn}
                key={i}
              />
            ))}
          </ButtonBox>
          <ButtonBox>
            {btnValue4.flat().map((btn, i) =>(
              <Button 
                value={btn}
                key={i}
              />
            ))}
          </ButtonBox>
          <ButtonBox>
            {btnValue5.flat().map((btn, i) =>(
              <Button 
                value={btn}
                key={i}
              />
            ))}
          </ButtonBox>

        </Wrapper>
        
      </CalcProvider>
      
    </View>
    
  )
}