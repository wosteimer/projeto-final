import styled from 'styled-components/native'

import commonStyles from '../../commonStyle'

export const Container = styled.View`
    padding-top: 16;
    flex:1
`
export const CheckBoxContainer = styled.View`
    padding-left: 28;
    padding-bottom: 24;
    background-color: ${commonStyles.colors.background};
    border-color: ${commonStyles.colors.onBackground};
    border-bottom-width: 1;
`