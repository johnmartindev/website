export default function Projects() {
  return (
    <>
      <div className="page-section center-vertically" id="projects">
        <div
          className="page-section-fore text-light"
          style={{ marginTop: -400 }}
        >
          <h1>Projects</h1>
          <h3 className="subtitle">Some recent work.</h3>
        </div>
      </div>
      <div
        className=""
        style={{
          bottom: 250,
          position: "relative",
          width: "100vw",
          zIndex: 1,
          height: 40,
          marginBottom: -40,
        }}
      >
        <div className="col-md-6 offset-md-3">
          <a href="#contact-bg">
            <button style={{ zIndex: 1 }} onClick={() => console.log("works")}>
              <i className="fa-solid fa-chevron-left"></i> Prev
            </button>
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href="#contact-bg">
            <button style={{ zIndex: 1 }} onClick={() => console.log("works")}>
              Next <i className="fa-solid fa-chevron-right"></i>
            </button>
          </a>
        </div>
      </div>
      <div
        style={{
          bottom: 150,
          position: "relative",
          width: "100vw",
          zIndex: 1,
          height: 40,
          marginBottom: -40,
        }}
      >
        <a href="#contact-bg">
          <button style={{ zIndex: 1 }} onClick={() => console.log("works")}>
            Get in touch <i className="fa-solid fa-chevron-down"></i>
          </button>
        </a>
      </div>
    </>
  );
}
