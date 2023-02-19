import React from 'react'
import { useRouteError } from 'react-router-dom'
import Layout from '../components/layout'

const ErrorPage = () => {

    const error = useRouteError();

    return (
        <Layout>
            <h1 className='centered'>Oops! {error.status}</h1>
            <h2 className='centered'>{error.statusText || 'This page not found!'}</h2>
        </Layout>
    )
}

export default ErrorPage