import { useState, useEffect } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Search from "./components/Search"
import UserList from "./components/UserList"
import Pagination from "./components/Pagination"
import CreateUserModal from "./components/CreateUserModal"

function App() {
    const [users, setUsers] = useState([]);
    const [showCreateUser, setShowCreateUser] = useState(false);

    useEffect(() => {
       fetch('http://localhost:3030/jsonstore/users')
       .then(response => response.json())
       .then(result => {
          setUsers(Object.values(result));
       })
       .catch((err) => alert(err.message));
    }, []);

    const addUserClickHandler = () => {
      setShowCreateUser(true);
   } 

   const closeUserModalHandler = () => {
      setShowCreateUser(false);
   };

   const addUserHandler = (event) => {
      event.preventDefault();

      const formData = new FormData(event.target);

      const {country, city, street, streerNumber, ...userData}= Object.fromEntries(formData);
      userData.address = {
        country,
        city,
        street,
        streerNumber,
      };

      userData.createdAt = new Date().toISOString();
      userData.updatedAt = new Date().toISOString();
        
      fetch("http://localhost:3030/jsonstore/users", {
          method: "POST",
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(userData)
      })
      .then(response => response.json())
      .then(result => {
        console.log(result);
      })
      

   }

  return (
    <div>
      <Header />

        <main className="main">

            <section className="card users-container">
              <Search />

              <UserList users={users} />

              <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>

              <Pagination />

            </section>

            {showCreateUser && 
            <CreateUserModal 
              onClose={closeUserModalHandler} 
              onSubmit={addUserHandler}
             />
             }

          {/* User Details Modal */}
          {/* Create/Edit Form Modal */}
          {/* Delete Confirmation Modal */}

        </main>


      <Footer />
    </div>
  )
}

export default App
