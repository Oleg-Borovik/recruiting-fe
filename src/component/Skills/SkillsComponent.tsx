import React from 'react';
import s from './skill.module.css'
import {Skills} from "../../type/typeProject";

interface Props {
    skills: Skills[]
}

export function SkillsComponent(props: Props) {

    const createInputs = () => {
        return props.skills.map((it, i) =>
            <div key={it.skill + it.id}>
                <label key={it.skill}>
                    <input className='input' type={"checkbox"} value={it.id}/>
                    {it.skill}
                </label>
            </div>
        )
    }
    return (
        <div className={s.div}>Перечень техналогий: {createInputs()}</div>
    );
}
