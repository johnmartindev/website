export default function Intro() {
  return (
    <div className="page-section center-vertically" id="intro">
      <div className="text-light text-intro page-section-fore">
        <h1 style={{ marginTop: 50 }}>John Martin</h1>
        <h3 className="subtitle">Developer / Technologist / Dreamer.</h3>
        <div style={{ marginTop: 310, zIndex: 1000000000 }}>
          <a href="#skills-bg">
            <button
              style={{ zIndex: 1000000000 }}
              onClick={() => console.log("works")}
            >
              Discover more <i className="fa-solid fa-chevron-down"></i>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
