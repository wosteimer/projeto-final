import React, { useState }from 'react'
import commonStyles from '../../commonStyle'

import { 
    Container,
    PlaceHolder
} from './styles'

import {
    TouchableWithoutFeedback
}from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

export default props => {
    const [value, setValue] = useState(props.value)

    function press(){
        if(value){
            setValue(false)
            if(props.onChecked){
                props.onChecked()
            }
        }else{
            setValue(true)
            if(props.onUnchecked){
                props.onUnchecked()
            }
        }
        if(props.press){
            props.press()
        }
    }
    return(
        <TouchableWithoutFeedback onPress={()=> press()}>
            <Container>
                {
                value ?
                    <Icon name="check-box" color={commonStyles.colors.primary} size={24}/>
                    :
                    <Icon name="check-box-outline-blank" color={commonStyles.colors.onBackground} size={24}/>
                }          
                {props.placeHolder != undefined ?
                    <PlaceHolder>{props.placeHolder}</PlaceHolder>
                    :
                    null
                }
            </Container>
        </TouchableWithoutFeedback>
    )

}

