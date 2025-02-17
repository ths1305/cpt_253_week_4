import { useState } from 'react'
import { SignInButton } from './signIn'

export const Context = React.createContext();
export const Nav =()=>{

    const [signedIn, setSignedIn] = useState(false)
    return (
        <Context.Provider value={[signedIn, setsignedIn]}>
        <nav style={{top: 0, width: '100vh', display: 'flex', justifyContent: 'space-between', padding: '1rem'}}>
            <h1>{signedIn ? "Signed in" : "Signed out"}</h1>
            <SignInButton />
        </nav>
        </Context.Provider>
    );
}