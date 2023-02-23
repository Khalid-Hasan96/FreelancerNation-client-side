import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import './Registration.css';

const Registration = () => {
    const { providerSignIn, createUser, updateUserProfile } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const password = form.password.value;

        const name = firstName + lastName;

        console.log(name, email, password)

    }
    return (
        <div className='regi-background'>
            <div className="py-10" >
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row w-10/12 lg:w-10/12 backdrop-blur-md bg-white/30  rounded-xl mx-auto shadow-lg overflow-hidden">
                        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" >
                            <h1 className="text-black text-3xl mb-3">Welcome</h1>
                            <div>
                                <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse aliquam varius rutrum purus maecenas ac <Link to='#' className="text-green-400 hover:text-green-500 font-semibold">Learn more</Link></p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 py-16 px-12">
                            <h2 className="text-3xl mb-4">Register</h2>
                            <p className="mb-4">
                                Create your account. It’s free and only take a minute
                            </p>
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-5">
                                    <input name='firstName' type="text" placeholder="Firstname" className="border border-gray-400 py-1 px-2" />
                                    <input name='lastName' type="text" placeholder="Lastname" className="border border-gray-400 py-1 px-2" />
                                </div>
                                <div className="mt-5">
                                    <input name='email' type="text" placeholder="Email" className="border border-gray-400 py-1 px-2 w-full" />
                                </div>
                                <div className="mt-5">
                                    <input name='password' type="password" placeholder="Password" className="border border-gray-400 py-1 px-2 w-full" />
                                </div>

                                <div className="mt-5">
                                    <input type="checkbox" className="border border-gray-400" />
                                    <span>
                                        I accept the <Link to='#' className="text-green-400 hover:text-green-500 font-semibold">Terms of Use</Link> &  <Link to='#' className="text-green-400 hover:text-green-500 font-semibold">Privacy Policy</Link>
                                    </span>
                                </div>
                                <div className="mt-5">
                                    <button className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500 ">Register Now</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Registration;