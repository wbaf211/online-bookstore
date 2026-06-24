import React from "react";
import './style.css'
import { InputCom } from "../components";
import { useForm } from "react-hook-form";
import { ShoppingCartOutlined } from '@ant-design/icons';

export const HeaderHorizontal = () => {

    const {
        control
    } = useForm();

    return (
        <header>
            <img src="" alt="logo"/>

            <div className="nav-right">
                <InputCom
                    control={control}
                    name="search"
                />
                <ShoppingCartOutlined />
            </div>
        </header>
    )
}