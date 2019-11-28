import styled from 'styled-components/native'
import commonStyles from '../../commonStyle'

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: ${commonStyles.colors.background};
`
export const PlaceHolder = styled.Text`
    margin-left: 12px;
    font-size: 16px;
    color: ${commonStyles.colors.onBackground}
`