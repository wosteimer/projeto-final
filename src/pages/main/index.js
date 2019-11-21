import React from 'react'

import  SearchInput from '../../components/searchInput'
import  CheckBox from '../../components/checkBox'
import { Container } from './styles'


export default props => {
    return(
        <Container>
            <SearchInput placeHolder="Pesquisar"/>
            <CheckBox/>
        </Container>
    )
}


