import React from 'react'
import Button from "react-bootstrap/Button"

export const Home = (props)=> (
    
   <table className="table table-dark">
       <thead>
           <tr>
               <th scope="col">id</th>
               <th scope="col">FirstName</th>
               <th scope="col">LastName</th>
               <th scope="col">Username</th>
               <th scope="col">Status</th>
               <th scope="col">Created Date</th>
           </tr>
       </thead>
       <tbody>
           {props.users.length > 0 ? (
                props.users.map(user=> (
                    <tr key= {user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.userName}</td>
                            <td>{user.status}</td>
                            <td>{user.createdDate}</td>
                        <td>
                            <Button className="button muted-button" onClick={() => props.deleteUser(user.id)}>Delete
                            </Button>
                        </td>
                    </tr>
                ))    
                ): (
                    <tr>
                        <td colSpan= {3}>No users </td>
                    </tr>
                )}
        
       </tbody>
   </table>
)