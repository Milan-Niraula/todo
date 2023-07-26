import React, { useEffect, useState } from 'react'
import { account } from '../appwrite/appwriteConfig'
import '../App.css'
import { useNavigate, Link } from 'react-router-dom'
import TodoForm from './TodoForm'
import Todos from './Todos'


function Profile() {
    const navigate = useNavigate()
    const [userDetails, setUserDetails] = useState()

    useEffect(() => {
        const getData = account.get()
        getData.then(
            function (response) {
                setUserDetails(response)
                // console.log(userDetails)
            },
            function (error) {
                console.log(error);
            }
        )
    }, [])

    const handleLogout = async () => {
        try {
            await account.deleteSession("current")
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {userDetails ? (
                <>
                    <div className="min-h-min max-w-7xL mx-auto shadow-md bg-slate-200	">
                        <div>
                            <p className='text-xl mx-10'>Hello, {userDetails.name.charAt(0).toUpperCase() + userDetails.name.slice(1)}!! </p>
                            <p className='text-xl mx-10'></p>
                        </div>
                        <div>
                            <button className="block mx-auto shadow bg-red-800 hover:bg-red-700 focus:shadow-outline focus:outline-none text-white text-lg py-1 px-6 mb-15 rounded"
                                onClick={handleLogout}
                            >Logout</button>
                        </div>
                    </div>
                    <div className="my-4 text-center">
                        <h2 className='text-2xl text-amber-950	'>Save your Tasks to TODO List.</h2>
                    </div>
                    <TodoForm />
                    <Todos />
                </>
            ) : (
                <p className='mt-4'>
                    Please login to get your profile{" "}
                    <Link to="/">
                        <span className="bg-blue-300 p-2 cursor-pointer text-white">
                            Login
                        </span>
                    </Link>
                </p>
            )
            }
        </>
    )
}

export default Profile
