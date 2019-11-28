import React, { useState }from 'react'
import commonStyles from '../../commonStyle'

import CheckBox from '../checkBox'

import { 
    Container,
    Titulo,
    Local,
    Desc,
    TituloContainer,
    ContentContainer
} from './styles'

import {
    TouchableWithoutFeedback
}from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import checkBox from '../checkBox'


export default props => {
    const [status, setStatus] = useState(false)

    function press(){
        if(status){
            setStatus(false)
        }else{
            setStatus(true)
        }
    }
    return(
        <TouchableWithoutFeedback onPress={()=> press()}>
           
            {status ? 
                <Container>
                    <TituloContainer>
                        <Icon name="keyboard-arrow-down" size={24} color={commonStyles.colors.onBackground}/>
                        <Titulo>{props.titulo}</Titulo>
                        <CheckBox/>
                    </TituloContainer>
                    <ContentContainer>
                        <Local>{props.local}</Local>
                        <Desc>{props.desc}</Desc>
                    </ContentContainer>
                </Container>
                :
                <Container>
                    <TituloContainer>
                        <Icon name="keyboard-arrow-right" size={24} color={commonStyles.colors.onBackground}/>
                        <Titulo>{props.titulo}</Titulo>
                        <CheckBox/>
                    </TituloContainer>
                </Container>
            }
       
        </TouchableWithoutFeedback>
    )

}

