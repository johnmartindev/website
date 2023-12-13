export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark-frosted">
        <div className="container-fluid">
          <button
            className="navbar-toggler ms-auto rounded-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0 d-flex">
              <li className="nav-item">
                <a className="nav-link p-1" aria-current="page" href="#">
                  <img src="./logo.svg" width="30px" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#intro-bg">
                  Intro
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills-bg">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects-bg">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-bg">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
