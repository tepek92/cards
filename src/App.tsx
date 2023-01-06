import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Error404 from "./components/ErrorPages/Error404";
import {CreateNewPassword} from "./components/CreateNewPassword/CreateNewPassword";
import {DemoStand} from "./components/DemoStand/DemoStand";
import {Header} from "./components/Header/Header";
import {Login} from "./components/Login/Login";
import {Profile} from "./components/Profile/Profile";
import {Registration} from "./components/Registration/Registration";
import {ResetPassword} from "./components/ResetPassword/ResetPassword";
import {PATH} from "./common/constans/path";

const App = () => {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<Navigate to={PATH.DEMO_STAND} />} />
            <Route path={PATH.DEMO_STAND} element={<DemoStand />} />
            <Route path={PATH.PROFILE} element={<Profile />} />
            <Route path={PATH.LOGIN} element={<Login />} />
            <Route path={PATH.REGISTRATION} element={<Registration />} />
            <Route path={PATH.RESET_PASSWORD} element={<ResetPassword />} />
            <Route path={PATH.CREATE_NEW_PASSWORD} element={<CreateNewPassword />} />
            <Route path={PATH.ERROR_404} element={<Error404 />} />
            <Route path="*" element={<Navigate to={PATH.ERROR_404} />} />
        </Routes>
    </div>
  );
}

export default App;
