import React, { useState, useEffect } from 'react';
import * as authorRemote from '../remote/author.remote';
import { Author } from '../models/Author';
import './accounts.component.css';
import { Modal, Button, Form } from 'react-bootstrap';


export const AccountComponent: React.FC = ()=> {
    const [users, setUsers] = useState<Author[]>([]);

    const[inputFirstName, setInputFirstName] = useState('');
    const[inputLastName, setInputLastName] = useState('');
    const[inputEmail, setInputEmail] = useState('');

    const [modalVisible, setModalVisible] = useState(false);

    //Hook HTTP into React lifecycle Meothd
    useEffect(()=> {
        authorRemote.getAllAuthors().then(author => {
            setUsers(author);
        });
    }, []); //dont re-render unless change in array

    //Submit button payload
    const addUser = async ()=> {
        const payload ={
            id: undefined,
            firstName: inputFirstName,
            lastName: inputLastName,
            email: inputEmail
        };

        //send request through remote axios
        await authorRemote.creatAuthor(payload);
        setInputFirstName(''); //clear inputs
        setInputLastName('');
        setInputEmail('');
        setModalVisible(false); //close modal
        loadAuthors();
    };

    //Return view from submit request
    const loadAuthors = ()=> {
        authorRemote.getAllAuthors().then(author => {
            setUsers(author);
        });
    };
    
    return (
        <div>
            <header>
                <h2 id="accounts-header">
                    Account Section 
                    <button  
                        className="btn btn-success"
                        onClick={() => setModalVisible(true)}>
                            Add Author
                    </button>
                </h2>
                
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


            <Modal show={modalVisible} onHide={() => setModalVisible(false)}>
                <Modal.Header>
                    <Modal.Title>New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>First Name:</Form.Label>
                            <Form.Control type="text" value={inputFirstName} onChange={(e) => setInputFirstName(e.target.value) } />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Last Name:</Form.Label>
                            <Form.Control type="text" value={inputLastName} onChange={(e) => setInputLastName(e.target.value) } />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email Address:</Form.Label>
                            <Form.Control type="text" value={inputEmail} onChange={(e) => setInputEmail(e.target.value) } />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setModalVisible(false)}>Close</Button>
                    <Button onClick={() => addUser()}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

