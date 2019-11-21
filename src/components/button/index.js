import React from 'react'

import { 
    Container,
    Text
} from './styles'

import {
    TouchableOpacity
}from 'react-native'
import { tsPropertySignature } from '@babel/types'

export default props => {
    return(
        <TouchableOpacity onPress={props.onPress}>
            <Container>
                <Text>{props.text}</Text>
            </Container>
        </TouchableOpacity>   
    )
}
