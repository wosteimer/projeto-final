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
    Logo,
    ErrorMessage
} from './styles'

import logoImage from '../../assets/logo.png'
import TextField from '../../components/textField'
import TextButton from '../../components/textButton'
import Button from '../../components/button'

import * as firebase from 'firebase'

export default props => {

    const [user, setUser] = useState({
        email: '',
        senha: ''
    })
    
    const [status, setStatus] = useState('login')
    const [errorMessage, setErrorMessage] = useState('')

    const [logoSize, setLogoSize] = useState(128)

    function emailChanged(value){
        const tempUser = { ...user }
        tempUser.email = value
        setUser(tempUser)
    }
    function senhaChanged(value){
        const tempUser = { ...user }
        tempUser.senha = value
        setUser(tempUser)
    }

    async function login(email, pass) {
        setStatus('loading')
        try {
            const userData = await firebase.auth().signInWithEmailAndPassword(user.email, user.senha);
            props.navigation.navigate('Main')
        } catch (error) {
            setStatus('error')
            setErrorMessage(error.toString())
        }

    }

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


        if(firebase.auth().currentUser){
            setStatus('loading')
            props.navigation.navigate('Main')
        }

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
                {status != 'loading' ?
                <ContentContainer>
                    {status == 'error' ?
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                    :
                    null}
                    <TextField placeHolder="Login" keyboardType="email-address" onChangeText={(value) => emailChanged(value)}/>
                    <TextField placeHolder="Senha" password={true} onChangeText={(value) => senhaChanged(value)}/>
                    <TextButton text="Esqueceu a senha?"/>
                    <Button 
                        text="entrar"
                        onPress={()=> login()}/>
                </ContentContainer> 
                :
                null
                }
            </Container>
        </TouchableWithoutFeedback>
    )


}