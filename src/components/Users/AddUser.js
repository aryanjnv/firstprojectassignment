import React, { useState,useRef } from 'react'
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {

    const nameInputRef=useRef();
    const ageInputRef=useRef();
    const collegeInputRef=useRef();
   
    const [error,setError]=useState()

    const AddUserHandler=(event)=>{
        event.preventDefault();
        const enteredName=nameInputRef.current.value
        const enteredUserAge=ageInputRef.current.value
        const enteredCollegeName=collegeInputRef.current.value
        if(enteredName.trim().length===0 || enteredUserAge.trim().length===0 || enteredCollegeName.trim().length===0 ){
          setError({
            title:'Invalid Input',
            message:'Please enter a valid name ,college name and age(non-empty values).'
          })
          return;
        }
        if(+enteredUserAge<1){
          setError({
            title:'Invalid Age',
            message:'Please enter a valid age(>0).'
          })
          return;
        }
        props.onAddUser(enteredName,enteredUserAge,enteredCollegeName)
        nameInputRef.current.value=''
        ageInputRef.current.value=''
        collegeInputRef.current.value=''
       console.log(enteredName,enteredUserAge,enteredCollegeName)
       
    }
  
    const errorHandler=()=>{
      setError(null)
    }
  return (
    <Wrapper>
     {error && <ErrorModal 
     title={error.title} 
     message={error.message} 
     onConfirm={errorHandler}/>}
    <Card className={classes.input}>
    <form onSubmit={AddUserHandler}>
        <label htmlFor="username">Username:</label>
        <input type="text" 
        id='username' 
        ref={nameInputRef}/>
       
        <label htmlFor="age">Age(Years):</label>
        <input type="number" 
        id='age' 
        ref={ageInputRef}/>
        
         <label htmlFor="college">College Name:</label>
        <input type="text" 
        id='college' 
        ref={collegeInputRef}/>
        <Button type='submit'>Add User</Button>
    </form>
    </Card>
    </Wrapper>
  )
}

export default AddUser