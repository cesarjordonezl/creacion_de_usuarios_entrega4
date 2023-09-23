import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

  const [infoUpdate, setInfoUpdate] = useState()
  const [closeForm, setCloseForm] = useState(true)

  const baseUrl = 'https://users-crud.academlo.tech'
  const [users, getUsers, createUser, deleteUser, updateUser ] = useFetch(baseUrl, setCloseForm)

  useEffect ( () => {
    getUsers ('/users')
  },[])

  console.log(users)

  const handleOpenForm = () => {
    setCloseForm(false)
  }
  
  return (
  <div className='App' >
     <h1> Users Crud </h1>
        <button onClick={handleOpenForm} className='formuser__btn' >Open Form</button>
       < FormUser
          createUser= {createUser} 
          infoUpdate={infoUpdate}
          updateUser={updateUser}
          setInfoUpdate={setInfoUpdate}
          closeForm={closeForm}
          setCloseForm={setCloseForm}
          
          />
          <div>
            { 
            users?.map(user => (
              <UserCard 
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setInfoUpdate={setInfoUpdate}
              handleOpenForm={handleOpenForm}
               />

            ))
            }
          </div>
    </div>)
  
}

export default App
