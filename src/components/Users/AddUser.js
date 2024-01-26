import React, { useState } from 'react'
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
    const [enteredUserName,setEnteredUserName]=useState('')
    const [enteredAge,setEnteredAge]=useState('')
    const [error,setError]=useState()

    const AddUserHandler=(event)=>{
        event.preventDefault();
        if(enteredUserName.trim().length===0 || enteredAge.trim().length===0){
          setError({
            title:'Invalid Input',
            message:'Please enter a valid name and age(non-empty values).'
          })
          return;
        }
        if(+enteredAge<1){
          setError({
            title:'Invalid Age',
            message:'Please enter a valid age(>0).'
          })
          return;
        }
        props.onAddUser(enteredUserName,enteredAge)
       console.log(enteredUserName,enteredAge)
        setEnteredUserName('')
        setEnteredAge('')
    }
    const usernameChangeHandler=(event)=>{
      setEnteredUserName(event.target.value)
    }
    const ageChangehandler=(event)=>{
        setEnteredAge(event.target.value)
    }
    const errorHandler=()=>{
      setError(null)
    }
  return (
    <div>
     {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
    <form onSubmit={AddUserHandler}>
        <label htmlFor="username">Username:</label>
        <input type="text" id='username' value={enteredUserName} onChange={usernameChangeHandler}/>
        <label htmlFor="age">Age(Years):</label>
        <input type="number" id='age' value={enteredAge} onChange={ageChangehandler}/>
        <Button type='submit'>Add User</Button>
    </form>
    </Card>
    </div>
  )
}

export default AddUser