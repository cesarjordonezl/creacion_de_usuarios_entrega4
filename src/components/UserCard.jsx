const UserCard = ({ user, deleteUser, setInfoUpdate, handleOpenForm }) => {

    const handleDelete = () => {
      deleteUser('/users', user.id)
    }

    const handleEdit = () => {
      setInfoUpdate(user)
      handleOpenForm()
    }
  
    return (
      <div className="user-column">
      <article>
        <h2>#{`${user.id} ${user.first_name} ${user.last_name}`}</h2>
        <hr />
        <ul>
          <li><span>Email: </span><span>{user.email}</span></li>
          <li><span>Birthday: </span><span>{user.birthday}</span></li>
        </ul>
        <hr />
        <footer>
        <button onClick={handleDelete}><i className='bx bx-trash'></i></button>
        <button onClick={handleEdit}><i className='bx bxs-edit' ></i></button>
        </footer>
      </article>
      </div>
    )
  }
  
  export default UserCard