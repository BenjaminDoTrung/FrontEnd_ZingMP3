import React from 'react';
import axios from "axios";
import Login from "../component/Login";

const LoginService = () => {
    return new Promise(resolve => {
        resolve(<Login></Login>)
    });
};

// export default LoginService;