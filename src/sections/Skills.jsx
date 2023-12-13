import { useSkillsStore } from "../store/store";

const skills = [
  {
    title: "Web Development",
    description:
      'I offer a diverse range of web development skills — on both front and back ends ("full stack"). This includes HTML5, CSS3, and JavaScript (with various libraries), but also the ability to write the likes of Python, Ruby, and PHP when a project requires them.',
    img: {
      src: "/textures/skill-cubes-expanded/test.png",
    },
  },
  {
    title: "Programming",
    description:
      "I primarily program in JavaScript/TypeScript. In recent years, these languages have matured into highly robust and ubiquitous tools, used in servers, database APIs, and even for interfacing with microcontrollers (e.g., Arduinos). Additionally, there are few major programming languages with which I don't have some experience.",
    img: {
      src: "/textures/skill-cubes-expanded/test.png",
    },
  },
  {
    title: "User Experience",
    description:
      "I take a lot of satisfication in producing work that provides meaningful and relevant experiences for all users. User Experience Design... usability... my degree... speciality.",
    img: {
      src: "/textures/skill-cubes-expanded/test.png",
    },
  },
  {
    title: "Databases",
    description:
      "Skill 3 is ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: {
      src: "/textures/skill-cubes/3.png",
    },
  },
  {
    title: "Multimedia",
    description:
      "Skill 4 is ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: {
      src: "/textures/skill-cubes/4.png",
    },
  },
  {
    title: "3D Software",
    description:
      "Skill 5 is ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: {
      src: "/textures/skill-cubes/5.png",
    },
  },
  {
    title: "Bash Scripting",
    description:
      "Skill 6 is ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: {
      src: "/textures/skill-cubes/6.png",
    },
  },
  {
    title: "Writing",
    description:
      "Skill 7 is ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: {
      src: "/textures/skill-cubes/7.png",
    },
  },
  {
    title: "Soft Skills",
    description:
      "Skill 8 is ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: {
      src: "/textures/skill-cubes/8.png",
    },
  },
];

export default function Skills() {
  return (
    <>
      <div
        id="skill-white-radial-gradient-container"
        className="skill-white-radial-gradient-container"
      >
        <img
          width="100px"
          src="./textures/skill-cubes/white-radial-gradient.png"
        />
      </div>
      <div id="skill-overlay" className="skill-overlay py-0 m-0 p-0">
        <div className="center-vertically" style={{ height: "100vh" }}>
          <div
            className="col-12 col-md-6 text-light p-0 m-0"
            style={{ height: "85vh" }}
          >
            <div className="col-12 px-2">
              <button
                className="float-end btn btn-sm btn-outline-danger"
                onClick={() =>
                  (document.getElementById("skill-overlay").style.display =
                    "none")
                }
              >
                Close <i className="fa-solid fa-close"></i>
              </button>
            </div>
            <button
              className="btn btn-dark"
              style={{
                height: 180,
                left: 0,
                marginTop: "25vh",
                padding: 7,
                position: "absolute",
              }}
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button
              className="btn btn-dark"
              style={{
                height: 180,
                marginTop: "25vh",
                padding: 7,
                position: "absolute",
                right: 0,
              }}
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
            <div className="col-12" style={{ marginTop: "15vh" }}>
              <h1 style={{ fontSize: 42 }}>
                {skills[useSkillsStore((state) => state.skillIndex)].title}
              </h1>
            </div>
            <div className="col-12">
              <div className="center-vertically" style={{ height: 250 }}>
                <img
                  width="150px"
                  src={
                    skills[useSkillsStore((state) => state.skillIndex)].img.src
                  }
                />
              </div>
            </div>
            <div className="col-12 pt-1">
              <p style={{ fontWeight: 300, lineHeight: 2 }}>
                {
                  skills[useSkillsStore((state) => state.skillIndex)]
                    .description
                }
              </p>
            </div>
          </div>
        </div>
        {/* <div style={{ height: 200 }}>
        <div className="border skill-hud text-light row col-12 col-md-8 p-0 col-md-6 offset-md-2 offset-0">
          <div className="col-6 border">
            <h2>
              {skills[useSkillsStore((state) => state.skillIndex)].title}
            </h2>
          </div>
          <div className="col-6 border">
            <button
              onClick={() =>
                (document.getElementById("skill-overlay").style.display =
                  "none")
              }
            >
              Close <i className="fa-solid fa-close"></i>
            </button>
          </div>
        </div>
      </div> */}
        {/* <div className="skill-area border text-light row col-12 col-md-8 p-0 col-md-6 offset-md-2 offset-0">
          <div className="col-6 border center-vertically">
            <div className="skill-area-l center-vertically">
              <button className="test-button down left leftTop rounded-0">
                <img
                  src={
                    skills[useSkillsStore((state) => state.skillIndex)].img.src
                  }
                />
              </button>
            </div>
          </div>
          <div className="col-6 border center-vertically">
            <div className="skill-area-r center-vertically">
              <div className="">
                {
                  skills[useSkillsStore((state) => state.skillIndex)]
                    .description
                }
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="page-section center-vertically" id="skills">
        <div
          className="page-section-fore text-dark"
          style={{ marginTop: -400 }}
        >
          <h1>Skills</h1>
          <h3 className="subtitle-darker">To make it happen.</h3>
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
        <a href="#projects-bg">
          <button style={{ zIndex: 1 }} onClick={() => console.log("works")}>
            See projects <i className="fa-solid fa-chevron-down"></i>
          </button>
        </a>
      </div>
    </>
  );
}
