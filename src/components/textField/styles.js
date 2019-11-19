import styled from 'styled-components/native'
import commonStyles from '../../commonStyle'

export const Container = styled.View`
    flex-direction: row;
    border-width: 1px;
    border-radius: 8px;
    margin-bottom: 24px;
    border-color: ${commonStyles.colors.onBackground};
    width: 100%;
    height: 56px;
    align-items: center;
    padding-right: 12;
`
export const PlaceHolder = styled.Text`
    position: absolute; 
    margin-left: 4;
    background: ${commonStyles.colors.background};
    padding-left: 4;
    padding-right: 4;
    font-family: Roboto; 
    font-size: 12;
    top: -10;
    color: ${commonStyles.colors.onBackground};
    
`