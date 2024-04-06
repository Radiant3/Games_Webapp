import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
    <nav class="navbar bg-dark" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">ICON</a>
        <div id="navbarNav">
          <ul id="navbar-nav">

            <li class="nav-item margin">
              <a aria-current="page" href="#"><Link to="/">Cool Games</Link></a>
            </li>

            <li class="nav-item margin">
              <a class="nav-link" href="#"><Link to="/Game">Tic-Tac-Toe</Link></a>
            </li>

            <li class="nav-item margin">
              <a class="nav-link" href="#"><Link to="/page2">Sudoku</Link></a>
            </li>

          </ul>
        </div>
      </div>
    </nav>


      <Outlet />
    </>
  )
};

export default Layout;