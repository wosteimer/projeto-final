import React from 'react'

import { 
    Container,
    Text
} from './styles'

import {
    TouchableOpacity
}from 'react-native'

export default props => {
    return(
        <TouchableOpacity>
            <Container>
                <Text>{props.text}</Text>
            </Container>
        </TouchableOpacity>   
    )
}


