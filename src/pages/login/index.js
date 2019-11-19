import React, { useState, useEffect}from 'react'

import {
    TouchableWithoutFeedback,
    Keyboard,
    Dimensions,
    Image
} from 'react-native'

import {
    Container,
    LogoContainer,
    ContentContainer,
    Logo 
} from './styles'

import logoImage from '../../assets/logo.png'
import TextField from '../../components/textField'
import TextButton from '../../components/textButton'
import Button from '../../components/button'


export default props => {

    const [logoSize, setLogoSize] = useState(128)

    const keyboardDidShow = e =>{
        const newSize = Dimensions.get('window').height - e.endCoordinates.height - 48
        if (newSize - 304 < 64){
            setLogoSize(0)
        }else if (newSize - 304 < 128){
            setLogoSize(newSize - 304)
        }else{
            setLogoSize(128)
        }
    }
    const keyboardDidHide = e =>{
        setLogoSize (128)
    }
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide)
        return () => {
            keyboardDidShowListener.remove()
            keyboardDidHideListener.remove()
        }
    }, [])
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container behavior="height">
                <LogoContainer>
                    <Image style={{width: logoSize, height: logoSize, marginBottom: 24}} source={logoImage}/>
                </LogoContainer>
                <ContentContainer>
                    <TextField placeHolder="Login" keyboardType="email-address"/>
                    <TextField placeHolder="Senha" password={true}/>
                    <TextButton text="Esqueceu a senha?"/>
                    <Button text="entrar"/>
                </ContentContainer>
            </Container>
        </TouchableWithoutFeedback>
    )
}