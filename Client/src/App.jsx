import Header from "./components/Header"
import Footer from "./components/Footer"
import Search from "./components/Search"
import Table from "./components/Table"
import Pagination from "./components/Pagination"

function App() {

  return (
    <div>
      <Header />

        <main className="main">

            <section className="card users-container">
              <Search />

              <Table />

              <button className="btn-add btn">Add new user</button>

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
