import React, {useEffect, useState} from 'react';
import {FieldComponent} from "../common/FieldComponent";
import {LvlComponent} from "../Lvl/LvlComponent";
import {AboutComponent} from "../About/AboutComponent";
import {SkillsComponent} from "../Skills/SkillsComponent";
import s from './form.module.css'
import {Skills} from "../../type/typeProject";
import {instance} from "../../api/instance";

export function FormComponent() {

    useEffect(() => {
        const getData = async () => {
            const {data} = await instance.get<Skills[]>('/skills')
            setDataSkills(data)
        }
        getData()
    }, [])
    const [fido, setFido] = useState<string | null>(null)
    const [previousPlace, setPreviousPlace] = useState<string | null>(null)
    const [position, setPosition] = useState<string | null>(null)
    const [level, setLevel] = useState<string | null>(null)
    const [salary, setSalary] = useState<string | null>(null)
    const [dataSkills, setDataSkills] = useState<Skills[]>([])
    const [about, setAbout] = useState('')

    const submit = (event: React.SyntheticEvent) => {

        // @ts-ignore
        const arr = [...document.querySelectorAll('input[class=input]:checked')].map(it => Number(it.value))
        // @ts-ignore
        instance.defaults.headers['Content-Type'] = 'application/json';

        instance.post('/user',
            JSON.stringify({
                fido,
                position,
                previousPlace,
                level,
                salary,
                about,
                skills: dataSkills.filter(it => arr.includes(it.id))
            })).then(res => {
            alert("Резюме отправлено")
        }).catch(e => {
            alert("Что то пошло не так:  " + e.message)
        })
        event.preventDefault()
    }
    return (
        <form onSubmit={submit} className={s.form}>
            <FieldComponent name='FIO' value={fido} setValue={setFido} type='text'/>
            <FieldComponent name='Предыдущее место работы' value={previousPlace} setValue={setPreviousPlace}
                            type='text'/>
            <FieldComponent name='Желаемая должность' value={position} setValue={setPosition} type='text'/>
            <FieldComponent name='Желаемая зарплата' value={salary} setValue={setSalary} type='number'/>
            <LvlComponent setLvl={setLevel}/>
            <SkillsComponent skills={dataSkills}/>
            <AboutComponent setAbout={setAbout}/>
            <input type="submit"/>
        </form>
    );
}