import React, {useEffect}from 'react'
import { StatusBar } from 'react-native'
import Routes from './routes'

import * as firebase from 'firebase'

export default function App(){
    
    if (!firebase.apps.length) {
        firebase.initializeApp({
            apiKey: "AIzaSyB5aJzKo0VjO5aQIx_AdUP2gLv43AutsLE",
            authDomain: "projeto-final-66a5e.firebaseapp.com",
            databaseURL: "https://projeto-final-66a5e.firebaseio.com",
            projectId: "projeto-final-66a5e",
            storageBucket: "projeto-final-66a5e.appspot.com",
            messagingSenderId: "528515052799",
            appId: "1:528515052799:web:df635e837a8c85378dc8ca"
        });        
    }

    return(
        <>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Routes/>
        </>
    )
}