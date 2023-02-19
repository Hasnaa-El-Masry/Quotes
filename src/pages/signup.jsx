import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupForm from '../components/signup'
import { useHttp } from '../hooks/use-http';
import { signup } from '../lib/authApi';

const Signup = () => {

  const { sendRequest, status, error } = useHttp(signup);
  const navigate = useNavigate();

  useEffect(() => {

    if (status === 'completed' && !error) {

      navigate('/login')
    }

  }, [status, error,navigate])

  const signupHandler = (data) => {
    sendRequest(data)
  }

  return (
    <SignupForm onSignup={signupHandler} loading={status==='pending'} error={error}/>
  )
}

export default Signup