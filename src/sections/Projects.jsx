export default function Projects() {
  return (
    <>
      <div className="center-vertically" id="projects-bg-layer"></div>
      <div className="page-section center-vertically" id="projects">
        <div
          className="page-section-fore text-light"
          style={{ marginTop: -400 }}
        >
          <h1>Projects</h1>
          <h3 className="subtitle">Some recent work.</h3>
        </div>
        {/* Spin the wheel button??? - if so, make metal button */}
      </div>
      <div
        className=""
        style={{
          bottom: 250,
          height: 40,
          marginBottom: -40,
          position: "relative",
          width: "100vw",
          zIndex: 1,
        }}
      >
        <div className="col-md-6 offset-md-3">
          <a href="#contact-bg">
            <button
              style={{ zIndex: 1 }}
              id="btn-project-prev"
              //onClick={() => null}
            >
              <i className="fa-solid fa-chevron-left"></i> Prev
            </button>
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href="#contact-bg">
            <button style={{ zIndex: 1 }} id="btn-project-next">
              Next <i className="fa-solid fa-chevron-right"></i>
            </button>
          </a>
        </div>
      </div>
      <div
        style={{
          bottom: 150,
          height: 40,
          marginBottom: -40,
          position: "relative",
          width: "100vw",
          zIndex: 1,
        }}
      >
        <a href="#contact-bg">
          <button style={{ zIndex: 1 }}>
            Get in touch <i className="fa-solid fa-chevron-down"></i>
          </button>
        </a>
      </div>
    </>
  );
}
