import { createBrowserRouter } from 'react-router-dom'

import QouteDetails from "../pages/quote-details";
import Qoutes from "../pages/quotes";
import NewQuote from "../pages/new-quote";
import Root from "../pages/root";
import Comments from '../components/comments';
import ErrorPage from '../pages/404';
import LoadComments from '../components/comments/loadBtn';
import Login from '../pages/login';
import Signup from '../pages/signup';
import AuthGaurd from '../gaurds/authGaurd';
import GuestGaurd from '../gaurds/guestGaurd';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            
            {
                index: true,
                element: <Qoutes />,
            },
            {
                path: 'qoutes/:id/*',
                element: <QouteDetails />,
                children: [
                    {
                        path: '',
                        element: <LoadComments />
                    },
                    {
                        path: 'comments',
                        element: <Comments />
                    }
                ]
            },
            {
                path: 'new-qoute',
                element: <AuthGaurd><NewQuote /></AuthGaurd>,
            },
            {
                path: 'login',
                element: <GuestGaurd>
                    <Login />
                </GuestGaurd>,
            },
            {
                path: 'signup',
                element: <GuestGaurd>
                    <Signup />
                </GuestGaurd>,
            }

        ]
    }
])
