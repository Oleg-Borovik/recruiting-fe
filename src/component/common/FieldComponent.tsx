import React, {FC} from 'react';
interface Props {
    name: string
    value: string | null
    setValue: (value: string | null) => void
    type: string
}

export function FieldComponent({name, value = '', setValue, type}: Props) {
    return <label>
        {name}
        <input type={type} value={value!} onChange={(e) => setValue(e.target.value)}/>
    </label>
};
