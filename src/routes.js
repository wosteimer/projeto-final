import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import Login from './pages/login'
import Main from './pages/main'
import ShowPdf from './pages/showPdf'

const Routes = createAppContainer(
    createSwitchNavigator({
        Login:{
            screen: Login
        },
        Main:{
            screen: Main
        },
        ShowPdf:{
            screen: ShowPdf
        }
    }, 
    {
        initialRouteName: "Login"
    })
)

export default Routes