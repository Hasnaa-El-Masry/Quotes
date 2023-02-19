import { useForm } from "react-hook-form";
import Card from '../UI/card';
import { Link } from 'react-router-dom';

const Login = ({ onLogin, loading, error }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        onLogin(data);
    };

    return (

        <Card>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="control">

                    <label htmlFor='email'>Email</label>
                    <input  {...register("email", { required: true })} />
                    {errors.email && <span className='text-error'>Please enter your email!</span>}

                </div>

                <div className="control">

                    <label htmlFor='password'>Password</label>
                    <input type='password'  {...register("password", { required: true })} />
                    {errors.password && <span className='text-error'>Please enter your password!</span>}

                </div>

                {error && <div className="alert-error">
                    <p>{error}</p>
                </div>}

                <div className="actions">
                    <button className='btn' type='submit'>{loading ? 'Submiting...' : 'Submit'}</button>
                </div>

                <div className='links'>
                    <Link to='/signup'>Don't have an account!</Link>
                </div>
            </form>
        </Card>
    );
}

export default Login;