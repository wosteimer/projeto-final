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
    const [value, setValue] = useState(false)
    const [iconStyle, setIconStyle] = useState({name:"check-box-outline-blank", color: commonStyles.colors.onBackground})

    function press(){
        if(value){
            setIconStyle({name:"check-box-outline-blank", color: commonStyles.colors.onBackground})
            setValue(false)
        }else{
            setIconStyle({name:"check-box", color: commonStyles.colors.primary})
            setValue(true)
        }
    }
    return(
        <TouchableWithoutFeedback onPress={()=> press()}>
            <Container>
                <Icon {...iconStyle} size={24}/>
                {props.placeHolder != undefined ?
                    <PlaceHolder>{props.placeHolder}</PlaceHolder>
                    :
                    null
                }
            </Container>
        </TouchableWithoutFeedback>
    )

}

