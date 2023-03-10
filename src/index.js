import ReactDOM from 'react-dom/client';

import 'react-toastify/dist/ReactToastify.css';
import './index.scss';
import './toastify.css';

import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { AuthProvider } from './store/use-context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>

    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
    
    <ToastContainer />
</>
);
