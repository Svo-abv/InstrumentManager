import { observer } from 'mobx-react';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '..';
import SignInSide from '../components/SignInSide';

const Auth = observer(() => {

    const { user } = useContext(Context);

    const navi = useNavigate();

    //   useEffect(() => {
    if (user.isAuth) {
        navi("/panel");
    }
    //    });

    return (
        <SignInSide />
    );
});

export default Auth;