import { Link, Navigate, useParams } from 'react-router-dom';
import AccountProfile from '../components/AccountProfile';
import AccountPlaces from '../components/AccountPlaces';
import { useUserContext } from './../contexts/User.Context.jsx';


const Account = () => {

    const { subpage } = useParams();
    const { user, ready } = useUserContext();

    const buttonClass = (button) => {
        let finalClass = "hover:bg-primary-400 rounded-full px-4 py-2 hover:text-white transition cursor-pointer";

        if (button === subpage) finalClass += " bg-primary-400 text-white";
        return finalClass;
    };

    if (!user && ready) return <Navigate to="/login" />;


    return (
        <section className='p-8'>
            <div className='max-w-7xl mx-auto flex-col gap-4 flex items-center'>
                <div className='flex gap-2'>
                    <Link to='/account/profile' className={buttonClass('profile')}>Perfil</Link>
                    <Link to='/account/bookings' className={buttonClass('bookings')}>Reservas</Link>
                    <Link to='/account/places' className={buttonClass('places')}>Lugares</Link>
                </div >


                {/* {subpage === 'profile' ? <AccountProfile></AccountProfile> : <></>} */}

                {/* ou */}
                {subpage === 'profile' && <AccountProfile />}
                {subpage === 'places' && <AccountPlaces />}

            </div >
        </section >
    );
};

export default Account;