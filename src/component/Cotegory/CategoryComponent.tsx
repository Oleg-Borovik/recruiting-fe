import React, {useEffect, useState} from 'react';
import {Category, User} from "../../type/typeProject";
import {UserComponent} from "../User/UserComponent";
import {instance} from "../../api/instance";

export function CategoryComponent() {
    const [category, setCategory] = useState<Category[]>([])
    const [users, setUsers] = useState<User[]>([])
    useEffect(() => {
        instance.get<Category[]>('/category/all').then(res => setCategory(res.data))
    }, [])
    const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        instance.get(`/user/category/${e.target.value}`).then(res => setUsers(res.data))
    }

    const getCategorySelect = () => {
        return <select onChange={onChangeSelect}>
            {category.map(it => <option key={it.category} value={it.id}>{it.category}</option>)}
        </select>
    }
    const getUsers = () => users.map(it => <UserComponent key={it.id} {...it}/>)

    return (
        <>
            <div>Категории:{getCategorySelect()}</div>
            <div>Пользователи:{getUsers()}</div>
        </>
    );
}