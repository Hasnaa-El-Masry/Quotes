
import { useForm } from "react-hook-form";
import Card from '../UI/card';
import { Link } from 'react-router-dom';

const Signup = ({ onSignup, loading, error }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        onSignup(data)
    };

    return (

        <Card>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit(onSubmit)}>


                <div className="control">

                    <label htmlFor='firstName'>First Name</label>
                    <input  {...register("firstName", { required: true })} />
                    {errors.firstName && <span className='text-error'>Please enter your first name!</span>}

                </div>

                <div className="control">

                    <label htmlFor='lastName'>Last Name</label>
                    <input  {...register("lastName", { required: true })} />
                    {errors.lastName && <span className='text-error'>Please enter your last name!</span>}

                </div>

                <div className="control">

                    <label htmlFor='email'>Email</label>
                    <input  {...register("email", { required: true })} />
                    {errors.email && <span className='text-error'>Please enter your email!</span>}

                </div>

                <div className="control">

                    <label htmlFor='password'>Password</label>
                    <input  {...register("password", { required: true })} type='password'/>
                    {errors.password && <span className='text-error'>Please enter your password!</span>}

                </div>

                {error && <div className="alert-error">
                    <p>{error}</p>
                </div>}

                <div className="actions">
                    <button className='btn' type='submit'>{loading ? 'Submiting...' : 'Submit'}</button>
                </div>

                <div className='links'>
                    <Link to='../login'> Already Have an account!</Link>
                </div>
            </form>
        </Card>
    );
}

export default Signup;