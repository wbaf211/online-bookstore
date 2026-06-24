import React from "react";
import { Input } from "antd";
import { useController } from 'react-hook-form'

export const InputCom = (props) => {

    const { control, name, ...rest } = props

    const {
        field,
        fieldState: {error}
    } = useController({
        name,
        control
    });

    const handleChange = (e) => {
        field.onChange(e.target.value)
    }

    return (
        <div className={`ant-form-item ${error ? "ant-form-item-has-error" : ""}`}>
            <Input
                value={field.value}
                onChange={handleChange}
                {...rest}
            />
        </div>
    )
}