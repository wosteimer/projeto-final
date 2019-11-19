import React, { useState }from 'react'
import commonStyles from '../../commonStyle'

import { 
    Container,
    PlaceHolder
} from './styles'

import {
    TextInput,
    Text,
    StyleSheet,
    Animated,
    TouchableWithoutFeedback
}from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

export default props => {

    const focusStyle = {
        borderColor: commonStyles.colors.primary, 
        borderWidth: 2
    }

    const noFocusStyle = {
        borderColor: commonStyles.colors.onBackground, 
        borderWidth: 1
    }

    
    const [textInputValue, settextInputValue] = useState(props.text)
    const [borderStyle, setBorderStyle] = useState(noFocusStyle)
    const [placeHolderFonteSize, setPlaceHolderFonteSize] = useState(new Animated.Value(props.text != undefined ? 
                                                                                        12 : 16))
    const [placeHolderTopPosition, setPlaceHolderTopPosition] = useState(new Animated.Value(props.text != undefined ? 
                                                                                            -10 : 15))
    const [placeHolderColor, setplaceHolderColor] = useState(commonStyles.colors.onBackground)

    const [visibility, setVisibility] = useState(true)
    const [icon, setIcon] = useState("visibility")

    function focusChanged(focus){
        if (focus){
            setBorderStyle(focusStyle)
            setplaceHolderColor(commonStyles.colors.primary)
            Animated.parallel([
                Animated.timing(
                    placeHolderFonteSize,
                    {
                        toValue: 12,
                        duration: 300
                    }
                ),
                Animated.timing(
                    placeHolderTopPosition,
                    {
                        toValue: -10,
                        duration: 300
                    }
                )
                ]).start()
        }else if (textInputValue == "" || textInputValue == undefined){
            setBorderStyle(noFocusStyle)
            setplaceHolderColor(commonStyles.colors.onBackground)
            Animated.parallel([
                Animated.timing(
                    placeHolderFonteSize,
                    {
                        toValue: 16,
                        duration: 300
                    }
                ),
                Animated.timing(
                    placeHolderTopPosition,
                    {
                        toValue: 15,
                        duration: 300
                    }
                )
            ]).start()
        }else{
            setBorderStyle(noFocusStyle)
            setplaceHolderColor(commonStyles.colors.onBackground)
        }
    }

    function changeVisibility(){
        if(visibility){
            setVisibility(false)
            setIcon("visibility-off")
        }else{
            setVisibility(true)
            setIcon("visibility")
        }
    }
    if(!props.password){
        return(
            <Container style={{borderColor: borderStyle.borderColor, 
                            borderWidth: borderStyle.borderWidth}}>
                <Animated.Text style={{
                    position: 'absolute',
                    marginLeft: 4,
                    backgroundColor: commonStyles.colors.background,
                    paddingLeft: 4,
                    paddingRight: 4,
                    fontFamily: 'Roboto', 
                    fontSize: placeHolderFonteSize,
                    top: placeHolderTopPosition,
                    color: placeHolderColor
            }}>{props.placeHolder}</Animated.Text>
                <TextInput onBlur= {() =>{ focusChanged(false) } }
                        onFocus={() =>{ focusChanged(true)  } }
                        onChangeText={value => settextInputValue(value)}
                        style={{fontFamily: "roboto", fontSize: 16, paddingLeft: 8, flex: 1}}
                        keyboardType={props.keyboardType}>{textInputValue}</TextInput>

            </Container>
    )
    }else{
        return(
            <Container style={{borderColor: borderStyle.borderColor, 
                               borderWidth: borderStyle.borderWidth}}>
                <Animated.Text style={{
                    position: 'absolute',
                    marginLeft: 4,
                    backgroundColor: commonStyles.colors.background,
                    paddingLeft: 4,
                    paddingRight: 4,
                    fontFamily: 'Roboto', 
                    fontSize: placeHolderFonteSize,
                    top: placeHolderTopPosition,
                    color: placeHolderColor
            }}>{props.placeHolder}</Animated.Text>
                <TextInput onBlur= {() =>{ focusChanged(false) } }
                           onFocus={() =>{ focusChanged(true)  } }
                           onChangeText={value => settextInputValue(value)}
                           style={{fontFamily: "roboto", fontSize: 16, paddingLeft: 8, flex: 1}}
                           keyboardType={props.keyboardType}
                           secureTextEntry={visibility}>{textInputValue}</TextInput>
                <TouchableWithoutFeedback onPress={() => changeVisibility()}>
                    <Icon name={icon} size={24} color={commonStyles.colors.onBackground}/>
                </TouchableWithoutFeedback>
            </Container>
        )
    }
}

