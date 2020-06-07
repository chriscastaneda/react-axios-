import React, { useState, useEffect } from 'react';
import * as authorRemote from '../remote/author.remote';
import { Author } from '../models/Author';
import './accounts.component.css'


export const AccountComponent: React.FC = ()=> {
    const [users, setUsers] = useState<Author[]>([]);

    //Hook HTTP into React lifecycle Meothd
    useEffect(()=> {
        authorRemote.getAllAuthors().then(author => {
            setUsers(author);
        });
    }, []); //dont re-render unless change in array
    
    return (
        <div>
            <header>
                <h2 id="accounts-header">Account Section </h2>
                <button  className="btn btn-success">Add Author</button>
            </header>

            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(u =>{
                        return(
                            <tr>
                                <th scope="row">{u.id}</th>
                                <td>{u.firstName}</td>
                                <td>{u.lastName}</td>
                                <td>{u.email}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};