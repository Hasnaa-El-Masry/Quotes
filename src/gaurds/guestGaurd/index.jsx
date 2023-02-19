import React, { useContext, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../store/use-context'

const GuestGaurd = ({ children }) => {

    const { token } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            
            navigate('/');

        }
    }, [token])

    return children;

}

export default GuestGaurd