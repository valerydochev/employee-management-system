import { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Search from "./components/Search"
import UserList from "./components/UserList"
import Pagination from "./components/Pagination"
import CreateUser from "./components/CreateUser"

function App() {
    const [showCreateUser, setShowCreateUser] = useState(false);

    const addUserClickHandler = () => {
      setShowCreateUser(true);
   } 

  return (
    <div>
      <Header />

        <main className="main">

            <section className="card users-container">
              <Search />

              <UserList />

              <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>

              <Pagination />

            </section>

            {showCreateUser && <CreateUser />}

          {/* User Details Modal */}
          {/* Create/Edit Form Modal */}
          {/* Delete Confirmation Modal */}

        </main>


      <Footer />
    </div>
  )
}

export default App
