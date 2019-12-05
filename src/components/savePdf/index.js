import React, { useState }from 'react'
import commonStyles from '../../commonStyle'

import TextField from '../textField'
import Button from '../button'
import { 
    Background,
    Container,
    Titulo
} from './styles'

import {
    TouchableWithoutFeedback,
    Modal,
    Text
}from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

export default props => {

    return(
        <Modal 
            onRequestClose={props.onCancel}
            visible={props.isVisible}
            animationType='slide'
            transparent={true}
            >
            <TouchableWithoutFeedback onPress={()=> props.onCancel()}>
                <Background>
                    <TouchableWithoutFeedback>
                        <Container>
                            <Titulo>Salvar em PDF</Titulo>
                            <TextField placeHolder='nome'/>
                            <Button text="salvar"/>
                        </Container>
                    </TouchableWithoutFeedback>
                </Background>
            </TouchableWithoutFeedback>
        </Modal>
    )

}

