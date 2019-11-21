import styled from 'styled-components/native'
import commonStyles from '../../commonStyle'

export const Container = styled.View`
    flex-direction: row;
    border-width: 1px;
    border-radius: 8px;
    margin-bottom: 24px;
    border-color: ${commonStyles.colors.onBackground};
    height: 56px;
    align-items: center;
    padding-right: 12;
    padding-left: 12;
    margin-right: 16;
    margin-left: 16;
`