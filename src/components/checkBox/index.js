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

    return(
        <Container>
            <Icon name="check-box-outline-blank" size={24} color={commonStyles.colors.onBackground}/>
            <PlaceHolder>filtrar marcados</PlaceHolder>
        </Container>
    )

}

