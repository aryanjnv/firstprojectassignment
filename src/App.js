import logo from './logo.svg';
import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import { useState } from 'react';

function App() {
  const [userList,setUserList]=useState([])
  const addUserHandler=(uName,uAge,uClg)=>{
     setUserList((prevUserList)=>{
      return [...prevUserList,{name:uName,age:uAge,college:uClg,id:Math.random().toString()}]
     })
    // console.log(userList)
  }

  
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList}/>
    
    </div>
  );
}

export default App;