import React from 'react'
import commonStyles from '../../commonStyle'

import { 
    Container,
    Text
} from './styles'

import {
    TouchableOpacity
}from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default props => {
    return(
        <TouchableOpacity style={{position: "absolute", bottom: 24, right: 16}}onPress={props.onPress}>
            <Container>
                <Icon name={props.icon} size={24} color={commonStyles.colors.onPrimary}/>
            </Container>
        </TouchableOpacity>   
    )
}
