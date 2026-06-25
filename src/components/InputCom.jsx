import React from "react";
import { Input } from "antd";
import { useController } from 'react-hook-form'

export const InputCom = (props) => {

    const { control, name, ...rest } = props

    const {
        field,
    } = useController({
        name,
        control
    });

    const handleChange = (e) => {
        field.onChange(e.target.value)
    }

    return (
        <Input
            value={field.value}
            onChange={handleChange}
            {...rest}
        />
    )
}