import { Link } from "react-router-dom";

const Nav = () => {
  // DONE: Add necessary code to display the navigation bar and link between the pages
  // const currentPage = useLocation().pathname;

  return (
    <header>
      <nav>
        <h1>
          <Link to="/">Candidate Search</Link>
        </h1>
        <ul className="nav">
          <li className="nav-item">
            <h2>
              <Link
                to="/"
                // className={currentPage === "/" ? "nav-link active" : "nav-link"}
              >
                Home
              </Link>
            </h2>
          </li>
          <li className="nav-item">
            <h2>
              <Link
                to="/potential"
                // className={
                // currentPage === "/potential" ? "nav-link active" : "nav-link"
                // }
              >
                Potential Candidates
              </Link>
            </h2>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
