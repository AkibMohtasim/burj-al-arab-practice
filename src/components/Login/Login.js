import React, { useContext } from 'react';
import useAuth from '../../hooks/useContext';




const Login = () => {
    const {user, handleGoogleSignIn, logOut} = useAuth();
    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
            {user.email && <div>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <br />
                <img src={user.photo} alt="" srcSet="" />
            </div>}

            <button onClick={logOut}>Log out</button>
        </div>
    );
};

export default Login;