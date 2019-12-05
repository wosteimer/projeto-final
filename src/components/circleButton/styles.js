import styled from 'styled-components/native'
import commonStyles from '../../commonStyle'

export const Container = styled.View`
    width: 56px;
    height: 56px;
    justify-content: center;
    align-items: center;
    border-radius: 28px;
    background-color: ${commonStyles.colors.primary}

`
export const Text = styled.Text`
    text-transform: uppercase;
    font-weight: bold
    font-family: ${commonStyles.fontFamily};
    color: ${commonStyles.colors.onPrimary}
`