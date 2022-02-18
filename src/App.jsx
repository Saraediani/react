import React from "react";
import {Home} from './components/Home';
import {AddUser} from './components/AddUser';
import { useState} from 'react'
import {Button, Modal, CloseButton} from "react-bootstrap"

import './App.css';

function App() {
  let usersData = [{
    id: "1",
    createdDate: "2021-01-06T00:00:00.000Z",
    status: "En validation",
    firstName: "Mohamed",
    lastName: "Taha",
    userName: "mtaha",
},

{
    id: "2",
    createdDate: "2021-07-25T00:00:00.000Z",
    status: "Validé",
    firstName: "Hamid",
    lastName: "Orrich",
    userName: "horrich",
},

{
    id: "3",
    createdDate: "2021-09-15T00:00:00.000Z",
    status: "Rejeté",
    firstName: "Rachid",
    lastName: "Mahidi",
    userName: "rmahidi",
}]

  const [users, setUsers] = useState(usersData)
  
  const addUsers = user => {
    user.id = users.length + 1;
    setUsers([...users, user])
  }

  const deleteUser = id => {
    console.log(id)
    setUsers(users.filter(user => user.id !== id))
  }
  
  const [showModal, setShow] = useState(false)
  const handleShow = (e)=> {
    e.preventDefault()
    console.log('modal clicked')
    setShow(true)
  } 
  
  const handleClose = () => setShow(false)

  return (
    <div className="App">
      <h1> CRUD APP </h1>
      <div className= "flex-row">
    <div className="flex-large">

        <div>
          <Button  onClick= {handleShow}>Add User</Button>
          <Modal show={showModal} onHide={handleClose}>
          <CloseButton type="button" className="btn-danger" onClick= {handleClose}>X</CloseButton>
          <h2 className="text-center">Add user</h2>
          <AddUser addUsers={addUsers}/>
          </Modal>
        </div>
  
    </div>
    <div className="flex-large">
        <h2>View all users</h2>
        <Home users={users} deleteUser={deleteUser} />
    </div>
  </div>

</div>
  );
}

export default App;
