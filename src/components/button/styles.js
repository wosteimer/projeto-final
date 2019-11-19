import styled from 'styled-components/native'
import commonStyles from '../../commonStyle'

export const Container = styled.View`
    width: 100%;
    height: 56px;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;
    border-radius: 8;
    background: ${commonStyles.colors.primary}

`
export const Text = styled.Text`
    text-transform: uppercase;
    font-weight: bold
    font-family: ${commonStyles.fontFamily};
    color: ${commonStyles.colors.onPrimary}
`