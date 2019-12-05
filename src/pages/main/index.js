import React, { useState, useEffect } from 'react'

import  SearchInput from '../../components/searchInput'
import  CheckBox from '../../components/checkBox'
import  ItemBox from '../../components/itemBox'
import  CircleButton from '../../components/circleButton'
import  SavePdf from '../../components/savePdf'
import { Container, CheckBoxContainer } from './styles'

import { FlatList, Text } from 'react-native'

import * as firebase from 'firebase'

export default props => {
    const [searchText, setSearchText] = useState('')
    const [hiddenChecked, setHiddenChecked] = useState(false)
    const [data, setData] = useState([])
    const [visibleData, setVisibleData] = useState([])

    const [saveVisible, setSaveVisible] = useState(false)

    useEffect(() =>{
        firebase.database().ref('/data/' + firebase.auth().currentUser.uid).on('value', snapshot => {
            let tempData = []   
            snapshot.forEach(item => {
                tempData.push(item.toJSON())
            })
            setData(tempData)
        })
    }, [])

    useEffect(() => {
        filter(searchText)
    },[data, hiddenChecked, searchText])

    function filter(value){
        let newData = [...data]
        newData = data.filter(item => {
            const objAtual = Object.values(item)
            return objAtual.reduce((acumulador, valorAtual)=>{
                const temp = valorAtual.toString() 
                if(temp.indexOf(value) >= 0){
                    return acumulador + 1
                }
                return acumulador
            }, 0)    
        })

        if(hiddenChecked){
            newData = newData.filter(item => !item.value)
        }
        setVisibleData(newData)
    }

    function changeValue(id){
        const tempData = [...data]
        tempData.forEach(item =>{
            if(item.id === id){
                item.value = !item.value
            }
        })
        setData(tempData)
        firebase.database().ref('/data/' + firebase.auth().currentUser.uid).set(data)
    }
    
    function hiddenCheckedPress(){
        setHiddenChecked(!hiddenChecked)
    }

    function closeSave(){
        setSaveVisible(false)
    }

    return(
        <Container>
            <SearchInput placeHolder="Pesquisar" onChangeText={ value => setSearchText(value) }/>
            <CheckBoxContainer>
                <CheckBox placeHolder="filtrar marcados" press={() => hiddenCheckedPress()} value={hiddenChecked}/>
            </CheckBoxContainer>
            <FlatList
                data={visibleData}
                renderItem={({ item }) => <ItemBox {... item} press={() => changeValue(item.id)}/>}
                keyExtractor={item => item.id}
            />
            <CircleButton icon="picture-as-pdf" onPress={() => setSaveVisible(true)}/>
            <SavePdf isVisible={saveVisible} onCancel={() => closeSave()}/>
        </Container>
    )
}


