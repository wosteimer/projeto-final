import styled from 'styled-components/native'
import commonStyles from '../../commonStyle'

export const Container = styled.View`
    padding-left: 28;
    padding-bottom: 24;
    flex-direction: row;
    align-items: center;
    background-color: ${commonStyles.colors.background};
    border-color: ${commonStyles.colors.onBackground};
    border-bottom-width: 1;
`
export const PlaceHolder = styled.Text`
    margin-left: 12px;
    font-size: 16px;
    color: ${commonStyles.colors.onBackground}
`