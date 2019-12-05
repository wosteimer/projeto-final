import React, { useState }from 'react'
import commonStyles from '../../commonStyle'

import { 
    Container,
} from './styles'

import {
    TextInput,
    TouchableWithoutFeedback
}from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import { statement } from '@babel/template'

export default props => {

    const focusStyle = {
        borderColor: commonStyles.colors.primary, 
        borderWidth: 2
    }

    const noFocusStyle = {
        borderColor: commonStyles.colors.onBackground, 
        borderWidth: 1
    }

    
    const [textInputValue, settextInputValue] = useState(props.text)
    const [borderStyle, setBorderStyle] = useState(noFocusStyle)

    const [visibility, setVisibility] = useState(true)
    const [icon, setIcon] = useState("visibility")

    function focusChanged(focus){
        if (focus){
            setBorderStyle(focusStyle)
        }else{
            setBorderStyle(noFocusStyle)
        }
    }

    function changeVisibility(){
        if(visibility){
            setVisibility(false)
            setIcon("visibility-off")
        }else{
            setVisibility(true)
            setIcon("visibility")
        }
    }
    function changeText(value){
        settextInputValue(value)
        if(props.onChangeText){
            props.onChangeText(value)
        }
    }


    if(!props.password){
        return(
            <Container style={{borderColor: borderStyle.borderColor, 
                            borderWidth: borderStyle.borderWidth}}>
                <Icon name="search" size={24} color={commonStyles.colors.onBackground}/>
                <TextInput onBlur= {() =>{ focusChanged(false) } }
                        placeholder={props.placeHolder}
                        onFocus={() =>{ focusChanged(true)  } }
                        onChangeText={value => changeText(value)}
                        style={{fontFamily: "roboto", fontSize: 16, paddingLeft: 8, flex: 1}}
                        keyboardType={props.keyboardType}>{textInputValue}</TextInput>

            </Container>
        )
    }
}

