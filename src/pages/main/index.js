import React from 'react'

import  SearchInput from '../../components/searchInput'
import  CheckBox from '../../components/checkBox'
import  ItemBox from '../../components/itemBox'
import { Container, CheckBoxContainer } from './styles'

import { FlatList } from 'react-native'

export default props => {
    return(
        <Container>
            <SearchInput placeHolder="Pesquisar"/>
            <CheckBoxContainer>
                <CheckBox placeHolder="filtrar marcados"/>
            </CheckBoxContainer>
            <ItemBox titulo="mesa" local="lab1" desc="bla bla bla"/>
            <ItemBox titulo="mesa" local="lab1" desc="bla bla bla"/>
            <ItemBox titulo="mesa" local="lab1" desc="bla bla bla"/>
            <ItemBox titulo="mesa" local="lab1" desc="bla bla bla"/>
            <FlatList/>
        </Container>
    )
}


