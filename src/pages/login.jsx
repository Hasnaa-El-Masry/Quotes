import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/login';
import { useHttp } from '../hooks/use-http';
import { login } from '../lib/authApi';
import { AuthContext } from '../store/use-context';

const Login = () => {

  const { sendRequest, status, error, data } = useHttp(login);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {

    if (status === 'completed' && !error) {
      auth.login(data);
      navigate('/');
    }

  }, [status, error])

  const loginHandler = (data) => {
    sendRequest(data)
  }

  return (
    <LoginForm onLogin={loginHandler} loading={status === 'pending'} error={error} data={data} />
  );

}

export default Login