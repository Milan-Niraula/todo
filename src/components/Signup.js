import React, { useState } from 'react'
import { account } from '../appwrite/appwriteConfig'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'


function Signup() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })
    // signup 
    const signupUser = async (e) => {
        e.preventDefault()


        const promise = account.create(
            uuidv4(),
            user.email,
            user.password,
            user.name
        );
        promise.then(function (response) {
            console.log(response)
            navigate("/")
        },
            function (error) {
                console.log(error);
            }
        )
    }

    return (
        <>
            <div className="bg-sky-100 h-screen overflow-hidden flex items-center justify-center">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                        <label htmlFor='name'> Name </label>
                        <input
                            id='name'
                            name="name"
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            placeholder="Full Name"
                            onChange={(e) => {
                                setUser({
                                    ...user,
                                    name: e.target.value
                                })
                            }}
                        />
                        <label htmlFor='name'> Email </label>
                        <input
                            id='email'
                            name="email"
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            placeholder="Enter your Email"
                            onChange={(e) => {
                                setUser({
                                    ...user,
                                    email: e.target.value
                                })
                            }}
                        />
                        <label htmlFor='name'> password </label>
                        <input
                            id='password'
                            name="password"
                            type="password"
                            autoComplete='current-password'
                            required
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            placeholder="Enter Your Password"
                            onChange={(e) => {
                                setUser({
                                    ...user,
                                    password: e.target.value
                                })
                            }}
                        />

                        <button className="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded"
                            onClick={signupUser}
                        >Sign in</button>
                    </div>

                    <div className="text-grey-dark mt-6">
                        Already have an account? <a href='/' className='text-pink-900'>login</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
