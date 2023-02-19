import React, { useContext } from 'react'
import { AuthContext } from '../../store/use-context'

const AuthGaurd = ({ children }) => {
    const { token } = useContext(AuthContext);
    return (
        <>
            {
                !token ? <p>Not Authorized</p> : children
            }
        </>
    )
}

export default AuthGaurd