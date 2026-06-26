import React from "react";
import './style.css'
import { InputCom } from "../components";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router'
import { ShoppingCartOutlined } from '@ant-design/icons';
import logo from '../images/logo.svg'

export const HeaderHorizontal = () => {

    const {
        control
    } = useForm();

    const navigate = useNavigate();

    return (
        <header>
            <img src={logo} alt="logo" className="interactive" style={{ height: "80px" }} onClick={() => navigate("/")}/>
            <div></div>
            <div className="nav-right">
                <InputCom
                    control={control}
                    name="search"
                    style={{
                        height: "40px",
                        flex: "2",
                        borderRadius: "15px"
                    }}
                />
                <ShoppingCartOutlined className="interactive" style={{height: "40px", flex: "1"}} onClick={() => navigate("/checkout")}/>
            </div>
        </header>
    )
}