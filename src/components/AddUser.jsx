import React from 'react'
import { useState} from 'react'
import {Button} from 'react-bootstrap'

export const AddUser = (props) => {

    const initialFormState = {id:null, firstName: '', lastName: '', userName: '', status:'', createdDate:''}
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = (event)=> {
        console.log(event)
        const {name, value} = event.target
        setUser(values => ({...values, [name]: value}))
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log('its work')
        const nameInput = e.target.firstName.value
        console.log(nameInput)
        if (!user.firstName || !user.lastName || !user.userName) return alert('Please enter the inputs');
          props.addUsers(user)
          setUser(initialFormState)
        }

  return (
    <div className="container">
      <form onSubmit= {handleSubmit}>
        <div className="form-group">
                <label className="col-sm-2 col-form-label" >First Name</label>
                <div className="col-sm-10">
            <input className="form-control" type="text" name="firstName" value={user.firstName} onChange={handleInputChange} />
                </div>
                <label className="col-sm-2 col-form-label" >Last Name</label>
                <div className="col-sm-10">
            <input className="form-control" type="text" name="lastName" value= {user.lastName} onChange={handleInputChange} />
                </div>
                <label className="col-sm-2 col-form-label" >User Name</label>
                <div className="col-sm-10">
            <input className="form-control" type="text" name="userName" value= {user.userName} onChange={handleInputChange} />
                </div>
                <label className="col-sm-2 col-form-label" >Status</label>
                <div className="col-sm-10">
            <input className="form-control" type="text" name="status" value={user.status} onChange={handleInputChange} />
                </div>
                <label className="col-sm-2 col-form-label" >Create Date</label>
                <div className="col-sm-10">
            <input className="form-control" type="date" name="createdDate" value={user.createdDate} onChange={handleInputChange} />
            </div>
            <Button type="submit">Submit </Button>

        </div>
    </form>
    </div>
  )
}
