import React, {useState} from 'react';

interface Props {
    setLvl: (value: (string | null)) => void
}

const option = ['Junior', 'Middle', 'Senior']

export function LvlComponent(props: Props) {

    const [selectedOption, setSelectedOption] = useState('');
    const changeLvl = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value)
        props.setLvl(e.target.value)
        // debugger
    }
    return (
        <>
            <label>Уровень навыка
                <select onChange={changeLvl} value={selectedOption}>
                    <option disabled key='def' value='' >--Choose an option--</option>
                    {option.map(it => <option key={it} value={it}>{it}</option>)}
                </select>
            </label>
        </>
    );
}
