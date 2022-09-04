import React from 'react';
import {Skills, User} from "../../type/typeProject";
import s from './user.module.css'

export const UserComponent = (props: User) => {

    const getSkills = (skills: Skills[]) => skills.map(it => it.skill).join("  ")


    return (
        <div className={s.div}>
            <div>FIDO: {props.fido}</div>
            <div>Salary: {props.salary}</div>
            <div>Level: {props.level}</div>
            <div>Position: {props.position}</div>
            <div>Skills: {getSkills(props.skills)}</div>
        </div>
    );
};