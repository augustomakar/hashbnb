import { useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom';
import { useUserContext } from './../contexts/User.Context'


const AccountProfile = () => {

    const { user, setUser } = useUserContext()
    const [redirect, setRedirect] = useState(false)

    const logout = async () => {

        try {
            const { data } = await axios.post('/users/logout')
            console.log(data)
            setUser(null)
            setRedirect(true)

        } catch (error) {
            alert(JSON.stringify(error))
        }

    }


    if (redirect) return <Navigate to='/' />

    if (!user) return <></>


    return (
        <div className='flex flex-col gap-4 items-center'>
            <p>logado como {user?.name} ({user?.email})</p>
            <button onClick={logout} className='bg-primary-400 rounded-full px-4 py-2 text-white transition min-w-44 cursor-pointer'>Logout</button>
        </div>
    )
}

export default AccountProfile
