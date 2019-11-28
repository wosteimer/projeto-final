import styled from 'styled-components/native'
import commonStyles from '../../commonStyle'

export const Container = styled.View`
    padding-left: 28;
    background-color: ${commonStyles.colors.background};
    border-color: ${commonStyles.colors.onBackground};
    border-bottom-width: 1;
`
export const TituloContainer = styled.View`
    height: 56;
    padding-right: 28;
    align-items: center;
    flex-direction: row;
`
export const ContentContainer = styled.View`
    padding-left: 24;
    padding-bottom: 12;
`

export const Titulo = styled.Text`
    align-self : center;
    margin-left: 12px;
    font-size: 20px;
    flex: 1;
    color: ${commonStyles.colors.onBackground}
`
export const Local = styled.Text`
    opacity: 0.8;
    margin-left: 12px;
    margin-bottom: 12px
    font-size: 16px;
    color: ${commonStyles.colors.onBackground}
`   
export const Desc = styled.Text`
    opacity: 0.7;
    margin-left: 12px;
    font-size: 16px;
    color: ${commonStyles.colors.onBackground}
`