import styled from 'styled-components/native'
import commonStyles from '../../commonStyle'

export const Background = styled.View`
    flex: 1;
    align-items: stretch;
    justify-content: center;
    background-color: rgba(0, 0 ,0 , 0.7);
    padding: 16px
`
export const Container = styled.View`
    padding: 24px;
    padding-bottom: 0px;
    background-color: white;
`
export const Titulo = styled.Text`
    align-self : center;
    margin-bottom: 24px;
    font-size: 20px;
    color: ${commonStyles.colors.onBackground}
`