/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { auth } from '../_actions/user_actions';
import { useSelector, useDispatch } from "react-redux";

export default function (SpecificComponent, option, adminRoute = null) {
    function AuthenticationCheck(props) {

        let user = useSelector(state => state.user);
        const dispatch = useDispatch();

        useEffect(() => {
            //현재 상태를 알고 싶으면 인증 요청 보내기
            dispatch(auth()).then(response => {
                //상태에 로그인되지 않음
                if (!response.payload.isAuth) {
                    if (option) {
                        props.history.push('/login')
                    }
                    //상태에 로그인
                } else {
                    //관리자 페이지로 되어 있지만 관리자가 안으로 들어가고 싶어하지 않음
                    if (adminRoute && !response.payload.isAdmin) {
                        props.history.push('/')
                    }
                    //상태에 로그인했지만 페이지에 로그인 시도
                    else {
                        if (option === false) {
                            props.history.push('/')
                        }
                    }
                }
            })

        }, [])

        return (
            <SpecificComponent {...props} user={user} />
        )
    }
    return AuthenticationCheck
}


