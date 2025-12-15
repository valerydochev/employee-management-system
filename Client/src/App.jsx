import Header from "./components/Header"
import Footer from "./components/Footer"
import Search from "./components/Search"
import UserList from "./components/UserList"
import Pagination from "./components/Pagination"

function App() {

  return (
    <div>
      <Header />

        <main className="main">

            <section className="card users-container">
              <Search />

              <UserList />

              <Pagination />

            </section>

          {/* User Details Modal */}
          {/* Create/Edit Form Modal */}
          {/* Delete Confirmation Modal */}

        </main>


      <Footer />
    </div>
  )
}

export default App
